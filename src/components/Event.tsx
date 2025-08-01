import React from "react";

const Event: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-5xl mx-auto space-y-8"> {/* Tăng max-width lên 5xl */}
                {/* Header Event Info - Card to hơn */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-500 w-full"> {/* Tăng padding */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-3 w-full">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
                                <div className="text-3xl md:text-4xl font-light text-gray-600 whitespace-nowrap">
                                    8h00 → 12h00
                                </div>
                                <div className="text-3xl md:text-4xl font-light text-gray-400 whitespace-nowrap">
                                    18.08.2025
                                </div>
                            </div>

                            <div className="flex justify-between items-center w-full">
                                <div className="text-xl md:text-2xl text-gray-500">
                                    Khách sạn Intercontinental Hanoi Landmark72
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-8"> {/* Tăng khoảng cách */}
                    <div
                        className="text-lg md:text-xl text-gray-800 leading-relaxed space-y-6"> {/* Tăng kích thước chữ */}
                        <p>Quy tụ các KOL tiêu biểu trên toàn quốc cùng đại diện cơ quan quản lý và doanh nghiệp</p>
                        <p>Diễn đàn thường niên, uy tín và quy mô nhất dành cho KOL.</p>
                        <p>
                            Nhìn nhận vai trò, trách nhiệm của KOL trong kỷ nguyên số, đồng thời đề xuất các giải pháp
                            phát huy ảnh
                            hưởng tích cực của họ trong phát triển đất nước và bảo vệ an ninh trật tự.
                        </p>
                    </div>

                    {/* Statistics Section */}
                    <div className="space-y-8"> {/* Tăng khoảng cách */}
                        <h2 className="text-3xl md:text-4xl font-light text-gray-400 text-center">SỰ GÓP MẶT CỦA</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Tăng khoảng cách */}
                            {/* 300+ KOLs */}
                            <div className="bg-gray-200 rounded-2xl p-8 md:p-10 h-full"> {/* Tăng padding */}
                                <div className="space-y-6"> {/* Tăng khoảng cách */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-5xl md:text-6xl font-bold text-black">300+</span>
                                        <span className="text-xl md:text-2xl font-medium text-gray-700">KOLS</span>
                                    </div>

                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed"> {/* Tăng kích thước */}
                                        Lựa chọn theo tiêu chí từ Cục an ninh
                                        mạng và Cục nghiệp vụ của Bộ và
                                        Công an
                                    </p>
                                </div>
                            </div>

                            {/* 50+ Businesses */}
                            <div className="bg-gray-200 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 h-full"> {/* Tăng padding */}
                                <div className="space-y-6"> {/* Tăng khoảng cách */}
                                    <div className="flex items-center gap-3"> {/* Tăng khoảng cách */}
                                        <span className="text-5xl md:text-6xl font-bold text-black">50+</span> {/* Tăng kích thước */}
                                        <div className="text-xl md:text-2xl font-medium text-gray-700"> {/* Tăng kích thước */}
                                            <div>DOANH</div>
                                            <div>NGHIỆP</div>
                                        </div>
                                    </div>
                                    <p className="text-base md:text-lg text-gray-700">Truyền thông, đào tạo, quản lý KOL...</p> {/* Tăng kích thước */}
                                </div>
                            </div>

                            {/* 50+ Experts */}
                            <div className="bg-gray-200 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 h-full"> {/* Tăng padding */}
                                <div className="space-y-6"> {/* Tăng khoảng cách */}
                                    <div className="flex items-center gap-3"> {/* Tăng khoảng cách */}
                                        <span className="text-5xl md:text-6xl font-bold text-black">50+</span> {/* Tăng kích thước */}
                                        <div className="text-xl md:text-2xl font-medium text-gray-700"> {/* Tăng kích thước */}
                                            <div>CHUYÊN</div>
                                            <div>GIA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Partner Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Tăng khoảng cách */}
                        {/* State Management */}
                        <div className="bg-gray-200 rounded-2xl p-8 shadow-sm border border-gray-200 h-full"> {/* Tăng padding */}
                            <div className="space-y-6"> {/* Tăng khoảng cách */}
                                <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">CƠ QUAN QUẢN LÝ NHÀ NƯỚC</h3> {/* Tăng kích thước */}
                                <p className="text-base text-gray-600 leading-relaxed"> {/* Tăng kích thước */}
                                    Thuộc các bộ: Công an, Khoa học và
                                    Công nghệ, Công thương, Quốc
                                    phòng, Ngân hàng Nhà nước…
                                </p>
                            </div>
                        </div>

                        {/* Social Media Platforms */}
                        <div className="bg-gray-200 rounded-2xl p-8 shadow-sm border border-gray-200 h-full"> {/* Tăng padding */}
                            <div className="space-y-6"> {/* Tăng khoảng cách */}
                                <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">CÁC NỀN TẢNG MẠNG XÃ HỘI</h3> {/* Tăng kích thước */}
                                <div className="flex items-center gap-6 flex-wrap"> {/* Tăng khoảng cách */}
                                    <div className="flex items-center gap-2"> {/* Tăng khoảng cách */}
                                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center"> {/* Tăng kích thước */}
                                            <span className="text-white text-sm font-bold">Z</span> {/* Tăng kích thước */}
                                        </div>
                                        <span className="text-base font-medium">Zalo</span> {/* Tăng kích thước */}
                                    </div>
                                    <div className="flex items-center gap-2"> {/* Tăng khoảng cách */}
                                        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center"> {/* Tăng kích thước */}
                                            <span className="text-white text-sm font-bold">M</span> {/* Tăng kích thước */}
                                        </div>
                                        <span className="text-base font-medium">Meta</span> {/* Tăng kích thước */}
                                    </div>
                                    <div className="flex items-center gap-2"> {/* Tăng khoảng cách */}
                                        <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center"> {/* Tăng kích thước */}
                                            <span className="text-white text-sm font-bold">G</span> {/* Tăng kích thước */}
                                        </div>
                                        <span className="text-base font-medium">Google</span> {/* Tăng kích thước */}
                                    </div>
                                    <div className="flex items-center gap-2"> {/* Tăng khoảng cách */}
                                        <div className="w-8 h-8 bg-black rounded flex items-center justify-center"> {/* Tăng kích thước */}
                                            <span className="text-white text-sm font-bold">T</span> {/* Tăng kích thước */}
                                        </div>
                                        <span className="text-base font-medium">TikTok</span> {/* Tăng kích thước */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* National Cybersecurity Association */}
                        <div className="bg-gray-200 rounded-2xl p-8 shadow-sm border border-gray-200 h-full"> {/* Tăng padding */}
                            <h3 className="text-xl md:text-2xl font-bold text-black leading-tight"> {/* Tăng kích thước */}
                                THÀNH VIÊN HIỆP HỘI AN NINH MẠNG QUỐC GIA
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;