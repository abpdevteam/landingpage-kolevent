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

  // Target: 18/08/2025 08:00 GMT+7
  const targetDate = new Date("2025-08-18T08:00:00+07:00")

  useEffect(() => {
    const tick = () => {
      const distance = targetDate.getTime() - Date.now()

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }

    tick() // chạy ngay lần đầu
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number): string => num.toString().padStart(2, "0")

  const Item = ({ value, label }: { value: number; label: string }) => (
      <div className="text-center">
        <div className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-white leading-none">
          {formatNumber(value)}
        </div>
        <div className="mt-1 text-xs sm:text-sm md:text-base text-white/90">{label}</div>
      </div>
  )

  return (
      <>
        <div
            className="min-h-screen flex flex-col items-center justify-between px-4 py-8"
            style={{
              backgroundImage: "url('/images/img_4.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              fontFamily: "'Inter', sans-serif",
            }}
        >
          <div></div>

          <div className="flex flex-col items-center w-full mt-[30px]">
            {/* Header */}
            <div className="space-y-4 text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-4">
                <img
                    src="/images/img_1.png"
                    alt="Left Icon"
                    className="w-8 h-8 sm:w-9 sm:h-9"
                />
                <div>
                  <h3
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                      style={{fontFamily: "'BT Suave', sans-serif", fontWeight: 700, fontStyle: "normal"}}
                  >
                    COUNTDOWN ĐẾM NGƯỢC
                  </h3>
                  <p
                      className="text-lg sm:text-2xl md:text-3xl text-white"
                      style={{fontFamily: "'BT Suave', sans-serif", fontWeight: 700, fontStyle: "normal"}}
                  >
                    NGÀY DIỄN RA SỰ KIỆN
                  </p>
                </div>
                <img
                    src="/images/img_1.png"
                    alt="Right Icon"
                    className="w-8 h-8 sm:w-9 sm:h-9"
                />
              </div>
            </div>

            {/* Countdown box */}
            <div
                className="rounded-3xl p-4 sm:p-6 md:p-8 w-full max-w-2xl border border-white/30 bg-black/20 backdrop-blur">
              {/* Mobile: grid 2x2 ; md+: hàng ngang có dấu : */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:flex md:items-center md:justify-center md:gap-8">
                <Item value={timeLeft.days} label="Days"/>

                {/* Dấu : chỉ hiện từ md trở lên */}
                <div className="hidden md:block text-5xl md:text-6xl font-bold text-white -mt-8">:</div>

                <Item value={timeLeft.hours} label="Hours"/>

                <div className="hidden md:block text-5xl md:text-6xl font-bold text-white -mt-8">:</div>

                <Item value={timeLeft.minutes} label="Minutes"/>

                <div className="hidden md:block text-5xl md:text-6xl font-bold text-white -mt-8">:</div>

                <Item value={timeLeft.seconds} label="Seconds"/>
              </div>
            </div>

          </div>
        </div>
      </>
  )
}

export default CountdownPage
