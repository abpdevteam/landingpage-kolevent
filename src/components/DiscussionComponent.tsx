import { ImageIcon } from "lucide-react"
import React from "react"

interface DiscussionTopic {
    id: number
    number: string
    title: string
}

const DiscussionComponent: React.FC = () => {
    const topics: DiscussionTopic[] = [
        {
            id: 1,
            number: "01",
            title: "Vai trò của KOL trong kỳ nguyên số"
        },
        {
            id: 2,
            number: "02",
            title: "Trách nhiệm đạo đức - pháp lý - xã hội của kol trong kỷ nguyên mới"
        },
        {
            id: 3,
            number: "03",
            title: "Liên kết hệ sinh thái: nền tảng doanh nghiệp - agency- KOLs"
        }
    ]

    return (
        <div className=" p-8 bg-white">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-12">
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-4xl font-light text-black">CHUYÊN ĐỀ</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-5xl font-bold text-black">→</span>

                        <span className="text-4xl font-light text-black">THẢO LUẬN</span>
                    </div>
                </div>

                {/* Artwork placeholder */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-gray-400"/>
                    </div>
                    <span className="text-sm text-gray-600 font-medium">ARTWORK</span>
                </div>
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {topics.map((topic) => (
                    <div key={topic.id} className="bg-gray-50 rounded-lg h-full flex flex-col">
                        <div className="flex items-center gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 bg-gray-200  flex items-center justify-center">
                                    <span className="text-3xl font-light text-gray-700">{topic.number}</span>
                                </div>
                            </div>
                            <p className="text-base text-gray-800 leading-relaxed flex-grow">
                                {topic.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Column 1 */}
                    <div className="text-center bg-gray-100 rounded-lg flex items-center justify-center min-h-[150px]">
                        <p className="text-gray-600 leading-relaxed text-sm">
                            <span className="block mb-2">Đạo đức số, yếu tố cốt lõi trong ảnh hưởng bền vững</span>
                            <span className="block mb-2">Biểu đạt tự do và những ranh giới</span>
                            <span className="block">Giá trị thật hay những con số ảo</span>
                        </p>

                    </div>

                    {/* Column 2 */}
                    <div className="text-center bg-gray-100 rounded-lg flex items-center justify-center min-h-[150px]">
                        <p className="text-gray-600 leading-relaxed text-sm">
                            <span className="block mb-2">Sự cần thiết về giải pháp trang bị nhận thức đó với KOL</span>
                            <span
                                className="block mb-2">Vai trò của nền tảng trong việc định hướng giá trị của KOL</span>
                            <span
                                className="block mb-2">Tin tức cộng đồng và vai trò kiến tạo niềm tin trong kỷ nguyên</span>
                            <span className="block">truyền thông xã hội</span>
                        </p>

                    </div>

                    {/* Column 3 */}
                    <div className="text-center bg-gray-100 rounded-lg flex items-center justify-center min-h-[150px]">
                        <p className="text-gray-600 leading-relaxed text-sm">
                            <span className="block mb-2">Văn hóa số và ứng xử chuẩn mực của người ảnh hưởng</span>
                            <span className="block mb-2">Vai trò của KOL trong hệ sinh thái truyền thông số</span>
                            <span
                                className="block">Thương hiệu cá nhân và quyền sở hữu trí tuệ trong kỷ nguyên số</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscussionComponent