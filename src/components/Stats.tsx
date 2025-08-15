import React, { useEffect, useRef, useState } from "react";

const FADE_MS = 700;

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
    const [revealed, setRevealed] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        if (!showVideo || revealed) return;
        const fallback = setTimeout(() => handleReveal(), 18000);
        return () => clearTimeout(fallback);
    }, [showVideo, revealed]);

    useEffect(() => {
        if (!revealed) return;
        const t = setTimeout(() => setShowVideo(false), FADE_MS);
        return () => clearTimeout(t);
    }, [revealed]);

    const handleReveal = () => setRevealed(true);
    const handleEnded = () => handleReveal();
    const handleError = () => handleReveal();

    // dữ liệu demo để map từng dòng/ảnh:
    const leftTexts = [
        "Ballroom Tầng 5",
        "Khách sạn Intercontinental",
        "E6, Khu đô thị mới Cầu Giấy, P. Yên Hòa, TP. Hà Nội",
    ];
    // tách chữ K O L để fade từng ký tự
    const kolLetters = ["K","O","L"];

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
                    {/* HEADER: fade từng logo */}
                    <header className="pt-2 md:pt-5">
                        <div className="max-w-6xl mx-auto px-3 md:px-4">
                            <FadeEach show={revealed} baseDelay={100} step={140} className="flex justify-center items-center gap-3 md:gap-6">
                                <img src="/images/img_2.png" alt="Logo 1" className="h-10 md:h-16 w-auto object-contain" />
                                <img src="/images/img_85.png" alt="Logo 2" className="h-10 md:h-16 w-auto object-contain" />
                            </FadeEach>
                        </div>
                    </header>

                    {/* MAIN */}
                    <main className="flex-1 flex flex-col items-center justify-center gap-2">
                        {/* KOL: fade từng ký tự to */}
                        <section className="w-full flex justify-start -mb-2 md:mb-0">
                            <div
                                className="leading-none font-extrabold text-white tracking-[-0.02em]"
                                style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 700 }}
                            >
                                <div className="flex">
                                    <FadeEach show={revealed} baseDelay={220} step={120} className="flex">
                                        {kolLetters.map((ch, i) => (
                                            <span key={i} className="block text-[30vw] md:text-[22vw] leading-none">{ch}</span>
                                        ))}
                                    </FadeEach>
                                </div>
                            </div>
                        </section>

                        {/* Hàng: Ballroom + slogan */}
                        <section className="w-full relative">
                            <div className="md:ml-[85px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start relative">
                                {/* LEFT: fade từng dòng địa chỉ */}
                                <div className="text-white z-10">
                                    <FadeEach show={revealed} baseDelay={380} step={120}>
                                        <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight" style={{ fontFamily: "NeueHelveticaExt, sans-serif" }}>
                                            {leftTexts[0]}
                                        </div>
                                        <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight" style={{ fontFamily: "NeueHelveticaExt, sans-serif" }}>
                                            {leftTexts[1]}
                                        </div>
                                        <div className="mt-1 text-sm sm:text-base md:text-lg text-white/90" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                                            {leftTexts[2]}
                                        </div>
                                    </FadeEach>
                                </div>

                                {/* RIGHT: slogan ảnh riêng */}
                                <Fade show={revealed} delay={520} y={10}>
                                    <div className="text-white relative min-w-0">
                                        <img
                                            src="/images/img_86.png"
                                            alt="với kỷ nguyên vươn mình của dân tộc"
                                            className="max-w-full h-auto w-[200px] sm:w-[300px] md:w-[500px] md:-ml-[180px] lg:-ml-[220px] xl:-ml-[180px]"
                                        />
                                    </div>
                                </Fade>
                            </div>
                        </section>
                    </main>

                    {/* FOOTER: từng khối + từng logo trong khối */}
                    <footer className="px-3 pt-2 pb-5 md:px-6 md:py-8">
                        <div className="max-w-6xl mx-auto space-y-6">
                            <FadeEach show={revealed} baseDelay={650} step={120} className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12">
                                {/* Đơn vị phối hợp tổ chức */}
                                <div className="flex flex-col items-center space-y-2">
                                    <Fade show={revealed} delay={680}>
                    <span className=" text-[11px] sm:text-xs md:text-sm tracking-wide text-white/90" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                      Đơn vị phối hợp tổ chức
                    </span>
                                    </Fade>
                                    <FadeEach show={revealed} baseDelay={720} step={120} className="flex gap-3 md:gap-6">
                                        <img src="/images/img_14.png" alt="Đối tác A" className="h-7 md:h-8 object-contain" />
                                        <img src="/images/img_15.png" alt="Đối tác B" className="h-7 md:h-8 object-contain" />
                                    </FadeEach>
                                </div>

                                {/* Đơn vị tiên phong */}
                                <div className="flex flex-col items-center space-y-2">
                                    <Fade show={revealed} delay={700}>
                    <span className="uppercase text-[11px] sm:text-xs md:text-sm tracking-wide text-white/90" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                      Đơn vị tiên phong
                    </span>
                                    </Fade>
                                    <FadeEach show={revealed} baseDelay={740} step={120} className="flex gap-3 md:gap-6">
                                        <img src="/images/img_16.png" alt="Tiên phong 1" className="w-16 md:w-20 h-8 md:h-9 object-contain p-1" />
                                        <img src="/images/img_57.png" alt="Tiên phong 2" className="w-18 md:w-24 h-10 md:h-9 object-contain p-1 b-1" />
                                    </FadeEach>
                                </div>
                            </FadeEach>
                        </div>
                    </footer>
                </div>
            </div>

            {/* Overlay video */}
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
                    />
                </div>
            )}
        </div>
    );
};

export default CountdownWithServices;
