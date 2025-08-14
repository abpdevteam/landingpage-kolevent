import React, { useEffect, useMemo, useState } from "react";

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number; }
const formatNumber = (n: number) => n.toString().padStart(2, "0");

const Item = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none">
            {formatNumber(value)}
        </div>
        <div
            className="mt-1 text-[10px] sm:text-xs md:text-sm text-white/90"
            style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}
        >
            {label}
        </div>
    </div>
);

const CountdownWithServices: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isOver, setIsOver] = useState(false);
    const [bgImage, setBgImage] = useState("/images/img_56.png");
    const [visibleSections, setVisibleSections] = useState<number[]>([]);

    const targetDate = useMemo(() => new Date("2025-08-18T07:30:00+07:00"), []);

    useEffect(() => {
        // Hiển thị các phần lần lượt
        const timer = setTimeout(() => setVisibleSections([0]), 100);
        const timer2 = setTimeout(() => setVisibleSections([0, 1]), 300);
        const timer3 = setTimeout(() => setVisibleSections([0, 1, 2]), 500);
        const timer4 = setTimeout(() => setVisibleSections([0, 1, 2, 3]), 700);
        const timer5 = setTimeout(() => setVisibleSections([0, 1, 2, 3, 4]), 900);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
        };
    }, []);

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
            {/* Dùng dynamic viewport để luôn khớp chiều cao màn hình */}
            <div className="relative z-10 min-h-[100dvh] flex flex-col">

                {/* OVERLAY TỔNG – ẨN TRÊN MOBILE, CHỈ HIỆN TỪ MD+ */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute z-[25] hidden md:block"
                    style={{
                        top: 0,
                        left: 0,
                        width: "clamp(260px, 42vw, 860px)",
                        height: "clamp(260px, 48vh, 620px)",
                        background:
                            "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 60%, rgba(0,0,0,0) 75%)",
                        filter: "blur(8px)",
                        borderRadius: "12px",
                    }}
                />

                {/* HEADER: logo nhỏ, padding rất ít trên mobile */}
                <header
                    className="pt-2 md:pt-5"
                    style={{
                        opacity: visibleSections.includes(0) ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                >
                    <div className="max-w-6xl mx-auto px-3 md:px-4">
                        <div className="flex justify-center items-center gap-3 md:gap-6">
                            <img src="/images/img_2.png" alt="Logo 1" className="h-10 md:h-12 w-auto object-contain" />
                            <img src="/images/img_6.png" alt="Logo 2" className="h-10 md:h-12 w-auto object-contain" />
                        </div>
                    </div>
                </header>

                {/* MAIN: chiếm toàn bộ khoảng còn lại, canh giữa theo trục dọc */}
                <main className="flex-1 px-3 md:px-4 flex flex-col items-center justify-center gap-3 md:gap-6">
                    {/* KOL + slogan – rất ít gap trên mobile */}
                    <section
                        className="w-full flex justify-center -mb-1 md:mb-0"
                        style={{
                            opacity: visibleSections.includes(1) ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                        }}
                    >
                        <div className="w-full max-w-7xl">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-10 select-none">
                                {/* KOL BIG */}
                                <div
                                    className="leading-none font-extrabold text-white tracking-[-0.02em] text-center md:text-left"
                                    style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 700 }}
                                >
                                    <span className="block text-[clamp(18vw,28vw,30vw)] md:text-[clamp(12vw,18vw,20vw)]">
                                        KOL
                                    </span>
                                </div>

                                {/* Slogan */}
                                <div className="text-white text-center md:text-left flex flex-col justify-center leading-tight gap-0.5 md:gap-1.5">
                                    {["với kỷ nguyên", "vươn mình", "của dân tộc"].map((text, i) => (
                                        <div
                                            key={i}
                                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                                            style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}
                                        >
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Tiêu đề countdown */}
                    <div
                        className="text-center -mt-1"
                        style={{
                            opacity: visibleSections.includes(2) ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                        }}
                    >
                        <h3
                            className="text-base sm:text-lg md:text-xl font-bold"
                            style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 500, color: "#ffffff" }}
                        >
                            COUNTDOWN ĐẾM NGƯỢC
                        </h3>
                        <p
                            className="text-base sm:text-lg md:text-xl"
                            style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400, color: "#ffffff" }}
                        >
                            ngày diễn ra sự kiện
                        </p>
                    </div>

                    {/* Countdown box – thu gọn padding, bỏ pb dư để gần footer hơn */}
                    <div
                        className="p-3 sm:p-4 md:p-4 w-full max-w-xl backdrop-blur"
                        style={{
                            background: "linear-gradient(180deg, rgba(255, 255, 255, 0) -56.25%, rgba(255, 255, 255, 0.3) 100%)",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "16px",
                            opacity: visibleSections.includes(3) ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                        }}
                    >
                        {!isOver ? (
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:flex md:items-center md:justify-center md:gap-6">
                                <Item value={timeLeft.days} label="Days" />
                                <span
                                    className="hidden md:block text-2xl text-white -mt-2"
                                    style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400, color: "#ffffff" }}
                                >
                                    :
                                </span>
                                <Item value={timeLeft.hours} label="Hours" />
                                <span
                                    className="hidden md:block text-2xl text-white -mt-2"
                                    style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400, color: "#ffffff" }}
                                >
                                    :
                                </span>
                                <Item value={timeLeft.minutes} label="Minutes" />
                                <span
                                    className="hidden md:block text-2xl text-white -mt-2"
                                    style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400, color: "#ffffff" }}
                                >
                                    :
                                </span>
                                <Item value={timeLeft.seconds} label="Seconds" />
                            </div>
                        ) : (
                            <div className="text-center py-3 md:py-4">
                                <p className="text-lg md:text-2xl font-semibold text-white">SỰ KIỆN ĐANG DIỄN RA</p>
                            </div>
                        )}
                    </div>
                </main>

                <footer
                    className="px-3 pt-2 pb-3 md:px-6 md:py-6 -mt-2 md:mt-0"
                    style={{
                        opacity: visibleSections.includes(4) ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                >
                    <div className="space-y-4">
                        {/* HÀNG 1: Đơn vị phối hợp tổ chức + Đơn vị tiên phong */}
                        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12">
                            {/* Đơn vị phối hợp tổ chức */}
                            <div className="flex flex-col items-center space-y-2">
                                <span
                                    className="uppercase text-[11px] sm:text-xs md:text-sm tracking-wide text-white/90"
                                    style={{fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400}}
                                >
                                    ĐƠN VỊ PHỐI HỢP TỔ CHỨC
                                </span>
                                <div className="flex gap-3 md:gap-6">
                                    <img src="/images/img_14.png" alt="Người Quan Sát"
                                         className="h-7 md:h-8 object-contain"/>
                                    <img src="/images/img_15.png" alt="Cyber Trust"
                                         className="h-7 md:h-8 object-contain"/>
                                </div>
                            </div>

                            {/* Đơn vị tiên phong */}
                            <div className="flex flex-col items-center space-y-2">
                                <span
                                    className="uppercase text-[11px] sm:text-xs md:text-sm tracking-wide text-white/90"
                                    style={{fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400}}
                                >
                                    ĐƠN VỊ TIÊN PHONG
                                </span>
                                <div className="flex gap-3 md:gap-6">
                                    <img src="/images/img_16.png" alt="Logo 2"
                                         className="w-16 md:w-20 h-8 md:h-9 object-contain p-1"/>
                                    <img src="/images/img_57.png" alt="Logo 3"
                                         className="w-16 md:w-20 h-8 md:h-9 object-contain p-1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default CountdownWithServices;