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

  // Target date: August 18, 2025 at 8:00 AM
  const targetDate = new Date(2025, 7, 18, 8, 0, 0)

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
      <>
        <div
            className="min-h-screen flex flex-col items-center justify-between px-4 py-8"
            style={{
              backgroundImage: "url('/images/img.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              fontFamily: "'Inter', sans-serif"
            }}
        >
          {/* Empty space to push content down */}
          <div></div>

          {/* Countdown Section at the bottom */}
          <div className="flex flex-col items-center w-full mt-[30px]">
            {/* Header section */}
            <div className="space-y-4 text-center mb-8">
              <div className="flex items-center justify-center">
                <img
                    src="/images/img_1.png"
                    alt="Left Icon"
                    style={{width: '38px', height: '39px', marginRight: '16px'}}
                />
                <div>
                  <h3
                      className="text-2xl md:text-3xl font-bold text-white"
                      style={{
                        fontFamily: "'BT Suave', sans-serif",
                        fontWeight: 700,
                        fontStyle: 'normal'
                      }}
                  >
                    COUNTDOWN ĐẾM NGƯỢC
                  </h3>
                  <p
                      className="text-lg md:text-3xl text-white"
                      style={{
                        fontFamily: "'BT Suave', sans-serif",
                        fontWeight: 700,
                        fontStyle: 'normal'
                      }}
                  >
                    NGÀY DIỄN RA SỰ KIỆN
                  </p>
                </div>
                <img
                    src="/images/img_1.png"
                    alt="Right Icon"
                    style={{width: '38px', height: '39px', marginLeft: '16px'}}
                />
              </div>
            </div>

            {/* Countdown box */}
            <div className="rounded-3xl p-6 md:p-8 w-full max-w-2xl border">
              <div className="flex items-center justify-center gap-2 md:gap-8">
                {/* Days */}
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-white" style={{fontFamily: "'Inter', sans-serif"}}>
                    {formatNumber(timeLeft.days)}
                  </div>
                  <div className="text-sm md:text-base text-white" style={{fontFamily: "'Inter', sans-serif"}}>Days</div>
                </div>

                <div className="text-4xl md:text-6xl font-bold text-white" style={{fontFamily: "'Inter', sans-serif"}}>:</div>

                {/* Hours */}
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-white" style={{fontFamily: "'Inter', sans-serif"}}>
                    {formatNumber(timeLeft.hours)}
                  </div>
                  <div className="text-sm md:text-base text-white" style={{fontFamily: "'Inter', sans-serif"}}>Hours</div>
                </div>

                <div className="text-4xl md:text-6xl font-bold text-white" style={{fontFamily: "'Inter', sans-serif"}}>:</div>

                {/* Minutes */}
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-white" style={{fontFamily: "'Inter', sans-serif"}}>
                    {formatNumber(timeLeft.minutes)}
                  </div>
                  <div className="text-sm md:text-base text-white" style={{fontFamily: "'Inter', sans-serif"}}>Minutes</div>
                </div>

                <div className="text-4xl md:text-6xl font-bold text-white" style={{fontFamily: "'Inter', sans-serif"}}>:</div>

                {/* Seconds */}
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-white" style={{fontFamily: "'Inter', sans-serif"}}>
                    {formatNumber(timeLeft.seconds)}
                  </div>
                  <div className="text-sm md:text-base text-white" style={{fontFamily: "'Inter', sans-serif"}}>Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default CountdownPage