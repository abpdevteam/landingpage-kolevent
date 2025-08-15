import React, { useEffect, useMemo, useRef, useState } from "react";

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number; }

const FADE_MS = 700; // thời gian fade

const CountdownWithServices: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isOver, setIsOver] = useState(false);

    // Video intro trước, xong mới show background + content
    const [showVideo, setShowVideo] = useState(true);   // có mount video overlay không
    const [revealed, setRevealed] = useState(false);    // đã trigger show background + fade chưa
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const targetDate = useMemo(() => new Date("2025-08-18T07:30:00+07:00"), []);

    // Đếm ngược (giữ nguyên)
    useEffect(() => {
        const tick = () => {
            const d = targetDate.getTime() - Date.now();
            if (d > 0) {
                const days = Math.floor(d / 86400000);
                const hours = Math.floor((d % 86400000) / 3600000);
                const minutes = Math.floor((d % 3600000) / 60000);
                const seconds = Math.floor((d % 60000) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setIsOver(true);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };
        tick();
        const t = setInterval(tick, 1000);
        return () => clearInterval(t);
    }, [targetDate]);

    // Fallback: nếu video không end trong 20s thì reveal
    useEffect(() => {
        if (!showVideo || revealed) return;
        const fallback = setTimeout(() => handleReveal(), 18000);
        return () => clearTimeout(fallback);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showVideo, revealed]);

    // Khi reveal, chờ fade xong mới unmount video
    useEffect(() => {
        if (!revealed) return;
        const t = setTimeout(() => setShowVideo(false), FADE_MS);
        return () => clearTimeout(t);
    }, [revealed]);

    const handleReveal = () => setRevealed(true);
    const handleEnded = () => handleReveal();
    const handleError = () => handleReveal();
    console.log(timeLeft);
    console.log(isOver);
    return (
        <div className="relative w-full min-h-[100dvh]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Background + nội dung (render sẵn để fade-in) */}
            <div
                className={`relative w-full transition-opacity`}
                style={{
                    opacity: revealed ? 1 : 0,
                    transitionDuration: `${FADE_MS}ms`,
                    backgroundImage: "url('/images/img_56.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="relative z-10 min-h-[100dvh] flex flex-col">
                    {/* HEADER: 2 logo */}
                    <header className="pt-2 md:pt-5">
                        <div className="max-w-6xl mx-auto px-3 md:px-4">
                            <div className="flex justify-center items-center gap-3 md:gap-6">
                                <img src="/images/img_2.png" alt="Logo 1" className="h-10 md:h-16 w-auto object-contain" />
                                <img src="/images/img_85.png" alt="Logo 2" className="h-10 md:h-16 w-auto object-contain" />
                            </div>
                        </div>
                    </header>

                    {/* MAIN */}
                    <main className="flex-1 flex flex-col items-center justify-center gap-2">
                        {/* KOL */}
                        <section className="w-full flex justify-start -mb-2 md:mb-0">
                            <div
                                className="leading-none font-extrabold text-white tracking-[-0.02em]"
                                style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 700 }}
                            >
                                <span className="block text-[30vw] md:text-[22vw]">KOL</span>
                            </div>
                        </section>

                        {/* Hàng: Ballroom + slogan */}
                        <section className="w-full relative">
                            <div className="md:ml-[85px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start relative">
                                {/* LEFT: Ballroom + địa chỉ */}
                                <div className="text-white z-10">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight" style={{ fontFamily: "NeueHelveticaExt, sans-serif" }}>
                                        Ballroom Tầng 5
                                    </div>
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight" style={{ fontFamily: "NeueHelveticaExt, sans-serif" }}>
                                        Khách sạn Intercontinental
                                    </div>
                                    <div className="mt-1 text-sm sm:text-base md:text-lg text-white/90" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                                        E6, Khu đô thị mới Cầu Giấy, P. Yên Hòa, TP. Hà Nội
                                    </div>
                                </div>

                                {/* RIGHT: Slogan */}
                                <div className="text-white relative min-w-0">
                                    <img
                                        src="/images/img_86.png"
                                        alt="với kỷ nguyên vươn mình của dân tộc"
                                        className="max-w-full h-auto w-[200px] sm:w-[300px] md:w-[500px] md:-ml-[180px] lg:-ml-[220px] xl:-ml-[180px]"
                                    />
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* FOOTER */}
                    <footer className="px-3 pt-2 pb-5 md:px-6 md:py-8">
                        <div className="max-w-6xl mx-auto space-y-6">
                            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12">
                                {/* Đơn vị phối hợp tổ chức */}
                                <div className="flex flex-col items-center space-y-2">
                  <span className="uppercase text-[11px] sm:text-xs md:text-sm tracking-wide text-white/90" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                    ĐƠN VỊ PHỐI HỢP TỔ CHỨC
                  </span>
                                    <div className="flex gap-3 md:gap-6">
                                        <img src="/images/img_14.png" alt="Đối tác A" className="h-7 md:h-8 object-contain" />
                                        <img src="/images/img_15.png" alt="Đối tác B" className="h-7 md:h-8 object-contain" />
                                    </div>
                                </div>

                                {/* Đơn vị tiên phong */}
                                <div className="flex flex-col items-center space-y-2">
                  <span className="uppercase text-[11px] sm:text-xs md:text-sm tracking-wide text-white/90" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                    ĐƠN VỊ TIÊN PHONG
                  </span>
                                    <div className="flex gap-3 md:gap-6">
                                        <img src="/images/img_16.png" alt="Tiên phong 1" className="w-16 md:w-20 h-8 md:h-9 object-contain p-1" />
                                        <img src="/images/img_57.png" alt="Tiên phong 2" className="w-18 md:w-24 h-10 md:h-9 object-contain p-1 b-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Đơn vị đồng hành */}
                            <div className="flex flex-col items-center space-y-2">
                                <p className="uppercase text-[11px] sm:text-xs md:text-sm tracking-wide text-white/90" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                                    ĐƠN VỊ ĐỒNG HÀNH
                                </p>
                                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
                                    <img src="/images/img_74.png" alt="Đồng hành 1" className="h-6 md:h-7 object-contain" />
                                    <img src="/images/img_75.png" alt="Đồng hành 2" className="h-6 md:h-7 object-contain" />
                                    <img src="/images/img_78.png" alt="Đồng hành 3" className="max-h-8 md:max-h-9 object-contain p-1" />
                                    <img src="/images/img_77.png" alt="Đồng hành 4" className="max-h-8 md:max-h-9 object-contain p-1" />
                                    <img src="/images/img_81.png" alt="Đồng hành 5" className="max-h-8 md:max-h-9 object-contain p-1" />
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            {/* Video overlay (fade-out rồi unmount) */}
            {showVideo && (
                <div
                    className="fixed inset-0 z-[100] bg-black transition-opacity"
                    style={{ opacity: revealed ? 0 : 1, transitionDuration: `${FADE_MS}ms` }}
                >
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        src="/video/motion.mp4"
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleEnded}
                        onError={handleError}
                        // poster="/images/img_56.png" // tuỳ chọn
                    />
                </div>
            )}
        </div>
    );
};

export default CountdownWithServices;
