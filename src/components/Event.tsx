import React from "react";

const Event: React.FC = () => {
    const cardGradient: React.CSSProperties = {
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0) -56.25%, rgba(255, 255, 255, 0.3) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "16px"
    };

    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

    return (
        <div className="relative min-h-screen">
            {/* Lớp nền */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url('${isMobile ? "/images/img_62.png" : "/images/img_62.png"}')`,
                    backgroundSize: "100% auto",
                }}
            />

            <div className="relative z-10 px-4 md:px-8 py-8 md:py-12">
                <div className="mx-auto w-full max-w-6xl">
                    {/* ==== Phần thông tin sự kiện ==== */}
                    <section className="text-white">
                        {/* Thanh thông tin (giống pill mờ trong ảnh) */}
                        <div
                            className="rounded-2xl border border-white/40 bg-white/10 backdrop-blur px-4 md:px-8 py-4 md:py-5
             flex flex-col items-center md:items-start text-center md:text-left shadow-sm"
                        >
                            {/* Hàng trên: Giờ và Ngày */}
                            <div className="flex items-center justify-between w-full">
                                {/* Giờ */}
                                <div
                                    className="text-xl md:text-3xl font-bold"
                                >
                                    7h30&nbsp;&rarr;&nbsp;12h30
                                </div>

                                {/* Ngày */}
                                <div
                                    className="text-xl md:text-3xl font-bold"
                                >
                                    18.08.2025
                                </div>
                            </div>

                            {/* Địa điểm */}
                            <h3
                                className="text-2xl md:text-4xl font-bold leading-snug mt-2"
                            >
                                Khách sạn Intercontinental Hanoi Landmark&nbsp;72
                            </h3>
                        </div>


                        <div
                            className="mt-3 px-4 md:px-8 py-5 md:py-6 space-y-3 text-sm md:text-base text-white leading-relaxed" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                            <p className={"text-[30px] justify-center text-center"}>
                                Diễn đàn thường niên, uy tín và quy mô dành cho KOL
                            </p>
                        </div>


                    </section>


                    {/* ==== Thống kê ==== */}
                    <section className="space-y-6">
                        <h2
                            className="text-2xl md:text-3xl font-light text-white/90 text-center tracking-wide"
                            style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 700 }}
                        >
                            SỰ GÓP MẶT CỦA
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {/* Card 1 - có ảnh */}
                            <div className="rounded-2xl p-6 md:p-10" style={cardGradient}>
                                <div className="space-y-5">
                                    <div className="flex items-end gap-3">
                    <span
                        className="text-5xl md:text-6xl font-extrabold text-white leading-none"
                        style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 500 }}
                    >
                      300+
                    </span>
                                        <span
                                            className="text-xl md:text-2xl font-semibold text-white"
                                            style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 500 }}
                                        >
                      KOL
                    </span>
                                    </div>
                                    <p className="text-sm md:text-base text-white  leading-relaxed" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                                        Tiêu biểu, đại diện trên các lĩnh vực, không phân biệt dân tộc, tôn giáo từ mọi miền Tổ quốc
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 - chỉ gradient */}
                            <div className="rounded-2xl p-6 md:p-10" style={cardGradient}>
                                <div className="space-y-5">
                                    <div className="flex items-end gap-3">
                    <span
                        className="text-5xl md:text-6xl font-extrabold text-white leading-none"
                        style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 700 }}
                    >
                      50+
                    </span>
                                        <div
                                            className="text-xl md:text-2xl font-semibold text-white leading-tight"
                                            style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 500 }}
                                        >
                                            <div>DOANH</div>
                                            <div>NGHIỆP</div>
                                        </div>
                                    </div>
                                    <p className="text-sm md:text-base text-white/90" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>Truyền thông, đào tạo, quản lý KOL,...</p>
                                </div>
                            </div>

                            {/* Card 3 - có ảnh */}
                            <div className="rounded-2xl p-6 md:p-10 md:flex"
                                 style={cardGradient}>
                                <div className="space-y-5">
                                    <div className="flex items-end gap-3">
                    <span
                        className="text-5xl md:text-6xl font-extrabold text-white leading-none"
                        style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 500 }}
                    >
                      50+
                    </span>
                                        <div
                                            className="text-xl md:text-2xl font-semibold text-white leading-tight"
                                            style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 500 }}
                                        >
                                            <div>CHUYÊN</div>
                                            <div>GIA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==== Đối tác ==== */}
                    <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Card 4 - chỉ gradient */}
                        <div className="rounded-2xl p-6 md:p-8" style={cardGradient}>
                            <div className="space-y-4">
                                <h3
                                    className="text-center text-xl md:text-2xl font-bold text-white leading-tight"
                                    style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 500 }}
                                >
                                    CƠ QUAN, TỔ CHỨC NHÀ NƯỚC
                                </h3>
                                <p className="text-sm md:text-base text-white leading-relaxed" style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 400 }}>
                                    UBTƯ MTTQ Việt Nam, TW Đoàn TNCS HCM, Hội liên hiệp TN VN. Các bộ Công an, Công thương, Tài chính, Khoa học - Công nghệ, Văn hóa, Thể thao và Du lịch
                                </p>
                            </div>
                        </div>

                        {/* Card 5 - có ảnh */}
                        <div className="rounded-2xl p-6 md:p-8" style={cardGradient}>
                            <div>
                                <h3
                                    className="text-xl text-center md:text-2xl font-bold text-white leading-tight"
                                    style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 500 }}
                                >
                                    CÁC NỀN TẢNG MẠNG XÃ HỘI
                                </h3>
                                <div className="flex items-center justify-center flex-wrap">
                                    {[
                                        {name: "Zalo", img: "/images/img_36.png"},
                                        {name: "Meta", img: "/images/img_37.png"},
                                        {name: "TikTok", img: "/images/img_39.png"},
                                    ].map((platform, index) => (
                                        <div key={index} className="flex items-center justify-center px-3 py-2">
                                            <img src={platform.img} alt={platform.name}
                                                 className="w-16 h-16 object-scale-down"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 6 - chỉ gradient */}
                        <div className="rounded-2xl p-6 md:p-8 flex justify-center text-center  "
                             style={cardGradient}>
                            <h3
                                className="text-xl md:text-2xl font-bold text-white leading-tight"
                                style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 500 }}
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
