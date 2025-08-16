import React, { useEffect, useRef, useState } from "react";

const FADE_MS = 700;

/** true nếu viewport <= 1024px (mobile + tablet) */
function useIsHandheld(maxPx = 1024) {
    const [isHandheld, setIsHandheld] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined") return;
        const mql = window.matchMedia(`(max-width: ${maxPx - 1}px)`);
        const update = () => setIsHandheld(mql.matches);
        update();
        if (mql.addEventListener) mql.addEventListener("change", update);
        else mql.addListener(update);
        return () => {
            if (mql.removeEventListener) mql.removeEventListener("change", update);
            else mql.removeListener(update);
        };
    }, [maxPx]);
    return isHandheld;
}

// ---- Hiệu ứng cho 1 item ----
const Fade: React.FC<{
    show: boolean; delay?: number; duration?: number; y?: number; className?: string;
    children: React.ReactNode;
}> = ({ show, delay = 0, duration = FADE_MS, y = 8, className, children }) => (
    <div
        className={className}
        style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0px)" : `translateY(${y}px)`,
            transitionProperty: "opacity, transform",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDuration: `${duration}ms`,
            transitionDelay: `${delay}ms`,
            willChange: "opacity, transform",
        }}
    >
        {children}
    </div>
);

// ---- Hiệu ứng cho nhiều items (stagger) ----
const FadeEach: React.FC<{
    show: boolean; baseDelay?: number; step?: number; duration?: number; y?: number; className?: string;
    children: React.ReactNode;
}> = ({ show, baseDelay = 0, step = 120, duration = FADE_MS, y = 8, className, children }) => {
    const items = React.Children.toArray(children);
    return (
        <div className={className}>
            {items.map((child, i) => (
                <Fade key={i} show={show} delay={baseDelay + i * step} duration={duration} y={y}>
                    {child as React.ReactElement}
                </Fade>
            ))}
        </div>
    );
};

const CountdownWithServices: React.FC = () => {
    const [showVideo, setShowVideo] = useState(true);
    const [revealed, setRevealed] = useState(false); // reveal ảnh/backdrop
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // Mobile + Tablet chung 1 nhánh
    const isHandheld = useIsHandheld(1024);

    // Handheld: hiện UI ngay, không video
    useEffect(() => {
        if (isHandheld) {
            setShowVideo(false);
            setRevealed(true);
        }
    }, [isHandheld]);

    // Desktop: fallback auto-reveal nếu video không kết thúc sau 18s
    useEffect(() => {
        if (isHandheld || !showVideo || revealed) return;
        const fallback = setTimeout(() => setRevealed(true), 18000);
        return () => clearTimeout(fallback);
    }, [isHandheld, showVideo, revealed]);

    // Sau khi revealed, cho video fade-out
    useEffect(() => {
        if (!revealed) return;
        const t = setTimeout(() => setShowVideo(false), FADE_MS);
        return () => clearTimeout(t);
    }, [revealed]);

    const handleEnded = () => setRevealed(true);
    const handleError = () => setRevealed(true);

    // ===================== DESKTOP (>= 1024px) =====================
    if (!isHandheld) {
        return (
            <div className="relative w-full min-h-[100dvh]">
                {/* ẢNH nền sau khi video kết thúc */}
                <div
                    className="relative w-full min-h-[100dvh] transition-opacity"
                    style={{
                        opacity: revealed ? 1 : 0,
                        transitionDuration: `${FADE_MS}ms`,
                    }}
                >
                    <img
                        src="/images/bp.png"
                        alt="background"
                        className="w-full h-auto block"
                    />
                </div>

                {/* Overlay video motion */}
                {showVideo && (
                    <div
                        className="fixed inset-0 z-[100] bg-black transition-opacity"
                        style={{
                            opacity: revealed ? 0 : 1,
                            transitionDuration: `${FADE_MS}ms`,
                        }}
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
                        />
                    </div>
                )}
            </div>
        );
    }

    // ===================== HANDHELD (Mobile + Tablet) =====================
    return (
        <div className="relative w-full min-h-[100dvh]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* NỀN tổng thể fade-in */}
            <div
                className="relative w-full transition-opacity"
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
                    {/* HEADER */}
                    <header className="pt-2 lg:pt-5">
                        <div className="max-w-6xl mx-auto px-3 lg:px-4">
                            <FadeEach show={revealed} baseDelay={100} step={140} className="flex justify-center items-center gap-3 lg:gap-6">
                                <img src="/images/img_2.png" alt="Logo 1" className="h-10 lg:h-16 w-auto object-contain" />
                                <img src="/images/img_85.png" alt="Logo 2" className="h-10 lg:h-16 w-auto object-contain" />
                            </FadeEach>
                        </div>
                    </header>

                    {/* MAIN */}
                    <main className="flex-1 flex flex-col items-center justify-center gap-2">
                        {/* KOL */}
                        <section className="w-full flex justify-start -mb-2 lg:mb-0">
                            <div
                                className="leading-none font-extrabold text-white tracking-[-0.02em]"
                                style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 700 }}
                            >
                                <div className="flex">
                                    <FadeEach show={revealed} baseDelay={220} step={120} className="flex">
                                        {["K", "O", "L"].map((ch, i) => (
                                            <span key={i} className="block text-[30vw] lg:text-[22vw] leading-none">{ch}</span>
                                        ))}
                                    </FadeEach>
                                </div>
                            </div>
                        </section>

                        {/* Hàng: (đã đổi thứ tự handheld) */}
                        <section className="w-full relative">
                            <div className="lg:ml-[85px] flex flex-col items-center gap-4 lg:gap-8 lg:grid lg:grid-cols-2 lg:items-start">
                                {/* 1) ẢNH SLOGAN — handheld FIRST, desktop RIGHT */}
                                <Fade show={revealed} delay={520} y={10} className="order-1 lg:order-2 w-full">
                                    <div className="text-white relative min-w-0 w-full flex justify-center lg:justify-start">
                                        <img
                                            src="/images/img_86.png"
                                            alt="với kỷ nguyên vươn mình của dân tộc"
                                            className="max-w-full h-auto w-[220px] sm:w-[300px] lg:w-[500px] lg:-ml-[180px] xl:-ml-[180px]"
                                        />
                                    </div>
                                </Fade>

                                <div className="order-2 lg:order-1 text-white z-10 w-full">
                                    <FadeEach show={revealed} baseDelay={380} step={120} className="w-full">
                                        {[
                                            "Hà Nội | 18.08.2025",
                                            "Ballroom Tầng 5",
                                            "Khách sạn Intercontinental",
                                            "Hanoi Landmark72"
                                        ].map((t, idx) => (
                                            <div
                                                key={idx}
                                                className="text-center lg:text-left text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
                                                style={{ fontFamily: "NeueHelveticaExt, sans-serif" }}
                                            >
                                                {t}
                                            </div>
                                        ))}
                                        <div
                                            className="mt-1 text-center lg:text-left text-sm sm:text-base lg:text-lg text-white/90"
                                            style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}
                                        >
                                            E6, Khu đô thị mới Cầu Giấy, P. Yên Hòa, TP. Hà Nội
                                        </div>
                                    </FadeEach>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* FOOTER */}
                    <footer className="px-3 pt-2 pb-5 lg:px-6 lg:py-8">
                        <div className="max-w-6xl mx-auto space-y-6">
                            <FadeEach show={revealed} baseDelay={650} step={120} className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-12">
                                {/* Đơn vị phối hợp tổ chức */}
                                <div className="flex flex-col items-center space-y-2">
                                    <Fade show={revealed} delay={680}>
                                        <span className=" text-[11px] sm:text-xs lg:text-sm tracking-wide text-white/90" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                                            Đơn vị phối hợp tổ chức
                                        </span>
                                    </Fade>
                                    <FadeEach show={revealed} baseDelay={720} step={120} className="flex gap-3 lg:gap-6">
                                        <img
                                            src="/images/img_14.png"
                                            alt="Đối tác A"
                                            className="h-6 lg:h-7 object-contain"
                                        />
                                        <img
                                            src="/images/img_15.png"
                                            alt="Đối tác B"
                                            className="h-6 lg:h-7 object-contain"
                                        />
                                    </FadeEach>
                                </div>

                                {/* Đơn vị tiên phong */}
                                <div className="flex flex-col items-center space-y-2">
                                    <Fade show={revealed} delay={700}>
                                        <span className=" text-[11px] sm:text-xs lg:text-sm tracking-wide text-white/90" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                                            Đơn vị tiên phong
                                        </span>
                                    </Fade>
                                    <FadeEach show={revealed} baseDelay={740} step={120} className="flex gap-4 lg:gap-8">
                                        <img
                                            src="/images/img_16.png"
                                            alt="Tiên phong 1"
                                            className="w-20 lg:w-28 h-10 lg:h-12 object-contain p-1"
                                        />
                                        <img
                                            src="/images/img_57.png"
                                            alt="Tiên phong 2"
                                            className="w-20 lg:w-28 h-10 lg:h-12 object-contain p-1 -mt-1"
                                        />
                                    </FadeEach>
                                </div>
                            </FadeEach>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default CountdownWithServices;
