import React from "react";

const Event: React.FC = () => {
    // Style có ảnh nền nằm ngang
    const cardWithImage: React.CSSProperties = {
        background: `
      linear-gradient(rgba(157,215,255,0.1), rgba(157,215,255,0.1)),
      url('/images/img_40.png')
    `,
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        borderRadius: "17.3576px",
    };

    // Style chỉ gradient
    const cardGradient: React.CSSProperties = {
        background: `
      linear-gradient(rgba(157,215,255,0.1), rgba(157,215,255,0.1))
    `,
        borderRadius: "17.3576px",
    };

    return (
        <div className="relative min-h-screen bg-[#1D3D86]">
            {/* Lớp nền */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-no-repeat bg-center"
                style={{
                    backgroundImage: "url('/images/img_35.png')",
                    backgroundSize: "100% auto",
                }}
            />

            <div className="relative z-10 px-4 md:px-8 py-8 md:py-12">
                <div className="mx-auto w-full max-w-6xl space-y-8">
                    {/* ==== Phần thông tin sự kiện ==== */}
                    <section className="overflow-hidden rounded-2xl border border-white/100 bg-[#23458F] text-white shadow-sm">
                        {/* Hàng trên */}
                        <div className="grid md:grid-cols-[300px_1fr] divide-y md:divide-y-0 md:divide-x divide-white/100">
                            <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center">
                                <div
                                    className="text-2xl md:text-3xl font-light"
                                    style={{
                                        fontFamily: "'BT Suave', sans-serif",
                                        fontWeight: 700,
                                        color: "#ffffff",
                                    }}
                                >
                                    8h00 → 12h00
                                </div>
                                <div
                                    className="text-5xl md:text-5xl font-bold leading-tight mt-1"
                                    style={{
                                        fontFamily: "'BT Suave', sans-serif",
                                        fontWeight: 700,
                                        color: "#ffffff",
                                    }}
                                >
                                    18.08.2025
                                </div>
                            </div>
                            <div className="p-6 md:p-8 flex items-center justify-center text-center">
                                <h3
                                    className="text-4xl md:text-4xl font-bold leading-snug"
                                    style={{
                                        fontFamily: "'BT Suave', sans-serif",
                                        fontWeight: 700,
                                        color: "#ffffff",
                                    }}
                                >
                                    Khách sạn Intercontinental Hanoi Landmark72
                                </h3>
                            </div>
                        </div>

                        {/* Hàng dưới */}
                        <div className="grid md:grid-cols-3 border-t border-white/100 divide-y md:divide-y-0 md:divide-x divide-white/100 bg-[#1D3D86]">
                            <div className="p-6 md:p-8 flex items-center justify-center text-sm md:text-base text-white/90 leading-relaxed text-center">
                                Quy tụ các KOL tiêu biểu trên toàn quốc cùng đại diện cơ quan quản lý và doanh nghiệp.
                            </div>
                            <div className="p-6 md:p-8 flex items-center justify-center text-sm md:text-base text-white/90 leading-relaxed text-center">
                                Diễn đàn thường niên, uy tín và quy mô nhất dành cho KOL.
                            </div>
                            <div className="p-6 md:p-8 flex items-center justify-center text-sm md:text-base text-white/90 leading-relaxed text-center">
                                Nhìn nhận vai trò, trách nhiệm của KOL trong kỷ nguyên số, đồng thời đề xuất các giải pháp phát huy ảnh hưởng tích cực của họ.
                            </div>
                        </div>
                    </section>

                    {/* ==== Thống kê ==== */}
                    <section className="space-y-6">
                        <h2
                            className="text-3xl md:text-4xl font-light text-white/90 text-center tracking-wide"
                            style={{
                                fontFamily: "'BT Suave', sans-serif",
                                fontWeight: 700,
                                color: "#ffffff",
                            }}
                        >
                            SỰ GÓP MẶT CỦA
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {/* Card 1 - có ảnh */}
                            <div className="rounded-2xl p-6 md:p-10" style={cardWithImage}>
                                <div className="space-y-5">
                                    <div className="flex items-end gap-3">
                    <span
                        className="text-5xl md:text-6xl font-extrabold text-white leading-none"
                        style={{
                            fontFamily: "'BT Suave', sans-serif",
                            fontWeight: 700,
                            color: "#ffffff",
                        }}
                    >
                      300+
                    </span>
                                        <span
                                            className="text-xl md:text-2xl font-semibold text-white"
                                            style={{
                                                fontFamily: "'BT Suave', sans-serif",
                                                fontWeight: 700,
                                                color: "#ffffff",
                                            }}
                                        >
                      KOLs
                    </span>
                                    </div>
                                    <p className="text-sm md:text-base text-white/90 text-center leading-relaxed">
                                        Lựa chọn theo tiêu chí từ Cục An ninh mạng và Cục nghiệp vụ của Bộ Công an.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 - chỉ gradient */}
                            <div className="rounded-2xl p-6 md:p-10" style={cardGradient}>
                                <div className="space-y-5">
                                    <div className="flex items-end gap-3">
                    <span
                        className="text-5xl md:text-6xl font-extrabold text-white leading-none"
                        style={{
                            fontFamily: "'BT Suave', sans-serif",
                            fontWeight: 700,
                            color: "#ffffff",
                        }}
                    >
                      50+
                    </span>
                                        <div
                                            className="text-xl md:text-2xl font-semibold text-white leading-tight"
                                            style={{
                                                fontFamily: "'BT Suave', sans-serif",
                                                fontWeight: 700,
                                                color: "#ffffff",
                                            }}
                                        >
                                            <div>DOANH</div>
                                            <div>NGHIỆP</div>
                                        </div>
                                    </div>
                                    <p className="text-sm md:text-base text-white/90">Truyền thông, đào tạo, quản lý KOL…</p>
                                </div>
                            </div>

                            {/* Card 3 - có ảnh */}
                            <div className="rounded-2xl p-6 md:p-10" style={cardWithImage}>
                                <div className="space-y-5">
                                    <div className="flex items-end gap-3">
                    <span
                        className="text-5xl md:text-6xl font-extrabold text-white leading-none"
                        style={{
                            fontFamily: "'BT Suave', sans-serif",
                            fontWeight: 700,
                            color: "#ffffff",
                        }}
                    >
                      50+
                    </span>
                                        <div
                                            className="text-xl md:text-2xl font-semibold text-white leading-tight"
                                            style={{
                                                fontFamily: "'BT Suave', sans-serif",
                                                fontWeight: 700,
                                                color: "#ffffff",
                                            }}
                                        >
                                            <div>CHUYÊN</div>
                                            <div>GIA</div>
                                        </div>
                                    </div>
                                    <p className="text-sm md:text-base text-white/90">
                                        Đến từ các lĩnh vực công nghệ, truyền thông và an ninh mạng
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==== Đối tác ==== */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Card 4 - có ảnh */}
                        <div className="rounded-2xl p-6 md:p-8" style={cardGradient}>
                            <div className="space-y-4">
                                <h3
                                    className="text-center text-xl md:text-2xl font-bold text-white leading-tight"
                                    style={{
                                        fontFamily: "'BT Suave', sans-serif",
                                        fontWeight: 700,
                                        color: "#ffffff",
                                    }}
                                >
                                    CƠ QUAN QUẢN LÝ NHÀ NƯỚC
                                </h3>
                                <p className="text-sm md:text-base text-white/90 leading-relaxed text-center ">
                                    Thuộc các bộ: Công an, Khoa học và Công nghệ, Công thương, Quốc phòng, Ngân hàng Nhà nước…
                                </p>
                            </div>
                        </div>

                        {/* Card 5 - chỉ gradient */}
                        <div className="rounded-2xl p-6 md:p-8" style={cardWithImage}>
                            <div>
                                <h3
                                    className="text-xl text-center md:text-2xl font-bold text-white leading-tight"
                                    style={{
                                        fontFamily: "'BT Suave', sans-serif",
                                        fontWeight: 700,
                                        color: "#ffffff",
                                    }}
                                >
                                    CÁC NỀN TẢNG MẠNG XÃ HỘI
                                </h3>
                                <div className="flex items-center justify-center flex-wrap">
                                    {[
                                        { name: "Zalo", img: "/images/img_36.png" },
                                        { name: "Meta", img: "/images/img_37.png" },
                                        { name: "Google", img: "/images/img_38.png" },
                                        { name: "TikTok", img: "/images/img_39.png" },
                                    ].map((platform, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-center px-3 py-2 rounded-lg backdrop-blur-sm"
                                        >
                                            <img src={platform.img} alt={platform.name} className="w-12 h-12 object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 6 - chỉ gradient */}
                        <div className="rounded-2xl p-6 md:p-8 flex items-center justify-center text-center" style={cardGradient}>
                            <h3
                                className="text-xl md:text-2xl font-bold text-white leading-tight"
                                style={{
                                    fontFamily: "'BT Suave', sans-serif",
                                    fontWeight: 700,
                                    color: "#ffffff",
                                }}
                            >
                                THÀNH VIÊN HIỆP HỘI AN NINH MẠNG QUỐC GIA
                            </h3>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Event;
