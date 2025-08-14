import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="relative w-full text-white overflow-hidden">
            {/* Chiều cao responsive: mobile thấp hơn, md giữ 400px như bản laptop */}
            <div className="h-[240px] md:h-[400px]">
                {/* Ảnh nền */}
                <img
                    src="/images/img_59.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dòng liên hệ */}
                <div
                    className="
            absolute w-full
            bottom-6 md:bottom-20
            flex items-center justify-center
            flex-col md:flex-row
            gap-3 md:gap-60
            text-base md:text-[25px]
            z-10 px-4
          "
                >
                    <span className="whitespace-nowrap">Facebook</span>
                    <span className="whitespace-nowrap">Hotline</span>
                    <span className="whitespace-nowrap">Website</span>
                </div>

            </div>
        </div>
    );
};

export default Footer;
