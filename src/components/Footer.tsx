import React from "react";
const Footer: React.FC = () => {
    return (
        <div className="w-full max-w-2xl mx-auto  p-12 text-center">
            {/* Logo Section */}
            <div className="mb-8">
                <h1 className="text-lg font-bold text-black tracking-wider">LOGO</h1>
            </div>

            {/* Main Title */}
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">LIÊN MINH NIỀM TIN SỐ</h2>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-3 gap-8 text-sm font-medium text-black">
                <div>
                    <span>FACEBOOK</span>
                </div>
                <div>
                    <span>HOTLINE</span>
                </div>
                <div>
                    <span>WEBSITE</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;