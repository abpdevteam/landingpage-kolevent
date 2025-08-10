import React from "react";

const InfluencerBanner: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#1D3D86] py-8 md:py-12 px-4 sm:px-6 lg:px-8">
            <div>
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h1
                        className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide"
                        style={{
                            fontFamily: "'BT Suave', sans-serif",
                            fontWeight: 500,
                            color: "#ffffff",
                        }}
                    >
                        CHƯƠNG TRÌNH TÍN NHIỆM
                    </h1>
                    <h2
                        className="text-3xl md:text-4xl font-bold text-white tracking-wide"
                        style={{
                            fontFamily: "'BT Suave', sans-serif",
                            fontWeight: 500,
                            color: "#ffffff",
                        }}
                    >
                        NGƯỜI CÓ ẢNH HƯỞNG
                    </h2>
                </div>

                {/* Description */}
                <div className="mb-8 md:mb-12 space-y-4 md:space-y-6">
                    <p className="text-white text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
                        Chương trình cung cấp khung đánh giá toàn diện, và dễ dàng kiểm chứng; nhằm xác thực độ
                        minh bạch - đạo đức -
                        <span className="block text-center">
              trách nhiệm xã hội của người có ảnh hưởng.
            </span>
                    </p>
                    <p className="text-white text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
                        Chứng nhận “Tín nhiệm người có ảnh hưởng” thiết lập chuẩn mực truyền thông phù hợp với
                        quy định pháp luật, bảo
                        <span className="block text-center">
              vệ quyền lợi người tiêu dùng và tạo niềm tin cho các bên liên quan.
            </span>
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:mr-[100px] md:ml-[100px]">
                    {/* Left Column */}
                    <div
                        className="p-6 md:p-8"
                        style={{
                            background: "rgba(157, 215, 255, 0.2)",
                            borderRadius: "23.522px",
                        }}
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
                            Mục đích
                        </h3>
                        <ul className="space-y-3 md:space-y-4 md:p-5">
                            {[
                                "Đánh giá mức độ tín nhiệm trong hoạt động truyền thông, quảng bá",
                                "Hỗ trợ cơ quan quản lý, doanh nghiệp, nhãn hàng lựa chọn đối tác truyền thông phù hợp",
                                "Bảo vệ người tiêu dùng khỏi nội dung sai lệch, quảng cáo trá hình",
                            ].map((text, idx) => (
                                <li key={idx} className="flex items-start">
                                    <img
                                        className="w-5 h-5 md:w-7 md:h-7 mt-1 mr-3"
                                        src="/images/img_27.png"
                                        alt=""
                                        loading="lazy"
                                    />
                                    <span className="text-white leading-relaxed text-sm md:text-base">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div
                        className="p-6 md:p-8"
                        style={{
                            background: "rgba(157, 215, 255, 0.2)",
                            borderRadius: "23.522px",
                        }}
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
                            Tiêu chí đánh giá - 5 trụ cột chính
                        </h3>
                        <ul className="space-y-3 md:space-y-4">
                            {[
                                "Minh bạch nội dung và hoạt động quảng cáo: gắn nhãn bài đăng thương mại",
                                "Đạo đức và hành vi truyền thông: Không vi phạm pháp luật, ứng xử có trách nhiệm",
                                "Tương tác thực - phản hồi cộng đồng: Không dùng tương tác ảo, xử lý khủng hoảng tích cực",
                                "Phù hợp thương hiệu & giá trị xã hội: Hình ảnh tích cực, hợp tác minh bạch",
                                "Bảo vệ dữ liệu cá nhân: Tuân thủ pháp luật về quyền riêng tư",
                            ].map((text, idx) => (
                                <li key={idx} className="flex items-start">
                                    <img
                                        className="w-5 h-5 md:w-7 md:h-7 mt-1 mr-3"
                                        src="/images/img_27.png"
                                        alt=""
                                        loading="lazy"
                                    />
                                    <span className="text-white leading-relaxed text-sm md:text-base">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfluencerBanner;
