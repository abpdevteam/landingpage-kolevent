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
        <div
            className="w-[230px] relative rounded-2xl overflow-hidden min-h-[200px]"
            style={{
                background:
                    "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FDEDE0 100%)",
            }}
        >
            {/* Vignette fade dưới */}
            <div
                className="pointer-events-none absolute inset-x-4 bottom-0 h-1/2 rounded-xl"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(29,61,134,0) 0%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.85) 100%)",
                    filter: "blur(0.3px)",
                }}
            />
            {/* Text góc trái trên */}
            <div className="relative z-10 p-5">
                <div className="text-white font-semibold text-sm leading-tight">
                    {profile.name}
                </div>
                <div className="italic text-white/80 text-xs mt-1">
                    {profile.role}
                </div>
            </div>
            {/* Avatar góc phải đáy */}
            <div className="absolute -right-5 -bottom-10 z-10">
                <Image
                    src={profile.avatar}
                    width={190}
                    height={200}
                    preview={false}
                    className="object-contain"
                />
            </div>
        </div>
    );
}



const KOL: React.FC = () => {
    const row1 = kolProfiles.slice(0, 5);
    const row2 = kolProfiles.slice(5, 11);
    const row3 = kolProfiles.slice(11);

    return (
        <div className="bg-[#1D3D86] py-12 px-4">
            {/* Hàng 1 - 5 card */}
            <div className="flex justify-center mb-12">
                <div className="grid grid-cols-5 gap-8 justify-items-center">
                    {row1.map((p) => (
                        <KOLCard key={p.id} profile={p} />
                    ))}
                </div>
            </div>

            {/* Hàng 2 - 6 card */}
            <div className="flex justify-center mb-12">
                <div className="grid grid-cols-6 gap-8 justify-items-center">
                    {row2.map((p) => (
                        <KOLCard key={p.id} profile={p} />
                    ))}
                </div>
            </div>

            {/* Hàng 3 - 5 card */}
            <div className="flex justify-center">
                <div className="grid grid-cols-5 gap-8 justify-items-center">
                    {row3.map((p) => (
                        <KOLCard key={p.id} profile={p} />
                    ))}
                </div>
            </div>

            <div className="text-center mb-16 mt-10">
                <h2 className="text-2xl md:text-3xl font-light text-white/70 tracking-wider"    style={{
                    fontFamily: "'BT Suave', sans-serif",
                    fontWeight: 700,
                    color: "#ffffff",
                }}>
                    CÁC KOLs XÁC NHẬN THAM GIA
                </h2>
            </div>
        </div>
    );
};

export default KOL;
