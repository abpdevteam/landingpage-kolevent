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
    { id: 10, name: "NGUYEN VAN K", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 11, name: "NGUYEN VAN L", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 12, name: "NGUYEN VAN M", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 13, name: "NGUYEN VAN N", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 14, name: "NGUYEN VAN O", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 15, name: "NGUYEN VAN P", role: "KOLs", avatar: "/images/img_42.png" },
    { id: 16, name: "NGUYEN VAN P", role: "KOLs", avatar: "/images/img_42.png" },
];

interface KOLCardProps {
    profile: KOLProfile;
}

function KOLCard({ profile }: KOLCardProps) {
    return (
        <div className="relative rounded-2xl overflow-hidden min-h-[180px] w-[160px] md:w-[250px] md:h-[151px]">
            {/* Nền chỉ ở nửa dưới */}
            <div
                className="absolute bottom-0 w-full h-1/2"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FDEDE0 100%)",
                }}
            />
            {/* Vignette fade dưới */}
            <div
                className="pointer-events-none absolute inset-x-3 md:inset-x-4 bottom-0 h-1/2 rounded-xl"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(29,61,134,0) 0%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.85) 100%)",
                    filter: "blur(0.3px)",
                }}
            />

            {/* Text trên cùng - Đã sửa để text không bị giới hạn */}
            <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-3">
                <div
                    className="text-white font-semibold text-xs md:text-sm leading-tight whitespace-normal break-words">
                    {profile.name}
                </div>
                <div className="italic text-white/80 text-[10px] md:text-xs mt-0.5 whitespace-normal">
                    {profile.role}
                </div>
            </div>

            {/* Avatar */}
            <div className="absolute -bottom-2 md:bottom-auto md:ml-[60px] z-10">
                <Image
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
    const row3_md = kolProfiles.slice(9, 13);

    return (
        <div className="bg-[#1D3D86] py-12 px-4">
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

            {/* Hàng 3: mobile 3, md+ 4 */}
            <div className="flex justify-center">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-8 justify-items-center">
                    {row3_md.map((p, i) => (
                        <div key={p.id} className={i >= 3 ? "hidden md:block" : ""}>
                            <KOLCard profile={p} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-7">
                <h2
                    className="text-2xl md:text-3xl font-light text-white/70 tracking-wider"
                    style={{
                        fontFamily: "'BT Suave', sans-serif",
                        fontWeight: 700,
                        color: "#ffffff",
                    }}
                >
                    CÁC KOLs XÁC NHẬN THAM GIA
                </h2>
            </div>
        </div>
    );
};

export default KOL;