import React, { useEffect, useRef, useState } from "react";

const Process: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [loadedSrc, setLoadedSrc] = useState(false);
    const [userInteracted, setUserInteracted] = useState(false);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        const onVis = () => { if (document.hidden) v.pause(); };
        document.addEventListener("visibilitychange", onVis);
        return () => document.removeEventListener("visibilitychange", onVis);
    }, []);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        const io = new IntersectionObserver(
            async ([entry]) => {
                if (!v) return;

                if (entry.isIntersecting) {
                    if (!loadedSrc) {
                        v.src = "https://niemtinso.vn/video/intro.mp4";
                        setLoadedSrc(true);
                    }
                    if (!userInteracted) {
                        v.muted = true;
                        v.setAttribute("muted", "");
                    }
                    try { await v.play(); } catch {}
                } else {
                    v.pause();
                }
            },
            { threshold: 0.5 }
        );

        io.observe(v);
        return () => io.disconnect();
    }, [loadedSrc, userInteracted]);

    useEffect(() => {
        const onFirstInteract = () => {
            const v = videoRef.current;
            if (!v) return;

            setUserInteracted(true);
            v.muted = false;
            v.removeAttribute("muted");
            v.play().catch(() => {});

            window.removeEventListener("pointerdown", onFirstInteract);
            window.removeEventListener("touchend", onFirstInteract);
            window.removeEventListener("keydown", onFirstInteract);
        };

        window.addEventListener("pointerdown", onFirstInteract, { once: true });
        window.addEventListener("touchend", onFirstInteract, { once: true });
        window.addEventListener("keydown", onFirstInteract, { once: true });

        return () => {
            window.removeEventListener("pointerdown", onFirstInteract);
            window.removeEventListener("touchend", onFirstInteract);
            window.removeEventListener("keydown", onFirstInteract);
        };
    }, []);

    return (

        <section className="relative">
            <video
                ref={videoRef}
                controls
                playsInline
                loop
                preload="metadata"
                poster="/images/img.png"
                muted
            >
                Trình duyệt của bạn không hỗ trợ video HTML5.
            </video>
        </section>
    );
};

export default Process;
