import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DiscussionTopic {
    id: number;
    number: string;
    title: string;
}

interface TestimonialItem {
    name: string;
    position: string;
    quote: string;
}

const AlliancePage: React.FC = () => {
    const Logo = ({
                      src,
                      alt,
                      className = "h-10 sm:h-12",
                  }: {
        src: string;
        alt: string;
        className?: string;
    }) => <img src={src} alt={alt} className={`${className} object-contain`} loading="lazy" />;

    const topics: DiscussionTopic[] = [
        { id: 1, number: "01", title: "Vai trò của KOL trong kỳ nguyên số" },
        { id: 2, number: "02", title: "Trách nhiệm đạo đức - pháp lý - xã hội của KOL trong kỷ nguyên mới" },
        { id: 3, number: "03", title: "Liên kết hệ sinh thái: nền tảng - doanh nghiệp - agency - KOLs" },
    ];

    const testimonials: TestimonialItem[] = [
        { name: "NGUYEN VAN A", position: "CHỨC DANH", quote: "It's a great honor to be invited to this event and have a very fruitful conversation." },
        { name: "NGUYEN VAN B", position: "CHỨC DANH", quote: "It's a great honor to be invited to this event and have a very fruitful conversation." },
        { name: "NGUYEN VAN C", position: "CHỨC DANH", quote: "It's a great honor to be invited to this event and have a very fruitful conversation." },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => setCurrentSlide((p) => (p + 1) % testimonials.length);
    const prevSlide = () => setCurrentSlide((p) => (p - 1 + testimonials.length) % testimonials.length);

    // ====== SUB COMPONENTS ======
    const TestimonialCard = ({ t }: { t: TestimonialItem }) => (
        <div className="relative rounded-[24.5736px] overflow-hidden backdrop-blur-sm h-[320px]">
            {/* BG image layer */}
            <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/img_30.png')" }} />
            {/* Overlay tint */}
            <div className="absolute inset-0 -z-10" style={{ background: "rgba(157, 215, 255, 0.2)" }} />
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
                    {/* Avatar bên phải + responsive size */}
                    <div className="flex-shrink-0 ml-auto">
                        <div className="overflow-hidden">
                            <img
                                src="/images/img_31.png"
                                alt="Avatar"
                                className="object-contain w-[150px] md:w-[262px] md:h-[329px] h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // ====== RENDER ======
    return (
        <div
            className="min-h-screen w-full text-white"
            style={{background: "linear-gradient(0deg, rgba(28, 62, 133, 0.95) 5.04%, #1D3D86 99.89%)"}}
        >
            {/* ====== KHỐI NỀN + SECTION 1 & 2 ====== */}
            <section className="relative overflow-hidden">
                {/* BG image */}
                <div
                    className="absolute inset-0 z-10  bg-cover"
                    style={{backgroundImage: "url('/images/img_32.png')"}}
                />
                {/* Overlay trên ảnh (nhưng dưới nội dung) */}
                <div
                    className="absolute inset-0 z-20"
                    style={{
                        background: `
            linear-gradient(
                0deg, 
                rgba(28, 62, 133, 0.95) 0%,   /* dưới cùng đậm */
                rgba(28, 62, 133, 0.8) 80%,  /* giữa mờ hơn */
                rgba(28, 62, 133, 0.8) 60%,  /* giữa mờ hơn */
                rgba(28, 62, 133, 0.95) 100% /* trên cùng đậm */
            )
        `
                    }}
                />


                {/* Wrapper đảm bảo nội dung nổi trên overlay */}
                <div className="relative z-30">
                    {/* ====== SECTION 1: CHUYÊN ĐỀ / THẢO LUẬN ====== */}
                    <section className="py-8">
                        {/* Header */}
                        <div className="px-4 md:mx-[100px] mb-10 md:mb-12">
                            <div className="flex items-start justify-between gap-6">
                                <div className="flex flex-col gap-1">
                                    <h1
                                        className="text-3xl md:text-4xl font-light"
                                        style={{
                                            fontFamily: "'BT Suave', sans-serif",
                                            fontWeight: 700,
                                            color: "#ffffff"
                                        }}
                                    >
                                        CHUYÊN ĐỀ
                                    </h1>
                                    <div className="flex items-center gap-2">
                                        <span className="text-4xl md:text-5xl font-bold leading-none">→</span>
                                        <span
                                            className="text-3xl md:text-4xl font-light"
                                            style={{
                                                fontFamily: "'BT Suave', sans-serif",
                                                fontWeight: 700,
                                                color: "#ffffff"
                                            }}
                                        >
                      THẢO LUẬN
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Topics */}
                        <div className="px-4 md:mx-[100px]">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
                                {topics.map((topic) => (
                                    <div
                                        key={topic.id}
                                        className="h-full flex rounded-lg overflow-hidden"
                                        style={{
                                            borderRadius: "23.522px",
                                            minHeight: "70px", // giảm tổng chiều cao
                                        }}
                                    >
                                        {/* Bên trái - nền số */}
                                        <div
                                            className="flex items-center justify-center w-1/4"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.25)",
                                            }}
                                        >
        <span
            className="text-4xl md:text-5xl font-light"
            style={{
                fontFamily: "'BT Suave', sans-serif",
                fontWeight: 700,
                color: "#ffffff",
            }}
        >
          {topic.number}
        </span>
                                        </div>

                                        {/* Bên phải - nền tiêu đề */}
                                        <div
                                            className="flex items-center p-4 md:p-5 w-3/4"
                                            style={{
                                                background: "rgba(157, 215, 255, 0.2)",
                                            }}
                                        >
                                            <p
                                                className="text-base md:text-lg leading-relaxed"
                                                style={{color: "#ffffff"}}
                                            >
                                                {topic.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            {/* Bullets */}
                            <div className="mt-6 md:mt-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                    {[
                                        [
                                            "Đạo đức số, yếu tố cốt lõi trong ảnh hưởng bền vững",
                                            "Biểu đạt tự do và những ranh giới",
                                            "Giá trị thật hay những con số ảo",
                                        ],
                                        [
                                            "Sự cần thiết về giải pháp trang bị nhận thức đó với KOL",
                                            "Vai trò của nền tảng trong việc định hướng giá trị của KOL",
                                            "Tin tức cộng đồng và vai trò kiến tạo niềm tin trong kỷ nguyên",
                                            "truyền thông xã hội",
                                        ],
                                        [
                                            "Văn hóa số và ứng xử chuẩn mực của người ảnh hưởng",
                                            "Vai trò của KOL trong hệ sinh thái truyền thông số",
                                            "Thương hiệu cá nhân và quyền sở hữu trí tuệ trong kỷ nguyên số",
                                        ],
                                    ].map((col, idx) => (
                                        <div
                                            key={idx}
                                            style={{background: "rgba(157, 215, 255, 0.2)", borderRadius: "23.522px"}}
                                            className="text-center backdrop-blur-sm rounded-lg flex items-center justify-center min-h-[150px] p-4"
                                        >
                                            <div className="leading-relaxed text-sm md:text-base">
                                                {col.map((line, i) => (
                                                    <span key={i} className="block mb-2 last:mb-0">
                            {line}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ====== SECTION 2: GIỚI THIỆU LIÊN MINH ====== */}
                    <section className="py-8">
                        {/* Header */}
                        <div className="px-4 md:mx-[100px] mb-10 md:mb-12">
                            <div className="flex justify-center items-start gap-6">
                                <div className="text-center justify-center">
                                    <h1
                                        className="text-4xl md:text-6xl font-bold mb-2"
                                        style={{
                                            fontFamily: "'BT Suave', sans-serif",
                                            fontWeight: 700,
                                            color: "#ffffff"
                                        }}
                                    >
                                        LIÊN MINH NIỀM TIN SỐ
                                    </h1>
                                    <p
                                        className="text-2xl md:text-4xl uppercase tracking-wide"
                                        style={{
                                            fontFamily: "'BT Suave', sans-serif",
                                            fontWeight: 400,
                                            color: "#ffffff"
                                        }}
                                    >
                                        GIỚI THIỆU VỀ LIÊN MINH
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 1 */}
                        <div className="px-4 md:mx-[100px]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div
                                    className="backdrop-blur-sm p-6 rounded-lg h-full flex items-center justify-center"
                                    style={{
                                        backgroundImage: `
      linear-gradient(rgba(157, 215, 255, 0.2) 5.04%),
      url('/images/img_52.png'),
      url('/images/img_53.png')
    `,
                                        backgroundPosition: "center, top left, bottom right",
                                        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
                                        backgroundSize: "cover, auto 100%, auto 50%",
                                        borderRadius: "17.3576px"
                                    }}
                                >
                                    <div className="text-center">
                                        <h2
                                            className="text-4xl md:text-5xl font-light mb-4"
                                            style={{
                                                fontFamily: "'BT Suave', sans-serif",
                                                fontWeight: 700,
                                                color: "#ffffff"
                                            }}
                                        >
                                            LÝ DO THÀNH LẬP
                                        </h2>
                                        <div className="flex items-center justify-center">
                                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor"
                                                 viewBox="0 0 20 20" aria-hidden="true">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <h3
                                                className="ml-2 text-4xl md:text-5xl font-light"
                                                style={{
                                                    fontFamily: "'BT Suave', sans-serif",
                                                    fontWeight: 700,
                                                    color: "#ffffff"
                                                }}
                                            >
                                                LIÊN MINH
                                            </h3>
                                        </div>
                                    </div>
                                </div>


                                <div
                                    className="p-6 rounded-lg h-full flex flex-col justify-center"
                                    style={{background: "rgba(157, 215, 255, 0.1)", borderRadius: "17.3576px"}}
                                >
                                    <div className="leading-relaxed">
                                        <p className="mb-4 text-lg md:text-xl">
                                            Liên minh được thành lập để tập hợp, kết nối và phát huy vai trò xây dựng,
                                            dẫn dắt niềm tin của
                                            KOLs trên không gian mạng.
                                        </p>
                                        <p className="text-lg md:text-xl">
                                            Hoạt động của Liên minh hướng đến lan tỏa giá trị tích cực, định hướng hành
                                            vi đáng tin cậy và
                                            nâng cao trách nhiệm của KOLs với cộng đồng trong kỷ nguyên số.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div
                                    className=" backdrop-blur-sm p-6 rounded-lg h-full flex items-center justify-center"
                                    style={{
                                        backgroundImage: `
      linear-gradient(rgba(157, 215, 255, 0.2) 5.04%),
      url('/images/img_54.png'),
      url('/images/img_55.png')
    `,
                                        backgroundPosition: "center, top left, bottom right",
                                        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
                                        backgroundSize: "cover, auto 70%, auto 30%",
                                        borderRadius: "17.3576px"
                                    }}
                                >
                                    <div className="text-center">
                                        <h2
                                            className="text-4xl md:text-5xl font-light mb-4"
                                            style={{
                                                fontFamily: "'BT Suave', sans-serif",
                                                fontWeight: 700,
                                                color: "#ffffff"
                                            }}
                                        >
                                            TỪ TẦM NHÌN ĐẾN
                                        </h2>
                                        <div className="flex items-center justify-center">
                                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor"
                                                 viewBox="0 0 20 20" aria-hidden="true">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <h3
                                                className="ml-2 text-4xl md:text-5xl font-light"
                                                style={{
                                                    fontFamily: "'BT Suave', sans-serif",
                                                    fontWeight: 700,
                                                    color: "#ffffff"
                                                }}
                                            >
                                                HÀNH ĐỘNG
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-lg h-full"
                                     style={{background: "rgba(157, 215, 255, 0.1)", borderRadius: "17.3576px"}}>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="font-bold text-xl mb-4">Tầm nhìn:</h3>
                                            <div className="space-y-3">
                                                <p className="text-lg md:text-xl">
                                                    <span className="font-medium">(1)</span> Xây dựng niềm tin, lan toả
                                                    giá trị tích cực, bền vững, chống
                                                    thông tin sai lệch, lừa đảo, thúc đẩy kỹ năng an toàn trên không
                                                    gian mạng.
                                                </p>
                                                <p className="text-lg md:text-xl">
                                                    <span className="font-medium">(2)</span> Định hướng, dẫn dắt hành vi
                                                    đáng tin cậy của KOL.
                                                </p>
                                                <p className="text-lg md:text-xl">
                                                    <span className="font-medium">(3)</span> Cảnh báo, phê phán trào
                                                    lưu, hiện tượng lệch lạc của KOL
                                                    trên không gian mạng.
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-xl mb-4">Hành động:</h3>
                                            <div className="space-y-3">
                                                <p className="text-lg md:text-xl">
                                                    <span className="font-medium">(1)</span> Thông qua Chương trình "Tín
                                                    nhiệm người có ảnh hưởng" trên
                                                    không gian mạng.
                                                </p>
                                                <p className="text-lg md:text-xl">
                                                    <span className="font-medium">(2)</span> Bằng các hoạt động đào tạo,
                                                    tập huấn đa dạng.
                                                </p>
                                                <p className="text-lg md:text-xl">
                                                    <span className="font-medium">(3)</span> Bằng các hoạt động cộng
                                                    đồng rộng khắp.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row 2 */}
                        </div>
                    </section>
                </div>
            </section>

            {/* ====== SECTION 3: HOẠT ĐỘNG CHÍNH + TESTIMONIALS ====== */}
            <section className="relative py-8">
                {/* Overlay màu #1D3D86 */}
                <div className="absolute inset-0 -z-10 bg-[#1D3D86] opacity-90"/>

                {/* Nội dung */}
                <div className="relative z-10">
                    {/* Header nhỏ */}
                    <div className="text-center py-12 md:py-16 px-4">
                        <h2
                            className="text-4xl md:text-5xl font-light text-white mb-3 md:mb-4 tracking-wider"
                            style={{fontFamily: "'BT Suave', sans-serif", fontWeight: 700, color: "#ffffff"}}
                        >
                            LIÊN MINH NIỀM TIN SỐ
                        </h2>
                        <p
                            className="text-xl md:text-3xl text-white font-light tracking-wide"
                            style={{fontFamily: "'BT Suave', sans-serif", fontWeight: 400}}
                        >
                            ẢNH HƯỞNG TRÁCH NHIỆM, DẪN DẮT NIỀM TIN
                        </p>
                    </div>

                    {/* 3 Cards (hoạt động chính) */}
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
                                <div key={i} className="p-6 md:p-8 rounded-[24.5736px] backdrop-blur-sm"
                                     style={{background: "rgba(157, 215, 255, 0.2)"}}>
                                    <div
                                        className="text-5xl md:text-6xl font-light text-white mb-4 md:mb-6"
                                        style={{fontFamily: "'BT Suave', sans-serif", fontWeight: 400}}
                                    >
                                        {card.number}
                                    </div>

                                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 leading-tight">{card.title}</h3>
                                    <p className="text-white text-sm md:text-base leading-relaxed">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="py-12 md:py-16 relative overflow-visible">
                        {/* Ảnh trang trí hai bên — nổi trên overlay */}
                        <img
                            src="/images/img_28.png"
                            alt=""
                            aria-hidden="true"
                            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[415px] h-[550px] object-contain pointer-events-none select-none z-20"
                        />
                        <img
                            src="/images/img_29.png"
                            alt=""
                            aria-hidden="true"
                            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[415px] h-[550px] object-contain pointer-events-none select-none z-20"
                        />

                        <div className="px-4 relative z-20 md:mr-[100px] md:ml-[100px]">
                            <div className="flex items-center justify-between">
                                {/* Prev */}
                                <button
                                    onClick={prevSlide}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors z-20"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-6 h-6 text-white"/>
                                </button>

                                {/* MOBILE: 1 card + dots */}
                                <div className="flex-1 mx-4 md:hidden">
                                    <TestimonialCard t={testimonials[currentSlide]}/>
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

                                {/* DESKTOP: 3 cột */}
                                <div className="hidden md:block flex-1 mx-8">
                                    <div className="grid md:grid-cols-3 gap-8">
                                        {testimonials.map((t, idx) => (
                                            <TestimonialCard key={idx} t={t}/>
                                        ))}
                                    </div>
                                </div>

                                {/* Next */}
                                <button
                                    onClick={nextSlide}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors z-20"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-6 h-6 text-white"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== SECTION 4: CHƯƠNG TRÌNH TÍN NHIỆM ====== */}
            <section className="relative py-8 md:py-12 px-4 sm:px-6 lg:px-8">
                {/* Overlay */}
                <div className="absolute inset-0 -z-10 bg-[#1D3D86] opacity-90"/>

                {/* Nội dung */}
                <div className="relative z-10">
                    <div>
                        {/* Header */}
                        <div className="text-center mb-8 md:mb-12">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide"
                                style={{fontFamily: "'BT Suave', sans-serif", fontWeight: 700}}
                            >
                                CHƯƠNG TRÌNH TÍN NHIỆM
                            </h1>
                            <h2
                                className="text-3xl md:text-4xl font-bold text-white tracking-wide"
                                style={{fontFamily: "'BT Suave', sans-serif", fontWeight: 400}}
                            >
                                NGƯỜI CÓ ẢNH HƯỞNG
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="mb-8 md:mb-12 space-y-4 md:space-y-6">
                            <p className="text-white text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
                                Chương trình cung cấp khung đánh giá toàn diện, và dễ dàng kiểm chứng; nhằm xác thực độ
                                minh bạch - đạo
                                đức - <span
                                className="block text-center">trách nhiệm xã hội của người có ảnh hưởng.</span>
                            </p>
                            <p className="text-white text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
                                Chứng nhận “Tín nhiệm người có ảnh hưởng” thiết lập chuẩn mực truyền thông phù hợp với
                                quy định pháp
                                luật, bảo <span className="block text-center">vệ quyền lợi người tiêu dùng và tạo niềm tin cho các bên liên quan.</span>
                            </p>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:mr-[100px] md:ml-[100px]">
                            {/* Left Column */}
                            <div className="p-6 md:p-8"
                                 style={{background: "rgba(157, 215, 255, 0.2)", borderRadius: "23.522px"}}>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">Mục
                                    đích</h3>
                                <ul className="space-y-3 md:space-y-4 md:p-5">
                                    {[
                                        "Đánh giá mức độ tín nhiệm trong hoạt động truyền thông, quảng bá",
                                        "Hỗ trợ cơ quan quản lý, doanh nghiệp, nhãn hàng lựa chọn đối tác truyền thông phù hợp",
                                        "Bảo vệ người tiêu dùng khỏi nội dung sai lệch, quảng cáo trá hình",
                                    ].map((text, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <img className="w-5 h-5 md:w-7 md:h-7 mt-1 mr-3" src="/images/img_27.png"
                                                 alt="" loading="lazy"/>
                                            <span
                                                className="text-white leading-relaxed text-sm md:text-base">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Column */}
                            <div className="p-6 md:p-8"
                                 style={{background: "rgba(157, 215, 255, 0.2)", borderRadius: "23.522px"}}>
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
                                            <img className="w-5 h-5 md:w-7 md:h-7 mt-1 mr-3" src="/images/img_27.png"
                                                 alt="" loading="lazy"/>
                                            <span
                                                className="text-white leading-relaxed text-sm md:text-base">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full py-10">
                <div className="px-4">
                    <div className="flex gap-4 overflow-x-auto no-scrollbar">
                        {/* Slide 1 */}
                        <div className="relative min-w-[350px] rounded-2xl overflow-hidden">
                            <img
                                src="/images/img_48.png"
                                alt="Event 1"
                                className="w-full h-full object-cover"
                            />
                            {/* Nút điều hướng bên trái */}
                            <button
                                className="absolute left-3 top-1/2 -translate-y-1/2  hover:bg-white/50 p-3 "
                            >
                                <ChevronLeft className="w-8 h-8 text-white" strokeWidth={2.5}/>
                            </button>
                        </div>

                        {/* Slide 2 */}
                        <div className="relative min-w-[350px] rounded-2xl overflow-hidden">
                            <img
                                src="/images/img_49.png"
                                alt="Event 2"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Slide 3 */}
                        <div className="relative min-w-[350px] rounded-2xl overflow-hidden">
                            <img
                                src="/images/img_50.png"
                                alt="Event 3"
                                className="w-full h-full object-cover"
                            />
                            {/* Nút điều hướng bên phải */}
                            <button
                                className="absolute right-3 top-1/2 -translate-y-1/2  hover:bg-white/50 p-3"
                            >
                                <ChevronRight className="w-8 h-8 text-white" strokeWidth={2.5}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ====== SECTION 5: LOGOS ====== */}
            <section className="relative text-white">
                {/* Overlay */}
                <div className="absolute inset-0 -z-10 bg-[#1D3D86] opacity-90"/>

                {/* Nội dung */}
                <div className="relative z-10 px-4 sm:px-6 py-10 sm:py-14 space-y-10 sm:space-y-14">
                    {/* Hàng 1: Chủ trì | Bảo trợ | Phối hợp | Hỗ trợ tài chính */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Đơn vị chủ trì */}
                        <div className="text-center space-y-4">
                            <p className="text-[16px] font-bold">ĐƠN VỊ CHỦ TRÌ</p>
                            <div className="flex items-center justify-center">
                                <Logo src="/images/img_13.png" alt="Đơn vị chủ trì" className="h-7 sm:h-9"/>
                            </div>
                        </div>

                        {/* Đơn vị bảo trợ */}
                        <div className="text-center space-y-4">
                            <p className="text-[16px] font-bold">ĐƠN VỊ BẢO TRỢ</p>
                            <div className="flex flex-col items-center">
                                {/* Ảnh logo - responsive với kích thước khác nhau trên mobile/desktop */}
                                <Logo src="/images/img_7.png" alt="Đơn vị" className="h-5 sm:h-7"/>
                                {/* Text description - responsive font size và line height */}
                                <div className="text-[10px] sm:text-[12px] md:text-sm leading-tight md:leading-normal">
                                    A05 - Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao
                                </div>

                            </div>
                        </div>

                        {/* Đơn vị phối hợp tổ chức */}
                        <div className="text-center space-y-4">
                        <p className="text-[16px] font-bold">ĐƠN VỊ PHỐI HỢP TỔ CHỨC</p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Logo src="/images/img_14.png" alt="Đơn vị phối hợp 1" className="h-5 sm:h-7"/>
                                <Logo src="/images/img_15.png" alt="Đơn vị phối hợp 2" className="h-5 sm:h-7"/>
                            </div>
                        </div>

                        {/* Đơn vị hỗ trợ tài chính */}
                        <div className="text-center space-y-4">
                            <p className="text-[16px] font-bold">ĐƠN VỊ HỖ TRỢ TÀI CHÍNH</p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Logo src="/images/img_16.png" alt="Đơn vị tài trợ chính 1" className="h-5 sm:h-7"/>
                                <Logo src="/images/img_17.png" alt="Đơn vị tài trợ chính 2" className="h-5 sm:h-7"/>
                            </div>
                        </div>
                    </div>

                    {/* Hàng 3: Đơn vị bảo trợ */}
                    <div className="text-center space-y-4 relative top-0 md:top-[70px]">
                        <p className="text-[16px] font-bold">ĐƠN VỊ BẢO TRỢ TRUYỀN THÔNG</p>

                        <div
                            className="grid place-items-center gap-x-4 px-0 mx-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:px-8 md:mx-[250px]">
                            {/* Hàng 1 */}
                            <Logo src="/images/img_18.png" alt="Đơn vị bảo trợ 1" className="h-10 sm:h-12"/>
                            <Logo src="/images/img_19.png" alt="Đơn vị bảo trợ 2" className="h-7 sm:h-9"/>
                            <Logo src="/images/img_20.png" alt="Đơn vị bảo trợ 3" className="h-5 sm:h-7"/>
                            <Logo src="/images/img_26.png" alt="Đơn vị bảo trợ 4" className="h-9 sm:h-11"/>
                            <Logo src="/images/img_22.png" alt="Đơn vị bảo trợ 5" className="h-7 sm:h-9"/>

                            {/* Hàng 2 */}
                            <div className="hidden md:block"/>
                            <Logo src="/images/img_23.png" alt="Đơn vị bảo trợ 6" className="h-20 sm:h-20"/>
                            <Logo src="/images/img_24.png" alt="Đơn vị bảo trợ 7" className="h-7 sm:h-9"/>
                            <Logo src="/images/img_25.png" alt="Đơn vị bảo trợ 8" className="h-7 sm:h-9"/>
                            <div className="hidden md:block"/>
                        </div>
                    </div>
                </div>

                {/* đáy bo tròn mờ */}
                <div className="h-24 w-full bg-gradient-to-b from-white/0 to-white/2 relative z-10"/>
            </section>
        </div>
    );
};

export default AlliancePage;
