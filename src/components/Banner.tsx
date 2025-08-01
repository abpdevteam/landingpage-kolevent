import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Banner: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % 3)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + 3) % 3)
        console.log(currentSlide);
    }

    return (
        <div className="w-full bg-white ">
            {/* Image Carousel Section */}
            <div className="relative  px-4 py-8">
                <div className="max-w-6xl mx-auto relative">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className=" p-2 rounded-full hover:bg-gray-100 transition-colors absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-gray-300/50 text-gray-600"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    {/* Image Boxes */}
                    <div className="flex gap-4 px-16">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex-1 aspect-[4/3] bg-gray-300 rounded-lg flex items-center justify-center">
                                <div className="w-20 h-20 border-4 border-gray-400 rounded-xl flex items-center justify-center bg-gray-300">
                                    <div className="relative">
                                        <div className="w-12 h-8 border-2 border-gray-400 rounded-sm relative overflow-hidden">
                                            <div className="absolute bottom-0 left-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-gray-400"></div>
                                            <div className="absolute bottom-0 right-1 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-gray-400"></div>
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 border-2 border-gray-400 rounded-full bg-gray-300"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className=" p-2 rounded-full hover:bg-gray-100 transition-colors absolute right-0 top-1/2 -translate-y-1/2 z-10  hover:bg-gray-300/50  "
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Logo Grid Section - ĐƠN VỊ */}
            <div className="bg-white py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-5 gap-8 mb-8">
                        {Array.from({ length: 10 }, (_, i) => (
                            <div key={i} className="text-center">
                                <div className="text-gray-400 font-normal text-base leading-tight tracking-wide">
                                    LOGO
                                    <br />
                                    ĐƠN VỊ
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center space-x-3">
                        {[0, 1, 2].map((dot) => (
                            <button
                                key={dot}
                                className={`w-3 h-3 rounded-full transition-colors ${dot === 0 ? "bg-gray-800" : "bg-gray-300"}`}
                                onClick={() => setCurrentSlide(dot)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Logo Grid Section - BTC */}
            <div className="bg-gray-200 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-5 gap-8">
                        {Array.from({ length: 5 }, (_, i) => (
                            <div key={i} className="text-center">
                                <div className="text-gray-500 font-normal text-base leading-tight tracking-wide">
                                    LOGO
                                    <br />
                                    BTC
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;