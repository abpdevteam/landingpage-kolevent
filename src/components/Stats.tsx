import React, { useEffect, useMemo, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const formatNumber = (num: number): string => num.toString().padStart(2, "0");

const Item = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none">
        {formatNumber(value)}
      </div>
      <div className="mt-1 text-[10px] sm:text-xs md:text-sm text-white/90">{label}</div>
    </div>
);

const CountdownWithServices: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isOver, setIsOver] = useState(false);
  const [bgImage, setBgImage] = useState("/images/img_4.png");

  // 08:00 GMT+7, 18/08/2025
  const targetDate = useMemo(() => new Date("2025-08-18T08:00:00+07:00"), []);

  useEffect(() => {
    const tick = () => {
      const distance = targetDate.getTime() - Date.now();
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsOver(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Chọn background cho mobile/desktop (1 ảnh dùng chung cho toàn trang)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setBgImage("/images/no_text.png");
      else setBgImage("/images/img_44.png");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      // ===== WRAPPER DÙNG CHUNG 1 BACKGROUND CHO TOÀN TRANG =====
      <div
          className="relative min-h-screen w-full"
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundSize: "cover",          // phủ toàn bộ chiều cao trang khi nội dung dài
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",    // nếu muốn lặp dọc khi nội dung quá dài: đổi thành "repeat-y"
            fontFamily: "'Inter', sans-serif",
          }}
      >
        {/* Overlay cho TOÀN TRANG (nằm dưới nội dung, phủ theo chiều cao nội dung) */}
        <div className="pointer-events-none absolute inset-0 bg-black/20" />

        {/* CONTENT: flex-col để đẩy footer xuống đáy, vẫn kéo dài nếu nội dung nhiều */}
        <div className="relative z-10 flex min-h-screen w-full flex-col">
          {/* MAIN */}
          <main className="relative flex flex-col px-3 md:px-4 py-6 md:py-8 flex-grow">
            {/* Nhóm icon/overlay góc phải trên */}
            <div
                className="pointer-events-none select-none absolute top-2 right-2 md:top-4 md:right-4 flex flex-col items-center gap-3 text-center z-10 mt-10">
              <div className="flex justify-center gap-3">
                <img src="/images/img_2.png" alt="Logo 1" className="h-8 w-auto"/>
                <img src="/images/img_6.png" alt="Logo 2" className="h-8 w-auto"/>
              </div>
              <img
                  src="/images/img_45.png"
                  alt="Overlay"
                  className="w-[280px] md:w-[420px] lg:w-[500px] h-auto object-contain"
              />
              {/*<div className="flex justify-center gap-2 mt-5">*/}
              {/*  <img src="/images/img_8.png" alt="Icon 1" className="h-5 md:h-6 w-auto"/>*/}
              {/*  <img src="/images/img_9.png" alt="Icon 2" className="h-5 md:h-6 w-auto"/>*/}
              {/*  <img src="/images/img_10.png" alt="Icon 3" className="h-5 md:h-6 w-auto"/>*/}
              {/*</div>*/}
            </div>

            {/* Chừa khoảng tránh icon */}
            <div className="h-24 md:h-28 lg:h-32"/>

            {/* Tiêu đề + Countdown */}
            <div className=" flex flex-col items-center mt-[350px]">
              {/* Tiêu đề */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <img src="/images/img_1.png" alt="Left Icon" className="w-6 h-6 md:w-7 md:h-7"/>
                <div className="text-center">
                  <h3
                      className="text-base md:text-lg font-bold"
                      style={{fontFamily: "'BT Suave', sans-serif", fontWeight: 700, color: "#ffffff"}}
                  >
                    COUNTDOWN ĐẾM NGƯỢC
                  </h3>
                  <p
                      className="text-base md:text-lg"
                      style={{fontFamily: "'BT Suave', sans-serif", fontWeight: 700, color: "#ffffff"}}
                  >
                    NGÀY DIỄN RA SỰ KIỆN
                  </p>
                </div>
                <img src="/images/img_1.png" alt="Right Icon" className="w-6 h-6 md:w-7 md:h-7"/>
              </div>

              {/* Countdown box */}
              <div
                  className="rounded-xl p-3 sm:p-4 md:p-6 w-full max-w-xl border border-white/30 backdrop-blur bg-white/10">
                {!isOver ? (
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:items-center md:justify-center md:gap-6">
                      <Item value={timeLeft.days} label="Days"/>
                      <div className="hidden md:block text-2xl font-bold text-white -mt-2">:</div>
                      <Item value={timeLeft.hours} label="Hours"/>
                      <div className="hidden md:block text-2xl font-bold text-white -mt-2">:</div>
                      <Item value={timeLeft.minutes} label="Minutes"/>
                      <div className="hidden md:block text-2xl font-bold text-white -mt-2">:</div>
                      <Item value={timeLeft.seconds} label="Seconds"/>
                    </div>
                ) : (
                    <div className="text-center py-4">
                      <p className="text-xl md:text-2xl font-semibold text-white">SỰ KIỆN ĐANG DIỄN RA</p>
                    </div>
                )}
              </div>
            </div>
          </main>

          {/* FOOTER (chia sẻ cùng background vì nằm trong cùng wrapper) */}
          <footer className="px-4 py-8 md:px-6 md:py-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-3">
                <div className="text-center">
                  <h3 className="font-bold text-white/80 mb-2 text-base md:text-lg uppercase tracking-wide">
                    ĐƠN VỊ CHỦ TRÌ
                  </h3>
                  <img
                      src="/images/img_3.png"
                      alt="Hiệp Hội An Ninh Mạng Quốc Gia"
                      className="mx-auto max-h-10 object-contain"
                  />

                </div>

                <div className="text-center space-y-3">
                  {/* Tiêu đề - text đầu tiên */}
                  <h3 className="font-bold text-white/80 text-base md:text-lg uppercase tracking-wide">
                    ĐƠN VỊ BẢO TRỢ
                  </h3>

                  {/* Ảnh logo - ở giữa */}
                  <div className="flex justify-center">
                    <img
                        src="/images/img_7.png"
                        alt="Người Quan Sát"
                        className="h-8 object-contain"
                    />
                  </div>

                  {/* Mô tả - text cuối cùng */}
                  <p className="text-white/90 text-xs md:text-sm px-4">
                    A05 - Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="font-bold text-white/80 mb-2 text-base md:text-lg uppercase tracking-wide">
                    ĐƠN VỊ PHỐI HỢP TỔ CHỨC
                  </h3>
                  <div className="flex justify-center items-center gap-3">
                    <img
                        src="/images/img_14.png"
                        alt="Người Quan Sát"
                        className="h-8 object-contain"
                    />
                    <img
                        src="/images/img_15.png"
                        alt="Cyber Trust"
                        className="h-8 object-contain"
                    />
                  </div>
                </div>


                <div className="text-center">
                  <h3 className="font-bold text-white/80 mb-2 text-base md:text-lg uppercase tracking-wide">
                    ĐƠN VỊ TÀI TRỢ CHÍNH
                  </h3>
                  <div className="flex justify-center gap-3">
                    <img
                        src="/images/img_16.png"
                        alt="Logo 1"
                        className="w-20 h-9 object-contain  p-1"
                    />
                    <img
                        src="/images/img_17.png"
                        alt="Logo 2"
                        className="w-20 h-9 object-contain  p-1"
                    />
                  </div>
                </div>

              </div>
              <div className="h-2"/>
            </div>
          </footer>
          <img
              src="/images/img_47.png"
              alt="Footer decoration"
              className="w-full"
              style={{height: "100px", objectFit: "cover"}}
          />


        </div>
      </div>
  );
};

export default CountdownWithServices;
