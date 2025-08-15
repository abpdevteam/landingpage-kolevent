import React, { useEffect, useMemo, useState } from "react";

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number; }

const CountdownWithServices: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isOver, setIsOver] = useState(false);
    const [bgImage, setBgImage] = useState("/images/img_56.png");
    const [visibleSections, setVisibleSections] = useState<number[]>([]);

    const targetDate = useMemo(() => new Date("2025-08-18T07:30:00+07:00"), []);

    // Lần lượt hiện các khối
    useEffect(() => {
        const timers = [
            setTimeout(() => setVisibleSections([0]), 100),      // header: logo
            setTimeout(() => setVisibleSections([0, 1]), 300),   // KOL
            setTimeout(() => setVisibleSections([0, 1, 2]), 500),// Hàng: Ballroom + slogan
            setTimeout(() => setVisibleSections([0, 1, 2, 3]), 700), // countdown
            setTimeout(() => setVisibleSections([0, 1, 2, 3, 4]), 900) // footer tổ chức + tiên phong
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    // Đếm ngược
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
                console.log(timeLeft);
                console.log(isOver);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };
        tick();
        const t = setInterval(tick, 1000);
        return () => clearInterval(t);
    }, [targetDate]);

    // Nền
    useEffect(() => {
        if (typeof window === "undefined") return;
        const mq = window.matchMedia("(max-width: 767px)");
        const apply = () => setBgImage(mq.matches ? "/images/img_56.png" : "/images/img_56.png");
        apply();
        mq.addEventListener("change", apply);
        return () => mq.removeEventListener("change", apply);
    }, []);

    return (
        <div
            className="relative w-full"
            style={{
                backgroundImage: `url('${bgImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <div className="relative z-10 min-h-[100dvh] flex flex-col">
                {/* OVERLAY desktop */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute z-[25] hidden md:block"
                    style={{
                        top: 0,
                        left: 0,
                        width: "clamp(260px, 42vw, 860px)",
                        height: "clamp(260px, 48vh, 620px)",
                        background: "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 60%, rgba(0,0,0,0) 75%)",
                        filter: "blur(8px)",
                        borderRadius: "12px",
                    }}
                />

                {/* 1) HEADER: 2 logo */}
                <header
                    className="pt-2 md:pt-5"
                    style={{ opacity: visibleSections.includes(0) ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}
                >
                    <div className="max-w-6xl mx-auto px-3 md:px-4">
                        <div className="flex justify-center items-center gap-3 md:gap-6">
                            <img src="/images/img_2.png" alt="Logo 1" className="h-10 md:h-16 w-auto object-contain" />
                            <img src="/images/img_85.png" alt="Logo 2" className="h-10 md:h-16 w-auto object-contain" />
                        </div>
                    </div>
                </header>

                {/* MAIN */}
                <main className="flex-1 flex flex-col items-center justify-center gap-2">
                    {/* 2) KOL */}
                    <section
                        className="w-full flex justify-start -mb-2 md:mb-0"
                        style={{opacity: visibleSections.includes(1) ? 1 : 0, transition: "opacity 0.3s ease-in-out"}}
                    >
                        <div
                            className="leading-none font-extrabold text-white tracking-[-0.02em]"
                            style={{fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 700}}
                        >
        <span className="block text-[clamp(18vw,28vw,30vw)] md:text-[clamp(12vw,18vw,20vw)]">
            KOL
        </span>
                        </div>
                    </section>
                    <section
                        className="w-full"
                        style={{opacity: visibleSections.includes(2) ? 1 : 0, transition: "opacity 0.3s ease-in-out"}}
                    >
                        <div className="md:ml-[70px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
                            {/* LEFT: Ballroom + địa chỉ - SÁT TRÁI */}
                            <div className="text-white">
                                <div
                                    className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
                                    style={{fontFamily: "NeueHelveticaExt, sans-serif"}}
                                >
                                    Ballroom Tầng 5
                                </div>
                                <div
                                    className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
                                    style={{fontFamily: "NeueHelveticaExt, sans-serif"}}
                                >
                                    Khách sạn Intercontinental
                                </div>
                                <div
                                    className="mt-1 text-sm sm:text-base md:text-lg text-white/90"
                                    style={{fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400}}
                                >
                                    E6, Khu đô thị mới Cầu Giấy, P. Yên Hòa, TP. Hà Nội
                                </div>
                            </div>

                            {/* RIGHT: Slogan - CŨNG SÁT TRÁI */}
                            <div className="text-white">
                                <div
                                    className="text-2xl sm:text-3xl md:text-5xl leading-tight"
                                    style={{fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400}}
                                >
                                    với kỷ nguyên
                                </div>
                                <div
                                    className="text-2xl sm:text-3xl md:text-5xl leading-tight"
                                    style={{fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400}}
                                >
                                    vươn mình của dân tộc
                                </div>
                            </div>
                        </div>
                    </section>

                </main>

                {/* 5) FOOTER: Hàng 1 = tổ chức + tiên phong | Hàng 2 = đồng hành */}
                <footer
                    className="px-3 pt-2 pb-5 md:px-6 md:py-8"
                    style={{opacity: visibleSections.includes(4) ? 1 : 0, transition: "opacity 0.3s ease-in-out"}}
                >
                    <div className="max-w-6xl mx-auto space-y-6">
                        {/* Hàng 1: Đơn vị phối hợp tổ chức + Đơn vị tiên phong */}
                        <div
                            className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12">
                            {/* Đơn vị phối hợp tổ chức */}
                            <div className="flex flex-col items-center space-y-2">
                <span
                    className="uppercase text-[11px] sm:text-xs md:text-sm tracking-wide text-white/90"
                    style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}
                >
                  ĐƠN VỊ PHỐI HỢP TỔ CHỨC
                </span>
                                <div className="flex gap-3 md:gap-6">
                                    <img src="/images/img_14.png" alt="Đối tác A" className="h-7 md:h-8 object-contain" />
                                    <img src="/images/img_15.png" alt="Đối tác B" className="h-7 md:h-8 object-contain" />
                                </div>
                            </div>

                            {/* Đơn vị tiên phong */}
                            <div className="flex flex-col items-center space-y-2">
                <span
                    className="uppercase text-[11px] sm:text-xs md:text-sm tracking-wide text-white/90"
                    style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}
                >
                  ĐƠN VỊ TIÊN PHONG
                </span>
                                <div className="flex gap-3 md:gap-6">
                                    <img src="/images/img_16.png" alt="Tiên phong 1" className="w-16 md:w-20 h-8 md:h-9 object-contain p-1" />
                                    <img src="/images/img_57.png" alt="Tiên phong 2" className="w-18 md:w-24 h-10 md:h-9 object-contain p-1 b-1" />
                                </div>
                            </div>
                        </div>

                        {/* Hàng 2: Đơn vị đồng hành */}
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
    );
};

export default CountdownWithServices;
