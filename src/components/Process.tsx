import React, { useEffect, useRef, useState } from "react";

const Process: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [loadedSrc, setLoadedSrc] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onVis = () => {
            if (document.hidden) video.pause();
        };
        document.addEventListener("visibilitychange", onVis);

        const io = new IntersectionObserver(
            async (entries) => {
                const entry = entries[0];
                if (!video) return;

                if (entry.isIntersecting) {
                    if (!loadedSrc) {
                        video.src = "/video/tl.mp4";      // luôn 1 file tl.mp4
                        setLoadedSrc(true);
                    }
                    // Autoplay phải muted
                    video.muted = true;
                    try { await video.play(); } catch {}
                } else {
                    video.pause();
                }
            },
            { threshold: 0.5 }
        );

        io.observe(video);
        return () => {
            io.disconnect();
            document.removeEventListener("visibilitychange", onVis);
        };
    }, [loadedSrc]);

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center p-0">
            <video
                ref={videoRef}
                // BẬT thanh điều khiển mặc định giống YouTube
                controls
                // Cho phép PiP, AirPlay/Remote playback (đừng tắt)
                // controlsList="nodownload" // (tùy chọn) nếu muốn ẩn nút tải
                playsInline
                loop
                preload="metadata"
                poster="/images/img.png"
                className="w-full max-w-none aspect-video shadow-lg"
            >
                Trình duyệt của bạn không hỗ trợ video HTML5.
            </video>
        </section>
    );
};

export default Process;
