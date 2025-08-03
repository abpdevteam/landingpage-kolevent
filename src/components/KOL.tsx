import React from "react";
import { Image } from "antd";

interface KOLProfile {
    id: number
    name: string
    role: string
    avatar: string
}

const kolProfiles: KOLProfile[] = [
    { id: 1, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 3, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 4, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 5, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 6, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 7, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 8, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 9, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 10, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 11, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 12, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 13, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 14, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
    { id: 15, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=80&width=80" },
]

interface KOLCardProps {
    profile: KOLProfile
}

function KOLCard({ profile }: KOLCardProps) {
    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="relative flex items-start w-full">
                {/* Text on the left */}
                <div className="flex-1 pr-2 text-right mt-4">
                    <div className="text-xs font-semibold text-gray-800 whitespace-nowrap">{profile.name}</div>
                    <div className="text-xs text-gray-600">{profile.role}</div>
                </div>

                {/* Profile Avatar - fixed position */}
                <div className="flex-shrink-0">
                    <Image
                        src={profile.avatar || "/placeholder.svg"}
                        width={80}
                        height={80}
                        className="rounded-full bg-gray-400 object-cover"
                        preview={false}
                    />
                </div>
            </div>

        </div>
    )
}

const KOL: React.FC = () => {
    const row1 = kolProfiles.slice(0, 6);
    const row2 = kolProfiles.slice(6, 11);
    const row3 = kolProfiles.slice(11);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* First Row - Full Width */}
                <div className="flex justify-center mb-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                        {row1.map((profile) => (
                            <KOLCard key={profile.id} profile={profile}/>
                        ))}
                    </div>
                </div>

                {/* Second Row - Indented */}
                <div className="flex justify-center mb-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                        {row2.map((profile) => (
                            <KOLCard key={profile.id} profile={profile}/>
                        ))}
                    </div>
                </div>

                {/* Third Row - Full Width */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {row3.map((profile) => (
                            <KOLCard key={profile.id} profile={profile}/>
                        ))}
                    </div>
                </div>

                <div className="text-center mb-16 mt-20">
                    <h2 className="text-2xl md:text-3xl font-light text-gray-400 tracking-wider">
                        CÁC KOLs XÁC NHẬN THAM GIA
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default KOL;