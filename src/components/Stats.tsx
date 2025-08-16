import React, { useEffect, useRef, useState } from "react";

const FADE_MS = 700;

/** Hook nhận biết mobile theo breakpoint md (768px) */
function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined") return;
        const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
        const update = () => setIsMobile(mql.matches);
        update();
        if (mql.addEventListener) mql.addEventListener("change", update);
        else mql.addListener(update);
        return () => {
            if (mql.removeEventListener) mql.removeEventListener("change", update);
            else mql.removeListener(update);
        };
    }, [breakpoint]);
    return isMobile;
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

    const isMobile = useIsMobile(768); // đồng bộ breakpoint md

    // Mobile: hiện UI ngay, không video
    useEffect(() => {
        if (isMobile) {
            setShowVideo(false);
            setRevealed(true);
        }
    }, [isMobile]);

    // Desktop: fallback auto-reveal nếu video không kết thúc sau 18s
    useEffect(() => {
        if (isMobile || !showVideo || revealed) return;
        const fallback = setTimeout(() => handleReveal(), 18000);
        return () => clearTimeout(fallback);
    }, [isMobile, showVideo, revealed]);

    // Sau khi revealed, cho video fade-out
    useEffect(() => {
        if (!revealed) return;
        const t = setTimeout(() => setShowVideo(false), FADE_MS);
        return () => clearTimeout(t);
    }, [revealed]);

    const handleReveal = () => setRevealed(true);
    const handleEnded = () => handleReveal();
    const handleError = () => handleReveal();



    // ===================== DESKTOP/LAPTOP =====================
    // Video motion trước, sau đó chỉ hiển thị 1 ảnh nền (img_4.png)
    if (!isMobile) {
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
                        src="/images/bp.jpg"
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

    // ===================== MOBILE (giữ nguyên UI hiện có) =====================
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
                        {/* KOL */}
                        <section className="w-full flex justify-start -mb-2 md:mb-0">
                            <div
                                className="leading-none font-extrabold text-white tracking-[-0.02em]"
                                style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 700 }}
                            >
                                <div className="flex">
                                    <FadeEach show={revealed} baseDelay={220} step={120} className="flex">
                                        {["K", "O", "L"].map((ch, i) => (
                                            <span key={i} className="block text-[30vw] md:text-[22vw] leading-none">{ch}</span>
                                        ))}
                                    </FadeEach>
                                </div>
                            </div>
                        </section>

                        {/* Hàng: (đã đổi thứ tự mobile) */}
                        <section className="w-full relative">
                            <div className="md:ml-[85px] flex flex-col items-center gap-4 md:gap-8 md:grid md:grid-cols-2 md:items-start">
                                {/* 1) ẢNH SLOGAN — mobile FIRST, desktop RIGHT */}
                                <Fade show={revealed} delay={520} y={10} className="order-1 md:order-2 w-full">
                                    <div className="text-white relative min-w-0 w-full flex justify-center md:justify-start">
                                        <img
                                            src="/images/img_86.png"
                                            alt="với kỷ nguyên vươn mình của dân tộc"
                                            className="max-w-full h-auto w-[220px] sm:w-[300px] md:w-[500px] md:-ml-[180px] lg:-ml-[220px] xl:-ml-[180px]"
                                        />
                                    </div>
                                </Fade>


                                <div className="order-2 md:order-1 text-white z-10 w-full">
                                    <FadeEach show={revealed} baseDelay={380} step={120} className="w-full">
                                        {[
                                            "Hà Nội | 18.08.2025",
                                            "Ballroom Tầng 5",
                                            "Khách sạn Intercontinental",
                                        ].map((t, idx) => (
                                            <div
                                                key={idx}
                                                className="text-center md:text-left text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
                                                style={{ fontFamily: "NeueHelveticaExt, sans-serif" }}
                                            >
                                                {t}
                                            </div>
                                        ))}
                                        <div
                                            className="mt-1 text-center md:text-left text-sm sm:text-base md:text-lg text-white/90"
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
                    <span className=" text-[11px] sm:text-xs md:text-sm tracking-wide text-white/90" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                      Đơn vị tiên phong
                    </span>
                                    </Fade>
                                    <FadeEach show={revealed} baseDelay={740} step={120} className="flex gap-4 md:gap-8">
                                        <img
                                            src="/images/img_16.png"
                                            alt="Tiên phong 1"
                                            className="w-20 md:w-28 h-10 md:h-12 object-contain p-1"
                                        />
                                        <img
                                            src="/images/img_57.png"
                                            alt="Tiên phong 2"
                                            className="w-20 md:w-28 h-10 md:h-12 object-contain p-1 -mt-1"
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
