import React, { useEffect, useRef, useState } from "react";

const Process: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [loadedSrc, setLoadedSrc] = useState(false);
    const [userInteracted, setUserInteracted] = useState(false);

    // 1) Pause khi tab ẩn
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        const onVis = () => { if (document.hidden) v.pause(); };
        document.addEventListener("visibilitychange", onVis);
        return () => document.removeEventListener("visibilitychange", onVis);
    }, []);

    // 2) Autoplay (muted) khi vào viewport
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        const io = new IntersectionObserver(
            async ([entry]) => {
                if (!v) return;

                if (entry.isIntersecting) {
                    if (!loadedSrc) {
                        v.src = "/video/tl.mp4"; // luôn 1 file tl.mp4
                        setLoadedSrc(true);
                    }
                    // Chỉ ép muted trước khi có tương tác
                    if (!userInteracted) {
                        v.muted = true;
                        v.setAttribute("muted", ""); // fix iOS: đảm bảo muted attr tồn tại
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

    // 3) Ghi nhận tương tác đầu tiên -> bỏ mute + play trong CHÍNH handler
    useEffect(() => {
        const onFirstInteract = () => {
            const v = videoRef.current;
            if (!v) return;

            setUserInteracted(true);
            // Bỏ mute (cả property lẫn attribute) + play lại trong handler
            v.muted = false;
            v.removeAttribute("muted"); // iOS Safari đôi khi cần bỏ attr để mở tiếng
            v.play().catch(() => {});   // gọi trong handler sẽ không bị chặn

            // Gỡ listener sau lần đầu
            window.removeEventListener("pointerdown", onFirstInteract);
            window.removeEventListener("touchend", onFirstInteract);
            window.removeEventListener("keydown", onFirstInteract);
        };

        // Dùng nhiều loại event để chắc chắn trên mobile
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
        <section className="w-full min-h-screen flex flex-col items-center justify-center p-0">
            <video
                ref={videoRef}
                // Cho phép UI điều khiển (người dùng có thể bấm loa)
                controls
                playsInline
                loop
                preload="metadata"
                poster="/images/img.png"
                // Khởi tạo muted để được autoplay; sẽ bỏ ở handler tương tác
                muted
                className="w-full max-w-none aspect-video shadow-lg"
            >
                Trình duyệt của bạn không hỗ trợ video HTML5.
            </video>
        </section>
    );
};

export default Process;
