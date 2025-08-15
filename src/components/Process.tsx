import React, { useEffect, useRef } from "react";

const Process: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch(() => {});
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center p-0">
            <video
                ref={videoRef}
                muted
                playsInline
                loop
                preload="metadata"
                className="w-full max-w-none aspect-video shadow-lg"
            >
                <source src="/video/tl.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video HTML5.
            </video>
        </section>
    );
};

export default Process;
