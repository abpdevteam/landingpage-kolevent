"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "antd"

interface KOL {
    id: number
    name: string
    role: string
    avatar?: string
}

const kols: KOL[] = [
    { id: 1, name: "NGUYEN VAN A", role: "KOL" },
    { id: 2, name: "NGUYEN VAN B", role: "KOL" },
    { id: 3, name: "NGUYEN VAN C", role: "KOL" },
    { id: 4, name: "NGUYEN VAN D", role: "KOL" },
    { id: 5, name: "NGUYEN VAN E", role: "KOL" },
    { id: 6, name: "NGUYEN VAN F", role: "KOL" },
    { id: 7, name: "NGUYEN VAN G", role: "KOL" },
    { id: 8, name: "NGUYEN VAN H", role: "KOL" },
]

const KOL: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerView = 5
    const maxIndex = Math.max(0, kols.length - itemsPerView)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
    }

    const visibleKols = kols.slice(currentIndex, currentIndex + itemsPerView)

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            {/* Title */}

            <div className="relative">
                {/* Navigation Arrows */}
                <Button
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-md hover:bg-gray-50"
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                >
                    <ChevronLeft className="h-6 w-6 text-gray-600"/>
                </Button>

                <Button
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-md hover:bg-gray-50"
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                >
                    <ChevronRight className="h-6 w-6 text-gray-600"/>
                </Button>

                {/* KOL Cards Container */}
                <div className="mx-16">
                    <div className="grid grid-cols-5 gap-6">

                        {visibleKols.map((kol) => (

                            <div key={`${kol.id}-${currentIndex}`} className="flex flex-col items-center h-full">
                                <div className="flex items-center w-full">
                                    <div className="ml-3">
                                        <div className="text-sm font-medium text-gray-800">{kol.name}</div>
                                        <div className="text-xs text-gray-500">{kol.role}</div>
                                    </div>
                                    {/* Avatar */}
                                    <div className="relative flex-shrink-0">
                                        <div
                                            className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
                                            {/* Placeholder for avatar image */}
                                            <span className="text-gray-500 text-lg font-medium">
                                                {kol.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
                {Array.from({length: maxIndex + 1}).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentIndex ? "bg-gray-600" : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
            <div className="text-center mb-8 mt-10">
                <h2 className="text-2xl font-light text-gray-400 tracking-wider">CÁC KOLs XÁC NHẬN THAM GIA</h2>
            </div>

        </div>
    )
}

export default KOL;