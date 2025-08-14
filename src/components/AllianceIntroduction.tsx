import React from "react";
interface DiscussionTopic {
    id: number;
    number: string;
    title: string;
}

// interface TestimonialItem {
//     name: string;
//     position: string;
//     quote: string;
// }
type Pillar = {
    id: number;
    title: string;
    lines: string[];
};

const pillars: Pillar[] = [
    {
        id: 1,
        title: "Minh bạch nội dung và hoạt động quảng cáo",
        lines: ["gắn nhãn bài đăng thương mại"],
    },
    {
        id: 2,
        title:
            "Đạo đức và hành vi truyền thông: Không vi phạm pháp luật, ứng xử có trách nhiệm",
        lines: [],
    },
    {
        id: 3,
        title:
            "Tương tác thực - phản hồi cộng đồng: Không dùng tương tác ảo, xử lý khủng hoảng tích cực",
        lines: [],
    },
    {
        id: 4,
        title:
            "Phù hợp thương hiệu & giá trị xã hội: Hình ảnh tích cực, hợp tác minh bạch",
        lines: [],
    },
    {
        id: 5,
        title:
            "Bảo vệ dữ liệu cá nhân: Tuân thủ pháp luật về quyền riêng tư",
        lines: [],
    },
];
function Item({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-start gap-2">
            <svg className="mt-1 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="#0011BF"
                    opacity=".9"
                />
                <path
                    d="M7 12l3 3 7-7"
                    stroke="#0011BF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="text-sm md:text-base">{children}</span>
        </div>
    );
}


const AllianceIntroduction: React.FC = () => {
    // const Logo = ({
    //                   src,
    //                   alt,
    //                   className = "h-10 sm:h-12",
    //               }: {
    //     src: string;
    //     alt: string;
    //     className?: string;
    // }) => <img src={src} alt={alt} className={`${className} object-contain`} loading="lazy" />;

    const topics: DiscussionTopic[] = [
        {id: 1, number: "01", title: "THAM LUẬN GỬI VỀ HỘI NGHỊ"},
        {id: 2, number: "02", title: "PHIÊN DIỄN GIẢ - HÀNH TRÌNH VÀ NHỮNG GIÁ TRỊ"},
        {id: 3, number: "03", title: "PHIÊN TỌA ĐÀM - NIỀM TIN VÀ KỲ VỌNG"},
    ];

    // const testimonials: TestimonialItem[] = [
    //     { name: "NGUYEN VAN A", position: "CHỨC DANH", quote: "It's a great honor to be invited to this event and have a very fruitful conversation." },
    //     { name: "NGUYEN VAN B", position: "CHỨC DANH", quote: "It's a great honor to be invited to this event and have a very fruitful conversation." },
    //     { name: "NGUYEN VAN C", position: "CHỨC DANH", quote: "It's a great honor to be invited to this event and have a very fruitful conversation." },
    // ];

    // ====== SUB COMPONENTS ======
    // const TestimonialCard = ({ t }: { t: TestimonialItem }) => (
    //     <div
    //         className="relative overflow-hidden rounded-[16px] backdrop-blur-sm flex flex-col w-full"
    //         style={{
    //             background:
    //                 "linear-gradient(180deg, rgba(255, 255, 255, 0) -56.25%, rgba(255, 255, 255, 0.3) 100%)",
    //             border: "1px solid rgba(255, 255, 255, 0.3)",
    //             boxSizing: "border-box",
    //         }}
    //     >
    //         {/* Nội dung */}
    //         <div className="relative z-10 flex items-start flex-1 p-6">
    //             {/* Text bên trái */}
    //             <div className="flex-1 pr-4">
    //                 <h4 className="font-bold text-[#ffffff]">{t.name}</h4>
    //                 <p className="text-xs text-[#ffffff]/80 mb-2">{t.position}</p>
    //                 <div className="text-[#ffffff]/90 text-sm leading-relaxed">
    //                     <span className="text-[#ffffff]/60 text-xl mr-1 font-serif">"</span>
    //                     {t.quote}
    //                     <span className="text-[#ffffff]/60 text-xl ml-1 font-serif">"</span>
    //                 </div>
    //             </div>
    //
    //             {/* Avatar bên phải */}
    //             <div className="flex-shrink-0 ml-auto">
    //                 <img
    //                     src="/images/img_31.png"
    //                     alt="Avatar"
    //                     className="object-contain w-[150px] md:w-[200px] h-auto"
    //                 />
    //             </div>
    //         </div>
    //     </div>
    // );


    // ====== RENDER ======
    return (
        <div
            className="min-h-screen w-full text-white bg-[#000B9F]"
        >
            {/* ====== KHỐI NỀN + SECTION 1 & 2 ====== */}
            <section className="relative overflow-hidden">
                {/* BG image */}
                <div
                    className="absolute inset-0 z-10  bg-cover"
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
                <div className="relative z-30 ">
                    <section
                        className="py-8 bg-cover bg-center relative"
                        style={{backgroundImage: "url('/images/img_64.png')"}}
                    >
                        <div className="relative z-10 mr-[80px] ml-[80px]">
                            {/* Header */}
                            <div className="px-4 md:mx-[100px] mb-10 md:mb-12">
                                <div className="flex items-center justify-center gap-6">
                                    <div className="flex flex-col gap-1">
                                        <h1
                                            className="text-3xl md:text-4xl font-light"
                                            style={{
                                                fontFamily: "NeueHelveticaExt, sans-serif",
                                                fontWeight: 700,
                                                color: "#ffffff"
                                            }}
                                        >
                                            ĐIỂM NHẤN HỘI NGHỊ
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            {(() => {
                                const cardStyle: React.CSSProperties = {
                                    background:
                                        "linear-gradient(180deg, rgba(255, 255, 255, 0.4) -56.25%, #FFFFFF 100%)",
                                    border: "1px solid rgba(255, 255, 255, 0.3)",
                                    borderRadius: "16px",
                                };

                                const textBlue = {color: "#0B3C8A"};

                                return (
                                    <div className="px-4 md:mx-[100px]">
                                        {/* Topics */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
                                            {topics.map((topic) => (
                                                <div
                                                    key={topic.id}
                                                    className="h-full flex flex-col p-6 transition-transform hover:-translate-y-0.5"
                                                    style={cardStyle} // gradient + border
                                                >
                                                    {/* Số */}
                                                    <span
                                                        className="text-4xl md:text-5xl mb-3"
                                                        style={{
                                                            fontFamily: "NeueHelveticaExt, sans-serif",
                                                            fontWeight: 700,
                                                            color: "#0011BF"
                                                        }}
                                                    >
        {topic.number}
      </span>

                                                    {/* Tiêu đề */}
                                                    <p
                                                        className="text-base md:text-lg leading-relaxed"
                                                        style={{
                                                            fontFamily: "NeueHelveticaExt, sans-serif",
                                                            fontWeight: 700,
                                                            color: "#0011BF"
                                                        }}
                                                    >
                                                        {topic.title}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>


                                        {/* Bullets */}
                                        <div className="mt-6 md:mt-8">
                                            <div
                                                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                                                style={{
                                                    fontFamily: "NeueHelveticaExt, sans-serif",
                                                    fontWeight: 400,
                                                    color: "#0011BF"
                                                }}
                                            >
                                                {[
                                                    [
                                                        "Tuyển chọn những bài tham luận từ cơ quan quản lý, doanh nghiệp, nền tảng số và những câu chuyện, hành trình được chia sẻ từ các KOL",
                                                        "Mang đến góc nhìn đa chiều về vai trò, trách nhiệm của KOL - ý tưởng - giải pháp liên kết hệ sinh thái, phát triển cộng đồng KOL bền vững"
                                                    ],
                                                    [
                                                        "Không gian để KOL chia sẻ câu chuyện  về hành trình, những giá trị thật đã tạo dựng, cùng trải nghiệm chạm đến trái tim công chúng",
                                                        "Nơi doanh nghiệp, công ty truyền thông, nền tảng, cơ quan quản lý  nhìn nhận về những giá trị \"thật\" của KOL, ghi nhận hành trình lan tỏa giá trị tích cực, bản sắc văn hóa quê hương mà KOL mang lại",
                                                    ],
                                                    [
                                                        "Đối thoại đa chiều giữa các bên nhằm thảo luận vai trò, trách nhiệm, niềm tin và kỳ vọng với KOL",
                                                        "Giải quyết vấn đề lệch chuẩn, thúc đẩy minh bạch, đề cao giá trị thật của KOL",
                                                    ],
                                                ].map((col, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="text-left rounded-lg flex flex-col justify-start min-h-[200px] p-4 transition-transform hover:-translate-y-0.5"
                                                        style={{
                                                            ...cardStyle,
                                                            height: "100%", // giữ cùng chiều cao khi grid auto
                                                        }}
                                                    >
                                                        <div
                                                            className="leading-relaxed text-sm md:text-base flex flex-col justify-start"
                                                            style={textBlue}
                                                        >
                                                            {col.map((line, i) => (
                                                                <span key={i} className="block mb-2 last:mb-0">
                            • {line}
                        </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                );
                            })()}
                        </div>
                    </section>


                    {/* ====== SECTION 2: GIỚI THIỆU LIÊN MINH ====== */}
                    <section
                        className="py-8 relative"
                        style={{
                            backgroundImage: "url('/images/img_65.png')", // đổi ảnh nếu cần
                            backgroundSize: "auto 80%",
                            backgroundPosition: "center",
                        }}
                    >

                        {/* Nội dung */}
                        <div className="relative z-10 md:mx-[100px]">
                            {/* Header */}
                            <div className="px-4 md:mx-[100px] mb-5">
                                <div className="flex justify-center items-start gap-6">
                                    <div className="text-center justify-center">
                                        <h1
                                            className="mb-2 font-bold text-[40px]"
                                            style={{
                                                fontFamily: "NeueHelveticaExt, sans-serif",
                                                fontWeight: 700,
                                                color: "#ffffff"
                                            }}
                                        >
                                            LIÊN MINH NIỀM TIN SỐ
                                        </h1>

                                        <p
                                            className="text-[30px] uppercase tracking-wide"
                                            style={{
                                                fontFamily: "NeueHelveticaExt, sans-serif",
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
                            <div className="px-4 md:mx-[80px]">
                            {/* Row 1 */}
                                <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-6 mb-6">
                                    {/* Card 1 */}
                                    <div
                                        className="backdrop-blur-sm p-6 rounded-lg h-full flex items-center justify-center"
                                        style={{
                                            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.2) -121.84%, #FFFFFF 100%)",
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                            borderRadius: "16px"
                                        }}
                                    >
                                        <div className="text-center">
                                            <h2
                                                className="text-[28px] mb-4"
                                                style={{
                                                    fontFamily: "NeueHelveticaExt, sans-serif",
                                                    fontWeight: 700,
                                                    color: "#0011BF"
                                                }}
                                            >
                                                LÝ DO THÀNH LẬP
                                            </h2>
                                            <div className="flex items-center justify-center">
                                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="#0011BF"
                                                     viewBox="0 0 20 20" aria-hidden="true">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <h3
                                                    className="ml-2 text-[28px] font-light"
                                                    style={{
                                                        fontFamily: "NeueHelveticaExt, sans-serif",
                                                        fontWeight: 700,
                                                        color: "#0011BF"
                                                    }}
                                                >
                                                    LIÊN MINH
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div
                                        className="p-6 rounded-lg h-full flex flex-col justify-center"
                                        style={{
                                            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.2) -121.84%, #FFFFFF 100%)",
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                            borderRadius: "16px"
                                        }}
                                    >
                                        <div className="leading-relaxed text-[#0011BF]">
                                            <p className="mb-4 text-lg md:text-[16px]" style={{
                                                fontFamily: "NeueHelveticaExt, sans-serif",
                                                fontWeight: 400,
                                                color: "#0011BF"
                                            }}>
                                                Liên minh được thành lập để tập hợp, kết nối và phát huy vai trò xây
                                                dựng,
                                                dẫn dắt niềm tin của KOLs trên không gian mạng.
                                            </p>
                                            <p className="text-lg md:text-[16px]" style={{
                                                fontFamily: "NeueHelveticaExt, sans-serif",
                                                fontWeight: 400,
                                                color: "#0011BF"
                                            }}>
                                                Hoạt động của Liên minh hướng đến lan tỏa giá trị tích cực, định hướng
                                                hành
                                                vi đáng tin cậy và nâng cao trách nhiệm của KOLs với cộng đồng trong kỷ
                                                nguyên số.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-6">
                                    {/* Card 3 */}
                                    <div
                                        className="backdrop-blur-sm p-6 rounded-lg h-full flex items-center justify-center"
                                        style={{
                                            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.2) -121.84%, #FFFFFF 100%)",
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                            borderRadius: "16px"
                                        }}
                                    >
                                        <div className="text-center">
                                            <h2
                                                className="text-[28px] mb-4"
                                                style={{
                                                    fontFamily: "NeueHelveticaExt, sans-serif",
                                                    fontWeight: 700,
                                                    color: "#0011BF"
                                                }}
                                            >
                                                TỪ TẦM NHÌN ĐẾN
                                            </h2>
                                            <div className="flex items-center justify-center">
                                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="#0011BF"
                                                     viewBox="0 0 20 20" aria-hidden="true">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <h3
                                                    className="ml-2 text-[28px] font-light"
                                                    style={{
                                                        fontFamily: "NeueHelveticaExt, sans-serif",
                                                        fontWeight: 700,
                                                        color: "#0011BF"
                                                    }}
                                                >
                                                    HÀNH ĐỘNG
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 4 */}
                                    <div
                                        className="p-6 rounded-lg h-full"
                                        style={{
                                            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.2) -121.84%, #FFFFFF 100%)",
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                            borderRadius: "16px"
                                        }}
                                    >
                                        <div className="space-y-8 text-[#0011BF]">
                                            {/* Nhóm 1: TẦM NHÌN */}
                                            <div className="grid grid-cols-[160px_1fr] gap-6 items-start">
                                                <div className="font-bold text-xl uppercase" style={{
                                                    fontFamily: "NeueHelveticaExt, sans-serif",
                                                    fontWeight: 700,
                                                    color: "#0011BF"
                                                }}>Tầm nhìn
                                                </div>
                                                <ul className="list-disc space-y-2 pl-4 text-lg md:text-[16px]" style={{
                                                    fontFamily: "NeueHelveticaExt, sans-serif",
                                                    fontWeight: 400,
                                                    color: "#0011BF"
                                                }}>
                                                    <li>Xây dựng niềm tin, lan toả giá trị tích cực, bền vững, chống
                                                        thông tin sai lệch, lừa đảo, thúc đẩy kỹ năng an toàn trên không
                                                        gian mạng.
                                                    </li>
                                                    <li>Định hướng, dẫn dắt hành vi đáng tin cậy của KOL.</li>
                                                    <li>Cảnh báo, phê phán trào lưu, hiện tượng lệch lạc của KOL trên
                                                        không gian mạng.
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Nhóm 2: HÀNH ĐỘNG */}
                                            <div className="grid grid-cols-[160px_1fr] gap-6 items-start">
                                                <div className="font-bold text-xl uppercase" style={{
                                                    fontFamily: "NeueHelveticaExt, sans-serif",
                                                    fontWeight: 700,
                                                    color: "#0011BF"
                                                }}>Hành động
                                                </div>
                                                <ul className="list-disc space-y-2 pl-4 text-lg md:text-[16px]" style={{
                                                    fontFamily: "NeueHelveticaExt, sans-serif",
                                                    fontWeight: 400,
                                                    color: "#0011BF"
                                                }}>
                                                    <li>Thông qua Chương trình "Tín nhiệm người có ảnh hưởng" trên không
                                                        gian mạng.
                                                    </li>
                                                    <li>Bằng các hoạt động đào tạo, tập huấn đa dạng.</li>
                                                    <li>Bằng các hoạt động cộng đồng rộng khắp.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="flex justify-center mt-6">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfVdo1tlGPdNVD5IEKZmyK_AYZhuthH5PVD0jVnKA0EMSMmog/viewform?usp=dialog"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button
                                            className="px-6 py-3 text-lg font-bold"
                                            style={{
                                                background: "linear-gradient(180deg, rgba(255, 255, 255, 0) -56.25%, rgba(255, 255, 255, 0.3) 100%)",
                                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                                borderRadius: "16px"
                                            }}
                                        >
                                            ĐĂNG KÝ THÀNH VIÊN
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </section>

            {/* ====== SECTION 3: HOẠT ĐỘNG CHÍNH + TESTIMONIALS ====== */}
            <section className="relative py-8 ">
                {/* BG image */}
                <div
                    className="absolute inset-0 z-10 bg-center bg-cover"
                    style={{backgroundImage: "url('/images/img_66.png')"}}
                />


                {/* Nội dung */}
                <div className="relative z-20 ">
                    {/* Header nhỏ */}
                    <div className="text-center py-12 md:py-16 px-4">
                        <h1
                            className="text-3xl md:text-5xl font-bold mb-2"
                            style={{fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 700, color: "#ffffff"}}
                        >
                            LIÊN MINH NIỀM TIN SỐ
                        </h1>
                        <p
                            className="text-xl md:text-3xl uppercase tracking-wide"
                            style={{fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400, color: "#ffffff"}}
                        >
                            ẢNH HƯỞNG TRÁCH NHIỆM, DẪN DẮT NIỀM TIN
                        </p>
                    </div>

                    {/* 3 Cards (hoạt động chính) */}
                    <div className="px-4 md:px-0 mb-14 md:mb-20 md:mx-[195px]">
                        <div
                            className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-6 md:gap-8">
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
                                    className="h-full p-6 md:p-8 rounded-[16px] backdrop-blur-sm flex flex-col"
                                    style={{
                                        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.2) -56.25%, #FFFFFF 100%)",
                                        border: "1px solid rgba(255, 255, 255, 0.3)",
                                    }}
                                >
                                    <div
                                        className="text-5xl md:text-6xl font-light mb-4 md:mb-6"
                                        style={{
                                            fontFamily: "NeueHelveticaExt, sans-serif",
                                            fontWeight: 700,
                                            color: "#0011BF"
                                        }}
                                    >
                                        {card.number}
                                    </div>

                                    <h3
                                        className="text-lg md:text-xl font-semibold mb-3 md:mb-4 leading-tight"
                                        style={{
                                            fontFamily: "NeueHelveticaExt, sans-serif",
                                            fontWeight: 500,
                                            color: "#0011BF"
                                        }}
                                    >
                                        {card.title}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed" style={{
                                        fontFamily: "NeueHelveticaExt, sans-serif",
                                        fontWeight: 400,
                                        color: "#0011BF"
                                    }}>
                                        {card.desc}
                                    </p>
                                    <div className="mt-auto"/>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Testimonials giữ nguyên */}
                    {/*<div className="relative overflow-visible">*/}
                    {/*    <div className="px-4 relative z-20 md:mx-[145px]">*/}
                    {/*        /!* MOBILE: 3 cards một hàng *!/*/}
                    {/*        <div className="md:hidden px-4">*/}
                    {/*            <div className="flex flex-nowrap gap-4 overflow-x-auto snap-x snap-mandatory">*/}
                    {/*                {testimonials.slice(0, 3).map((t, idx) => (*/}
                    {/*                    <div key={idx} className="snap-start shrink-0 w-[280px]">*/}
                    {/*                        <TestimonialCard t={t} />*/}
                    {/*                    </div>*/}
                    {/*                ))}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}


                    {/*        /!* DESKTOP: 3 cột *!/*/}
                    {/*        <div className="hidden md:block flex-1 mx-8">*/}
                    {/*            <div className="grid md:grid-cols-3 items-stretch gap-8">*/}
                    {/*                {testimonials.map((t, idx) => (*/}
                    {/*                    <div*/}
                    {/*                        key={idx}*/}
                    {/*                        className="h-full  flex"*/}
                    {/*                    >*/}
                    {/*                        <TestimonialCard t={t}/>*/}
                    {/*                    </div>*/}
                    {/*                ))}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>


            {/* ====== SECTION 4: CHƯƠNG TRÌNH TÍN NHIỆM ====== */}
            <section
                className="relative py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-center bg-cover"
                style={{backgroundImage: "url('/images/img_61.png')"}}
            >
                {/* Nội dung */}
                <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
                    {/* Header */}
                    <div className="mb-8 md:mb-12">
                        <h1
                            className="text-4xl md:text-5xl font-bold mb-3 tracking-wide"
                            style={{
                                fontFamily: "NeueHelveticaExt, sans-serif",
                                fontWeight: 700,
                            }}
                        >
                            CHƯƠNG TRÌNH TÍN NHIỆM
                        </h1>
                        <h2
                            className="text-3xl md:text-4xl font-bold tracking-wide"
                            style={{
                                fontFamily: "NeueHelveticaExt, sans-serif",
                                fontWeight: 400,
                            }}
                        >
                            NGƯỜI CÓ ẢNH HƯỞNG
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                        <p className="text-white text-[16px] md:text-lg leading-relaxed max-w-4xl mx-auto " style={{
                            fontFamily: "NeueHelveticaExt, sans-serif",
                            fontWeight: 400,
                        }}>
                            Chương trình cung cấp khung đánh giá toàn diện, và dễ dàng kiểm chứng; nhằm xác thực
                            độ minh bạch - đạo đức - trách nhiệm xã hội của người có ảnh hưởng.
                        </p>
                        <p className="text-[16px] leading-relaxed max-w-4xl mx-auto" style={{
                            fontFamily: "NeueHelveticaExt, sans-serif",
                            fontWeight: 400,

                        }}>
                            Chứng nhận “Tín nhiệm người có ảnh hưởng” thiết lập chuẩn mực truyền thông phù hợp
                            với quy định pháp luật, bảo vệ quyền lợi người tiêu dùng và tạo niềm tin cho các bên liên
                            quan.
                        </p>
                    </div>

                    {/* MỤC ĐÍCH */}
                    <div
                        className="w-full max-w-[1280px] mx-auto rounded-[16px] border border-white/30 backdrop-blur px-4 sm:px-6 md:px-8 py-5 md:py-6 text-left mb-5 box-border"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.4) -121.84%, #FFFFFF 100%)"
                        }}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <p
                                className="text-lg md:text-xl font-extrabold tracking-wide"
                                style={{
                                    fontFamily: "NeueHelveticaExt, sans-serif",
                                    color: "#0011BF",
                                    fontWeight: 700
                                }}
                            >
                                MỤC ĐÍCH
                            </p>
                            <span
                                className="inline-block w-8 h-[2px] bg-[#0011BF] relative after:content-[''] after:w-0 after:h-0 after:border-y-8 after:border-y-transparent after:border-l-8 after:border-l-[#0011BF] after:absolute after:-right-2 after:-top-[7px]"
                            />
                        </div>

                        {/* Luôn cùng 1 hàng */}
                        <div
                            className="flex flex-row gap-8 items-start"
                            style={{fontFamily: "NeueHelveticaExt, sans-serif", color: "#0011BF", fontWeight: 400}}
                        >
                            <Item>Đánh giá mức độ tín nhiệm trong hoạt động truyền thông, quảng bá</Item>
                            <Item>Hỗ trợ cơ quan quản lý, doanh nghiệp, nhãn hàng lựa chọn đối tác truyền thông phù
                                hợp</Item>
                            <Item>Bảo vệ người tiêu dùng khỏi nội dung sai lệch, quảng cáo trá hình</Item>
                        </div>

                    </div>


                    {/* TIÊU CHÍ ĐÁNH GIÁ */}
                    <div className="w-full max-w-[1280px] mx-auto text-center">
                        <div
                            className="rounded-[16px] border border-white/30 backdrop-blur px-4 py-3 md:py-4 box-border"
                            style={{background: "linear-gradient(180deg, rgba(255, 255, 255, 0.4) -121.84%, #FFFFFF 100%)"}}
                        >
                            <h2 className="text-base md:text-xl font-extrabold tracking-wide"
                                style={{
                                    fontFamily: "NeueHelveticaExt, sans-serif",
                                    color: "#0011BF",
                                    fontSize: "25px",
                                    fontWeight: 700
                                }}
                            >
                                TIÊU CHÍ ĐÁNH GIÁ - 5 TRỤ CỘT CHÍNH
                            </h2>
                        </div>
                    </div>

                    {/* Thanh timeline */}
                    <div className="relative mx-auto mt-6 h-8 max-w-6xl">
                        <div
                            className="absolute top-4 h-[2px] rounded-full bg-white"
                            style={{
                                left: "9.3%",
                                right: "9.3%"
                            }}
                        />
                        <div
                            className="absolute top-[10px] left-[9.4%] h-3 w-3 rounded-full bg-white shadow -translate-x-1/2"
                        />

                        {/* Dot tại điểm cuối (dot 5) */}
                        <div
                            className="absolute top-[10px] left-[90.5%] h-3 w-3 rounded-full bg-white shadow -translate-x-1/2"
                        />
                    </div>

                    {/* 5 trụ cột */}
                    <div
                        className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch">
                        {pillars.map((p) => (
                            <div
                                key={p.id}
                                className="relative h-full"
                            >
                                {/* Nút + line trên đầu mỗi card */}
                                <div
                                    className="pointer-events-none absolute left-1/2 top-[-18px] z-10 -translate-x-1/2">
                                    <div className="h-4 w-[3px] bg-white mx-auto"/>
                                    <div className="h-3 w-3 rounded-full bg-white shadow mx-auto"/>
                                </div>

                                {/* Line nối riêng cho card số 3 */}
                                {/* Line nối riêng cho card số 3 */}
                                {p.id === 3 && (
                                    <>
                                        <div
                                            className="absolute left-1/2 -translate-x-1/2 bg-white"
                                            style={{
                                                width: "3px",
                                                height: "50px",  // chiều dài line
                                                top: "-60px",    // bắt đầu ngay mép trên card
                                                zIndex: 5
                                            }}
                                        />
                                        {/* Dot tại điểm cuối (gần card tiêu chí) */}
                                        <div
                                            className="absolute left-1/2 top-[-64px] h-3 w-3 rounded-full bg-white shadow -translate-x-1/2"
                                            style={{zIndex: 6}}
                                        />
                                    </>
                                )}


                                {/* Nội dung card */}
                                <div
                                    className="h-full min-h-[192px] rounded-[16px] border border-white/30 backdrop-blur p-4 box-border"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(255, 255, 255, 0.4) -121.84%, #FFFFFF 100%)"
                                    }}
                                >
                                    <div
                                        className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0011BF]/10 font-bold border border-[#0011BF]"
                                        style={{
                                            fontFamily: "NeueHelveticaExt, sans-serif",
                                            color: "#0011BF",
                                            fontWeight: 400
                                        }}
                                    >
                                        {p.id}
                                    </div>
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{
                                            fontFamily: "NeueHelveticaExt, sans-serif",
                                            color: "#0011BF",
                                            fontWeight: 400
                                        }}
                                    >
                                        {p.title}
                                        {p.lines.length > 0 && (
                                            <>
                                                {p.lines.map((l, i) => (
                                                    <span key={i}>
                            {i === 0 ? ": " : ", "}
                                                        {l}
                        </span>
                                                ))}
                                            </>
                                        )}
                                    </p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <div
                className="w-full py-10 bg-no-repeat"
            >
                <div className="px-4">
                    {/*<div className="flex gap-4 overflow-x-auto no-scrollbar">*/}
                    {/*    /!* Slide 1 *!/*/}
                    {/*    <div className="relative min-w-[350px] rounded-2xl overflow-hidden">*/}
                    {/*        <img*/}
                    {/*            src="/images/img_48.png"*/}
                    {/*            alt="Event 1"*/}
                    {/*            className="w-full h-full object-cover"*/}
                    {/*        />*/}
                    {/*    </div>*/}

                    {/*    /!* Slide 2 *!/*/}
                    {/*    <div className="relative min-w-[350px] rounded-2xl overflow-hidden">*/}
                    {/*        <img*/}
                    {/*            src="/images/img_49.png"*/}
                    {/*            alt="Event 2"*/}
                    {/*            className="w-full h-full object-cover"*/}
                    {/*        />*/}
                    {/*    </div>*/}

                    {/*    /!* Slide 3 *!/*/}
                    {/*    <div className="relative min-w-[350px] rounded-2xl overflow-hidden">*/}
                    {/*        <img*/}
                    {/*            src="/images/img_50.png"*/}
                    {/*            alt="Event 3"*/}
                    {/*            className="w-full h-full object-cover"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <p className="text-center" style={{
                        fontFamily: "NeueHelveticaExt, sans-serif",
                        fontWeight: 700
                    }}>ĐƠN VỊ BẢO TRỢ TRUYỀN THÔNG</p>

                    <div className="relative top-0 md:top-[70px] mb-20">
                        <img
                            src="/images/img_73.png"
                            alt="Event 3"
                            className="block mx-auto w-[589px] h-[186px] max-w-full object-contain"
                        />
                    </div>

                </div>
            </div>
        </div>

    );
};
export default AllianceIntroduction;