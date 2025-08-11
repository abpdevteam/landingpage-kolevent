import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="relative w-full h-[400px] text-white">
            {/* Ảnh nền */}
            <img
                src="/images/img_11.png"
                alt="Background"
                className="absolute inset-0 w-full h-full"
            />

            {/* Lớp gradient overlay 1 */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(360deg, rgba(28, 62, 133, 0) 0%, #1D3D86 97.34%)",
                }}
            ></div>

            {/* Lớp gradient overlay 2 */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(360deg, rgba(28, 62, 133, 0) 0%, #1D3D86 97.34%)",
                    transform: "rotate(-180deg)",
                }}
            ></div>

            {/* Ảnh 12 ở trên cùng */}
            <div className="absolute top-4 w-full flex justify-center z-10">
                <img
                    src="/images/img_12.png"
                    alt="Logo"
                    width={230}
                    height={125}
                    className="object-contain"
                />
            </div>

            {/* Tiêu đề ở giữa */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <h2
                    className="font-semibold text-[68px] leading-none text-center"
                    style={{
                        fontFamily: "'BT Suave', sans-serif",
                        fontWeight: 500,
                        color: "#ffffff",
                    }}
                >
                    LIÊN MINH NIỀM TIN SỐ
                </h2>
            </div>

            {/* Dòng liên hệ ở dưới cùng */}
            <div className="absolute bottom-4 w-full flex justify-center space-x-8 text-[25px] z-10">
                <span>Facebook</span>
                <span>Hotline</span>
                <span>Website</span>
            </div>
        </div>
    );
};

export default Footer;
