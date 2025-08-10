import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface TestimonialItem {
    name: string;
    position: string;
    quote: string;
}

const Testimonial: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials: TestimonialItem[] = [
        { name: "NGUYEN VAN A", position: "CHỨC DANH", quote: "It's a great honor to be invited to this event and have a very fruitful conversation." },
        { name: "NGUYEN VAN B", position: "CHỨC DANH", quote: "It's a great honor to be invited to this event and have a very fruitful conversation." },
        { name: "NGUYEN VAN C", position: "CHỨC DANH", quote: "It's a great honor to be invited to this event and have a very fruitful conversation." },
    ];

    const nextSlide = () => setCurrentSlide((p) => (p + 1) % testimonials.length);
    const prevSlide = () => setCurrentSlide((p) => (p - 1 + testimonials.length) % testimonials.length);

    // Card component dùng chung
    const Card = ({ t }: { t: TestimonialItem }) => (
        <div className="relative rounded-[24.5736px] overflow-hidden backdrop-blur-sm h-[320px]">
            {/* BG image layer */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/img_30.png')" }} />
            {/* Overlay tint */}
            <div className="absolute inset-0" style={{ background: "rgba(157, 215, 255, 0.2)" }} />
            {/* Content */}
            <div className="relative z-10">
                <div className="flex items-start">
                    <div className="flex-1 pr-4 p-6">
                        <h4 className="font-bold text-white">{t.name}</h4>
                        <p className="text-xs text-white/80 mb-2">{t.position}</p>
                        <div className="text-white/90 text-sm leading-relaxed">
                            <span className="text-white/60 text-xl mr-1 font-serif">"</span>
                            {t.quote}
                            <span className="text-white/60 text-xl ml-1 font-serif">"</span>
                        </div>
                    </div>

                    {/* Avatar sát bên phải + responsive size */}
                    <div className="flex-shrink-0 ml-auto">
                        <div className="overflow-hidden">
                            <img
                                src="/images/img_31.png"
                                alt="Avatar"
                                className="
                  object-contain
                  w-[150px]      /* mobile: nhỏ để không bị cắt */
                  md:w-[262px]   /* desktop: 262 */
                  md:h-[329px]   /* desktop: 329 */
                  h-auto
                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#1D3D86]">
            {/* Header */}
            <div className="text-center py-12 md:py-16 px-4">
                <h1
                    className="text-4xl md:text-5xl font-light text-white mb-3 md:mb-4 tracking-wider"
                    style={{ fontFamily: "'BT Suave', sans-serif", fontWeight: 700, color: "#ffffff" }}
                >
                    LIÊN MINH NIỀM TIN SỐ
                </h1>
                <p
                    className="text-xl md:text-3xl text-white font-light tracking-wide"
                    style={{ fontFamily: "'BT Suave', sans-serif", fontWeight: 700, color: "#ffffff" }}
                >
                    ẢNH HƯỞNG TRÁCH NHIỆM, DẪN DẮT NIỀM TIN
                </p>
            </div>

            {/* 3 Cards section — căn khung giống testimonials */}
            <div className="px-4 md:mr-[135px] md:ml-[135px] mb-14 md:mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:mx-8">
                    {[
                        {
                            number: "01",
                            title: "Triển khai các dự án cộng đồng trên không gian mạng",
                            desc:
                                "Tập trung vào chống tin giả, ngăn chặn lừa đảo trực tuyến, góp phần xây dựng một môi trường số an toàn – minh bạch – đáng tin cậy.",
                        },
                        {
                            number: "02",
                            title: "Đào tạo & Nâng cao Nhận thức",
                            desc:
                                "Tổ chức các chương trình đào tạo, huấn luyện và chia sẻ kiến thức nhằm nâng cao hiểu biết, kỹ năng và trách nhiệm xã hội của người nổi tiếng đối với cộng đồng.",
                        },
                        {
                            number: "03",
                            title: "Tổ chức các sự kiện và hoạt động thực tiễn",
                            desc:
                                "Bao gồm tọa đàm, hội thảo, diễn đàn, đối thoại chính sách, các buổi gặp mặt và nhiều hoạt động ý nghĩa khác để biến cam kết thành hành động.",
                        },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="p-6 md:p-8 rounded-[24.5736px] backdrop-blur-sm"
                            style={{ background: "rgba(157, 215, 255, 0.2)" }}
                        >
                            <div className="text-5xl md:text-6xl font-light text-white mb-4 md:mb-6">{card.number}</div>
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 leading-tight">{card.title}</h3>
                            <p className="text-white text-sm md:text-base leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-12 md:py-16 relative overflow-visible">
                {/* ảnh trang trí chỉ hiện từ lg */}
                <img
                    src="/images/img_28.png"
                    alt=""
                    aria-hidden="true"
                    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[415px] h-[550px] object-contain pointer-events-none select-none z-0"
                />
                <img
                    src="/images/img_29.png"
                    alt=""
                    aria-hidden="true"
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[415px] h-[550px] object-contain pointer-events-none select-none z-0"
                />

                <div className="px-4 relative z-10 md:mr-[100px] md:ml-[100px]">
                    <div className="flex items-center justify-between">
                        {/* Prev */}
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>

                        {/* MOBILE: 1 card + dots */}
                        <div className="flex-1 mx-4 md:hidden">
                            <Card t={testimonials[currentSlide]} />
                            <div className="mt-4 flex items-center justify-center gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        aria-label={`Go to slide ${i + 1}`}
                                        onClick={() => setCurrentSlide(i)}
                                        className={`w-2.5 h-2.5 rounded-full transition-opacity ${
                                            i === currentSlide ? "bg-white opacity-100" : "bg-white/60 opacity-60"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* DESKTOP: 3 cột giữ nguyên */}
                        <div className="hidden md:block flex-1 mx-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                {testimonials.map((t, idx) => (
                                    <Card key={idx} t={t} />
                                ))}
                            </div>
                        </div>

                        {/* Next */}
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
