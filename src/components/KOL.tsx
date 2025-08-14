import React, { useMemo } from "react";

interface KOLProfile {
    id: number;
    name: string;
    role: string;
    avatar: string;
}

const kolProfiles: KOLProfile[] = [
    { id: 1, name: "XUÂN BẮC", role: "NSND", avatar: "/images/img_5.png" },
    { id: 2, name: "KHÁNH VY", role: "MC", avatar: "/images/img_11.png" },
    { id: 3, name: "ĐEN VÂU", role: "RAPPER", avatar: "/images/img_27.png" },
    { id: 4, name: "BẢO NGỌC", role: "HOA HẬU", avatar: "/images/img_28.png" },
    { id: 5, name: "THANH THUỶ", role: "HOA HẬU", avatar: "/images/img_29.png" },
    { id: 6, name: "TIỂU VY", role: "HOA HẬU", avatar: "/images/img_30.png" },
    { id: 7, name: "TÙNG DƯƠNG", role: "CA SĨ", avatar: "/images/img_32.png" },
    { id: 8, name: "PHƯƠNG THANH", role: "CA SĨ", avatar: "/images/img_33.png" },
    { id: 9, name: "HÀ MYO", role: "CA SĨ", avatar: "/images/img_34.png" },
    { id: 10, name: "BẢO THANH", role: "DIỄN VIÊN", avatar: "/images/img_35.png" },
    { id: 11, name: "MEICHAN", role: "KOL", avatar: "/images/img_40.png" },
    { id: 12, name: "TINA THẢO THI", role: "KOL", avatar: "/images/img_41.png" },
    { id: 13, name: "EM BÉ XỆ XỆ", role: "KOL", avatar: "/images/img_42.png" },
    { id: 14, name: "HANA BAN MÊ", role: "KOL", avatar: "/images/img_43.png" },
    { id: 15, name: "SÙNG A TÙA", role: "KOL", avatar: "/images/img_44.png" },
    { id: 16, name: "ĐỒNG VĂN HÙNG", role: "ẨM THỰC MẸ LÀM", avatar: "/images/img_45.png" },
    { id: 17, name: "PHƯƠNG NAM", role: "KOL", avatar: "/images/img_46.png" },
    { id: 18, name: "TRÚC LINH", role: "HOA HẬU", avatar: "/images/img_47.png" },
    { id: 19, name: "TRẦN NGỌC CHÂU ANH", role: "Á HẬU", avatar: "/images/img_51.png" },
    { id: 20, name: "NGUYỄN THỊ VÂN NHI", role: "Á HẬU", avatar: "/images/img_52.png" },
    { id: 21, name: "HƯNG NGUYỄN", role: "NAM VƯƠNG", avatar: "/images/img_53.png" },
    { id: 22, name: "QUẾ NGỌC HẢI", role: "CẦU THỦ", avatar: "/images/img_54.png" },
    { id: 23, name: "PHẠM TUẤN HƯNG", role: "KOL", avatar: "/images/img_55.png" },
    { id: 24, name: "TUẤN NGỌC ĐÂY", role: "KOL", avatar: "/images/img_67.png" },
    { id: 25, name: "VĨNH THÍCH ĂN NGON", role: "KOL", avatar: "/images/img_68.png" },
    { id: 26, name: "ĐỖ KIM PHÚC", role: "KOL", avatar: "/images/img_69.png" },
    { id: 27, name: "TRƯƠNG VÂN ĐẠO", role: "KOL", avatar: "/images/img_70.png" },
    { id: 28, name: "NGUYỄN THÁI HỌC", role: "CA SĨ", avatar: "/images/img_71.png" },
];

const KOL: React.FC = () => {
    // Hàng trên: mảng gốc nhân đôi
    const trackTop = useMemo(() => [...kolProfiles, ...kolProfiles], []);

    // Hàng dưới: xoay mảng đi nửa độ dài rồi nhân đôi
    const trackBottom = useMemo(() => {
        const offset = Math.ceil(kolProfiles.length / 2); // nửa mảng, làm tròn lên
        const rotated = kolProfiles.slice(offset).concat(kolProfiles.slice(0, offset));
        return [...rotated, ...rotated];
    }, []);

    return (
        <div
            className="relative py-12  "
            style={{
                backgroundImage: "url('/images/img_63.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="relative z-10">
                <div className="text-center mb-7">
                    <h2
                        className="text-2xl md:text-3xl font-light text-white/70 tracking-wider"
                        style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 700 }}
                    >
                        KOLS THAM DỰ
                    </h2>
                </div>


                <div className="overflow-hidden mb-10">
                    <div className="marquee-left whitespace-nowrap">
                        {trackTop.map((p, i) => (
                            <div key={`${p.id}-top-${i}`} className="inline-block mx-2 md:mx-3">
                                <img
                                    src={p.avatar}
                                    alt={p.name}
                                    loading="lazy"
                                    className="w-[300px] h-[300px] rounded-[16px] object-cover block"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hàng 2: chạy sang phải (khác thứ tự + khác tốc độ) */}
                <div className="overflow-hidden">
                    <div className="marquee-right whitespace-nowrap">
                        {trackBottom.map((p, i) => (
                            <div key={`${p.id}-bottom-${i}`} className="inline-block mx-2 md:mx-3">
                                <img
                                    src={p.avatar}
                                    alt={p.name}
                                    loading="lazy"
                                    className="w-[300px] h-[300px] rounded-[16px] object-cover block"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KOL;
