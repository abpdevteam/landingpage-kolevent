import { ChevronLeft, ChevronRight, User } from "lucide-react"
import React, { useState } from "react"
interface Testimonial {
    name: string
    position: string
    quote: string
}

const Testimonial: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const testimonials: Testimonial[] = [
        {
            name: "NGUYEN VAN A",
            position: "CHỨC DANH",
            quote: "It's a great honor to be invited to this event and have a very fruitful conversation.",
        },
        {
            name: "NGUYEN VAN B",
            position: "CHỨC DANH",
            quote: "It's a great honor to be invited to this event and have a very fruitful conversation.",
        },
        {
            name: "NGUYEN VAN C",
            position: "CHỨC DANH",
            quote: "It's a great honor to be invited to this event and have a very fruitful conversation.",
        },
    ]

    const nextSlide = () => {
        console.log(currentSlide);
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="text-center py-16 px-4">
                <h1 className="text-4xl md:text-5xl font-light text-gray-400 mb-4 tracking-wider">LIÊN MINH NIỀM TIN SỐ</h1>
                <p className="text-lg text-gray-500 font-light tracking-wide">ẢNH HƯỞNG TRÁCH NHIỆM, DẪN DẮT NIỀM TIN</p>
            </div>

            {/* Main Content Cards */}
            <div className="max-w-7xl mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 01 */}
                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        <div className="text-6xl font-light text-gray-300 mb-6">01</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight">
                            Triển khai các dự án cộng đồng trên không gian mạng
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Tạo hưng thú cho trẻ em, giúp trẻ hiểu và đáo tạo tuyến giáo phẩm xây dựng môi trường số an toàn - minh
                            bạch - sáng tạo cây.
                        </p>
                    </div>

                    {/* Card 02 */}
                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        <div className="text-6xl font-light text-gray-300 mb-6">02</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight">Đào tạo & Nâng cao Nhân thức</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Tổ chức các chương trình đào tạo, huấn luyện về chế độ kiến thức nhận dạng các nội dung, ký năng và kiến
                            thức về IOT của người nội.
                        </p>
                    </div>

                    {/* Card 03 */}
                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        <div className="text-6xl font-light text-gray-300 mb-6">03</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight">
                            Tổ chức các sự kiện và hoạt động thực tiễn
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Tạo điều kiện gặp gỡ, thảo luận, chia sẻ, thoát chính sách, các buổi gặp mặt và phiên hoạt động ý nghĩa
                            khác để biến cam kết thành hành động.
                        </p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="flex items-center justify-between">
                        {/* Previous Button */}
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-400" />
                        </button>

                        {/* Testimonials Grid */}
                        <div className="flex-1 mx-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                        <div className="flex items-start gap-4">
                                            <div>
                                                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                                <p className="text-xs text-gray-500 mb-2">{testimonial.position}</p>
                                                <div className="text-gray-600 text-sm leading-relaxed">
                                                    <span className="text-xl text-gray-300 mr-1 font-serif">"</span>
                                                    {testimonial.quote}
                                                    <span className="text-xl text-gray-300 ml-1 font-serif">"</span>
                                                </div>
                                            </div>

                                            {/* Avatar */}
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                                                    <User className="w-8 h-8 text-white"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-400"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonial