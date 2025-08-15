import React, { useEffect, useRef, useState } from "react";

const Process: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [loadedSrc, setLoadedSrc] = useState(false); // đã gán src chưa

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Tạm dừng khi tab ẩn
        const onVis = () => {
            if (document.hidden) video.pause();
        };
        document.addEventListener("visibilitychange", onVis);

        // Quan sát viewport
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach(async (e) => {
                    if (!video) return;

                    if (e.isIntersecting) {
                        // Lần đầu mới gán src để tránh tải sớm
                        if (!loadedSrc) {
                            video.src = "/video/tl.mp4";
                            setLoadedSrc(true);
                        }
                        video.muted = true; // đảm bảo autoplay trên iOS
                        try {
                            await video.play();
                        } catch {}
                    } else {
                        video.pause();
                    }
                });
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
                // Chưa có src ban đầu — sẽ gán khi vào viewport
                muted
                playsInline
                loop
                preload="none"              // không tải sớm khi chưa cần
                poster="/images/img.png"
                className="w-full max-w-none aspect-video shadow-lg"
                controls={false}
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
                webkit-playsinline="true"
            >
                Trình duyệt của bạn không hỗ trợ video HTML5.
            </video>
        </section>
    );
};

export default Process;
