"use client"

import React, { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 30)
  targetDate.setHours(18, 18, 18)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0")
  }

  return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">
        {/* Container với padding trái để căn chỉnh toàn bộ nội dung */}
        <div className="w-full max-w-4xl pl-8 md:pl-12 lg:pl-16">
          {/* Header - Căn trái cùng với các tiêu đề khác */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl text-gray-800 mb-4 text-left">HỘI NGHỊ</h1>

          {/* Main Title */}
          <div className="mb-8 text-left">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
              KOL <span className="text-2xl md:text-3xl font-normal">với</span> KỶ NGUYÊN
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
              VƯƠNG MÌNH <span className="text-2xl md:text-3xl font-normal">CỦA DÂN TỘC</span>
            </h2>
          </div>

          {/* Countdown Section - Vẫn giữ nguyên căn giữa */}
          <div className="space-y-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black">COUNTDOWN ĐẾM NGƯỢC</h3>
            <p className="text-lg md:text-xl text-gray-700">NGÀY DIỄN RA SỰ KIỆN</p>

            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 w-full border border-gray-300">
              <div className="flex items-center justify-center gap-2 md:gap-8">
                {/* Days */}
                <div className="text-center mt-10 pb-[10px]">
                  <div className="text-5xl md:text-7xl font-bold text-black">
                    {formatNumber(timeLeft.days)}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">Days</div>
                </div>

                <div className="text-5xl md:text-7xl font-bold text-black">:</div>

                {/* Hours */}
                <div className="text-center mt-10 pb-[10px]">
                  <div className="text-5xl md:text-7xl font-bold text-black">
                    {formatNumber(timeLeft.hours)}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">Hours</div>
                </div>

                <div className="text-5xl md:text-7xl font-bold text-black">:</div>

                {/* Minutes */}
                <div className="text-center mt-10 pb-[10px]">
                  <div className="text-5xl md:text-7xl font-bold text-black">
                    {formatNumber(timeLeft.minutes)}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">Minutes</div>
                </div>

                <div className="text-5xl md:text-7xl font-bold text-black">:</div>

                {/* Seconds */}
                <div className="text-center mt-10 pb-[10px]">
                  <div className="text-5xl md:text-7xl font-bold text-black">
                    {formatNumber(timeLeft.seconds)}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default CountdownPage