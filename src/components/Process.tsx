import React from "react";

const Process: React.FC = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center p-0">
            <video
                controls
                className="w-full max-w-none aspect-video shadow-lg"
            >
                <source
                    src="https://vtvgo-vods.vtvdigital.vn/Qx1DmFPi8fWmtZUBY4jhgA/1754206019/vtvgo-media/vod/2025/07/28/KOLKOC.mp4"
                    type="video/mp4"
                />
                Trình duyệt của bạn không hỗ trợ video HTML5.
            </video>
        </section>
    );
};

export default Process;