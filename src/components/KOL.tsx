import React from "react";
import { Image } from "antd";

interface KOLProfile {
    id: number;
    name: string;
    role: string;
    avatar: string;
}

const kolProfiles: KOLProfile[] = [
    { id: 1, name: "NGUYEN VAN A", role: "KOLs", avatar: "/images/img_43.png" },
    { id: 2, name: "NGUYEN VAN B", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 3, name: "NGUYEN VAN C", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 4, name: "NGUYEN VAN D", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 5, name: "NGUYEN VAN E", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 6, name: "NGUYEN VAN F", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 7, name: "NGUYEN VAN G", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 8, name: "NGUYEN VAN H", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 9, name: "NGUYEN VAN I", role: "KOLs", avatar: "/images/img_42.png" },
];

interface KOLCardProps {
    profile: KOLProfile;
}

function KOLCard({ profile }: KOLCardProps) {
    return (
        <div
            className="
        relative overflow-hidden min-h-[220px] w-[160px] md:w-[250px] md:h-[200px]
        transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl
      "
            style={{
                background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) -56.25%, rgba(255, 255, 255, 0.3) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "16px",
                backdropFilter: "blur(2px)",
            }}
        >
            {/* Text trên cùng */}
            <div className="absolute top-0 left-0 right-0 z-20 px-2 md:px-3 pt-2">
                <div className="text-white font-semibold text-xs md:text-sm leading-tight whitespace-normal break-words">
                    {profile.name}
                </div>
                <div className="italic text-white/80 text-[10px] md:text-xs mt-0.5 whitespace-normal">
                    {profile.role}
                </div>
            </div>

            {/* Avatar */}
            <div className="absolute -bottom-2 md:ml-[60px] z-10">
                <Image
                    alt={profile.name}
                    src={profile.avatar}
                    preview={false}
                    className="w-28 md:w-[190px] h-auto object-contain"
                />
            </div>
        </div>
    );
}

const KOL: React.FC = () => {
    // Laptop/desktop: 4 – 5 – 4 (giữ nguyên)
    const row1_md = kolProfiles.slice(0, 4);
    const row2_md = kolProfiles.slice(4, 9);

    return (
        <div
            className="relative py-12 px-4 bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/img_63.png')", // đổi theo ảnh bạn có
            }}
        >

            <div className="relative z-10">
                <div className="text-center mb-7">
                    <h2
                        className="text-2xl md:text-3xl font-light text-white/70 tracking-wider"
                        style={{ fontFamily: "NeueHelveticaExt, sans-serif", fontWeight: 700 }}
                    >
                        CÁC KOLs XÁC NHẬN THAM GIA
                    </h2>
                </div>

                {/* Hàng 1: mobile 3, md+ 4 */}
                <div className="flex justify-center mb-10">
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-8 justify-items-center">
                        {row1_md.map((p, i) => (
                            <div key={p.id} className={i >= 3 ? "hidden md:block" : ""}>
                                <KOLCard profile={p} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hàng 2: mobile 4, md+ 5 */}
                <div className="flex justify-center mb-10">
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-8 justify-items-center">
                        {row2_md.map((p, i) => (
                            <div key={p.id} className={i >= 4 ? "hidden md:block" : ""}>
                                <KOLCard profile={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KOL;
