import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="relative w-full h-[400px] text-white overflow-hidden">
            {/* Ảnh nền */}
            <img
                src="/images/img_59.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Ảnh logo */}
            <div className="absolute top-4 w-full flex justify-center z-10">
                <img
                    src="/images/img_12.png"
                    alt="Logo"
                    width={230}
                    height={125}
                    className="object-contain"
                />
            </div>

            {/* Tiêu đề */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <h2
                    className="font-semibold text-[40px] leading-none text-center"
                    style={{fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 700}}
                >
                    LIÊN MINH NIỀM TIN SỐ
                </h2>
            </div>

            {/* Dòng liên hệ */}
            <div className="absolute bottom-4 w-full flex justify-center space-x-8 text-[25px] z-10">
                <span>Facebook</span>
                <span>Hotline</span>
                <span>Website</span>
            </div>
        </div>
    );
};

export default Footer;
