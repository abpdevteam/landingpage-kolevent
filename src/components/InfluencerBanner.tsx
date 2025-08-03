import React from "react";

const InfluencerBanner: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4 tracking-wide">CHƯƠNG TRÌNH TÍN NHIỆM</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-300 tracking-wide">NGƯỜI CÓ ẢNH HƯỞNG</h2>
                </div>

                {/* Description */}
                <div className="mb-12 space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mx-auto">
                        Chương trình cung cấp khung đánh giá toàn diện, và dễ dàng kiểm chứng; nhằm xác thực độ
                        minh bạch - đạo đức - trách nhiệm xã hội của người có ảnh hưởng.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mx-auto">
                        Chứng nhận “Tín nhiệm người có ảnh hưởng” thiết lập chuẩn mực truyền thông phù hợp với
                        quy định pháp luật, bảo vệ quyền lợi người tiêu dùng và tạo niềm tin cho các bên liên quan.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Mục đích */}
                    <div className="bg-gray-200 rounded-lg shadow-sm p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Mục đích</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">
 Đánh giá mức độ tín nhiệm trong hoạt động truyền
thông, quảng bá
                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">
                   Hỗ trợ cơ quan quản lý, doanh nghiệp, nhãn hàng lựa
chọn đối tác truyền thông phù hợp
                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">
                   Bảo vệ người tiêu dùng khỏi nội dung sai lệch, quảng cáo
trá hình
                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column - Tiêu chí đánh giá */}
                    <div className="bg-gray-200 rounded-lg shadow-sm p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Tiêu chí đánh giá - 5 trụ cột chính</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">
                  Minh bạch nội dung và hoạt động quảng cáo: gắn nhãn bài đăng thương mại
                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">
                  Đạo đức và hành vi truyền thông: Không vi phạm pháp
luật, ứng xử có trách nhiệm
                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">
                   Tương tác thực - phản hồi cộng đồng: Không dùng tương
tác ảo, xử lý khủng hoảng tích cực
                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">
                  Phù hợp thương hiệu & giá trị xã hội: Hình ảnh tích cực,
hợp tác minh bạch
                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">
                 Bảo vệ dữ liệu cá nhân: Tuân thủ pháp luật về quyền
riêng tư.
                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export  default InfluencerBanner;