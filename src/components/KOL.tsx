import React from "react";
import { Image } from "antd";

interface KOLProfile {
    id: number
    name: string
    role: string
    avatar: string
}

const kolProfiles: KOLProfile[] = [
    { id: 1, name: "NGUYEN VAN A", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "NGUYEN VAN B", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 3, name: "NGUYEN VAN C", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 4, name: "NGUYEN VAN D", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 5, name: "NGUYEN VAN E", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 6, name: "NGUYEN VAN F", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 7, name: "NGUYEN VAN G", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 8, name: "NGUYEN VAN H", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 9, name: "NGUYEN VAN I", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 10, name: "NGUYEN VAN K", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 11, name: "NGUYEN VAN L", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 12, name: "NGUYEN VAN M", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 13, name: "NGUYEN VAN N", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 14, name: "NGUYEN VAN O", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 15, name: "NGUYEN VAN P", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 16, name: "NGUYEN VAN P", role: "KOL", avatar: "/placeholder.svg?height=100&width=100" },
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
                    <div className="text-sm font-semibold text-gray-800 whitespace-nowrap">{profile.name}</div>
                    <div className="text-xs text-gray-600">{profile.role}</div>
                </div>

                {/* Profile Avatar - fixed position */}
                <div className="flex-shrink-0">
                    <Image
                        src={profile.avatar || "/placeholder.svg"}
                        width={100}
                        height={100}
                        className="rounded-full bg-gray-400 object-cover"
                        preview={false}
                    />
                </div>
            </div>
        </div>
    )
}

const KOL: React.FC = () => {
    const row1 = kolProfiles.slice(0, 5);
    const row2 = kolProfiles.slice(5, 11);
    const row3 = kolProfiles.slice(11);

    return (
        <div className=" bg-gray-50 py-12 px-4">
            <div className="">
                {/* First Row - 5 cards */}
                <div className="flex justify-center mb-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
                        {row1.map((profile) => (
                            <KOLCard key={profile.id} profile={profile}/>
                        ))}
                    </div>
                </div>

                {/* Second Row - 6 cards */}
                <div className="flex justify-center mb-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
                        {row2.map((profile) => (
                            <KOLCard key={profile.id} profile={profile}/>
                        ))}
                    </div>
                </div>

                {/* Third Row - 5 cards */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
                        {row3.map((profile) => (
                            <KOLCard key={profile.id} profile={profile}/>
                        ))}
                    </div>
                </div>
                <div className="text-center mb-16 mt-10">
                    <h2 className="text-2xl md:text-3xl font-light text-gray-400 tracking-wider">
                        CÁC KOLs XÁC NHẬN THAM GIA
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default KOL;