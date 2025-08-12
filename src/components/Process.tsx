import React from "react";
const Process: React.FC = () => {
    return (
        <section className=" w-full flex flex-col items-center justify-center p-0">
            <video
                controls
                className="w-full max-w-none aspect-video shadow-lg"
            >
                <source src="/video/KOLKOC.mp4" type="video/mp4"/>
                Trình duyệt của bạn không hỗ trợ video HTML5.
            </video>
        </section>
    );
};

export default Process;
