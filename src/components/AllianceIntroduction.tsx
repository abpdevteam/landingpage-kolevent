import React from "react";

const AllianceIntroduction: React.FC = () => {
    return (
        <div className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto bg-white">
                {/* Header Section */}
                <div className="relative mb-12">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-4xl font-bold text-black mb-2">LIÊN MINH NIỀM TIN SỐ</h1>
                            <p className="text-lg text-gray-600 uppercase tracking-wide">GIỚI THIỆU VỀ LIÊN MINH</p>
                        </div>

                        {/* Brand Identity Pattern */}
                        <div className="relative">
                            <div className="w-32 h-20 border-2 border-gray-300 transform rotate-12 bg-white"></div>
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                Họa tiết
                                <br />
                                nhận diện
                            </p>
                        </div>
                    </div>
                </div>

                {/* Row 1 - Lý do thành lập + Giới thiệu */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Card Lý do thành lập */}
                    <div className="bg-gray-200 p-6 rounded-lg h-full flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-2xl font-light text-gray-600 mb-4">LÝ DO THÀNH LẬP</h2>
                            <div className="flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <h3 className="ml-2 text-2xl font-light text-gray-600">LIÊN MINH</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card Giới thiệu */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 h-full flex flex-col justify-center">
                        <div className="text-sm text-gray-700 leading-relaxed">
                            <p className="mb-4">
                                Liên minh được thành lập để tập hợp, kết nối và phát huy vai trò
                                xây dựng, dẫn dắt niềm tin của KOLs trên không gian mạng.
                            </p>
                            <p>
                                Hoạt động của Liên minh hướng đến lan tỏa giá trị tích cực, định
                                hướng hành vi đáng tin cậy và nâng cao trách nhiệm của KOLs với
                                cộng đồng trong kỷ nguyên số.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Row 2 - Tầm nhìn + Hành động */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 j">
                    <div className="bg-gray-200 p-6 rounded-lg h-full flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-2xl font-light text-gray-600 mb-4">TỪ TẦM NHÌN ĐẾN</h2>
                            <div className="flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <h3 className="ml-2 text-2xl font-light text-gray-600">HÀNH ĐỘNG</h3>
                            </div>
                        </div>
                    </div>


                    {/* Card Hành động */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 h-full">
                        <div>
                            <div>
                                <h3 className="font-bold text-black mb-4">Tầm nhìn:</h3>
                                <div className="space-y-3 text-sm text-gray-700">
                                    <p>
                                        <span className="font-medium">(1)</span> Xây dựng niềm tin, lan tỏa giá trị
                                        tích
                                        cực, bền vững, chống
                                        thông tin sai lệch, lừa đảo, thúc đẩy ý thức an toàn trên không gian mạng.
                                    </p>
                                    <p>
                                        <span className="font-medium">(2)</span> Định hướng, dẫn dắt hành vi đáng
                                        tin cậy
                                        của KOL.
                                    </p>
                                    <p>
                                        <span className="font-medium">(3)</span> Cảnh báo, phê phán trao lưu, hiện
                                        tượng
                                        lệch lạc của KOL trên
                                        không gian mạng.
                                    </p>
                                </div>
                            </div>
                            <h3 className="font-bold text-black mb-4">Hành động:</h3>
                            <div className="space-y-3 text-sm text-gray-700">
                                <p>
                                    <span className="font-medium">(1)</span> Thông qua Chương trình "Tín nhiệm người có
                                    ảnh hưởng" trên
                                    không gian mạng.
                                </p>
                                <p>
                                    <span className="font-medium">(2)</span> Bằng các hoạt động đào tạo, tập huấn đa
                                    dạng.
                                </p>
                                <p>
                                    <span className="font-medium">(3)</span> Bằng các hoạt động cộng đồng rộng khắp.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllianceIntroduction;