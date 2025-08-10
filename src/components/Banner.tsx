import React from "react";

const Logo = ({
                  src,
                  alt,
                  className = "h-10 sm:h-12",
              }: {
    src: string;
    alt: string;
    className?: string;
}) => (
    <img
        src={src}
        alt={alt}
        className={`${className} object-contain`}
        loading="lazy"
    />
);

const SponsorsSection: React.FC = () => {
    return (
        <section className=" text-white">
            <div className="px-4 sm:px-6 py-10 sm:py-14 space-y-10 sm:space-y-14">
                {/* Hàng 1: Chủ trì | Bảo trợ | Phối hợp | Hỗ trợ tài chính */}
                {/* Giữ nguyên 4 cột trên laptop */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Đơn vị chủ trì */}
                    <div className="text-center space-y-4">
                        <p className="text-[16px] font-bold">ĐƠN VỊ CHỦ TRÌ</p>
                        <div className="flex items-center justify-center">
                            <Logo src="/images/img_13.png" alt="Đơn vị chủ trì" className="h-7 sm:h-9" />
                        </div>
                    </div>

                    {/* Đơn vị bảo trợ */}
                    <div className="text-center space-y-4">
                        <p className="text-[16px] font-bold">ĐƠN VỊ BẢO TRỢ</p>
                        <div className="text-base sm:text-lg font-medium">Cục A05</div>
                    </div>

                    {/* Đơn vị phối hợp tổ chức */}
                    <div className="text-center space-y-4">
                        <p className="text-[16px] font-bold">ĐƠN VỊ PHỐI HỢP TỔ CHỨC</p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Logo src="/images/img_14.png" alt="Đơn vị phối hợp 1" className="h-5 sm:h-7" />
                            <Logo src="/images/img_15.png" alt="Đơn vị phối hợp 2" className="h-5 sm:h-7" />
                        </div>
                    </div>

                    {/* Đơn vị hỗ trợ tài chính */}
                    <div className="text-center space-y-4">
                        <p className="text-[16px] font-bold">ĐƠN VỊ HỖ TRỢ TÀI CHÍNH</p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Logo src="/images/img_16.png" alt="Đơn vị tài trợ chính 1" className="h-5 sm:h-7" />
                            <Logo src="/images/img_17.png" alt="Đơn vị tài trợ chính 2" className="h-5 sm:h-7" />
                        </div>
                    </div>
                </div>

                {/* Hàng 3: Đơn vị bảo trợ */}
                {/* Desktop: giữ nguyên top + margin trái/phải như bản cũ */}
                {/* Mobile: bỏ offset để không vỡ layout */}
                <div className="text-center space-y-4 relative top-0 md:top-[70px]">
                    <p className="text-[16px] font-bold">ĐƠN VỊ BẢO TRỢ</p>

                    {/* Desktop: đúng 5 cột + ml/mr 250px như cũ
              Mobile: giảm cột để vừa màn, bỏ margin cứng */}
                    <div className="
              grid place-items-center gap-x-4
              px-0 mx-0
              grid-cols-2 sm:grid-cols-3 md:grid-cols-5
              md:px-8 md:mx-[250px]
            ">
                        {/* Hàng 1 */}
                        <Logo src="/images/img_18.png" alt="Đơn vị bảo trợ 1" className="h-10 sm:h-12" />
                        <Logo src="/images/img_19.png" alt="Đơn vị bảo trợ 2" className="h-7 sm:h-9" />
                        <Logo src="/images/img_20.png" alt="Đơn vị bảo trợ 3" className="h-5 sm:h-7" />
                        <Logo src="/images/img_26.png" alt="Đơn vị bảo trợ 4" className="h-9 sm:h-11" />
                        <Logo src="/images/img_22.png" alt="Đơn vị bảo trợ 5" className="h-7 sm:h-9" />

                        {/* Hàng 2 — giữ đúng thứ tự; trên md đủ 5 cột sẽ xuống hàng chuẩn */}
                        {/* Trống ở 2 đầu chỉ cần trên desktop để căn giữa chuẩn như thiết kế cũ */}
                        <div className="hidden md:block" />
                        <Logo src="/images/img_23.png" alt="Đơn vị bảo trợ 6" className="h-20 sm:h-20" />
                        <Logo src="/images/img_24.png" alt="Đơn vị bảo trợ 7" className="h-7 sm:h-9" />
                        <Logo src="/images/img_25.png" alt="Đơn vị bảo trợ 8" className="h-7 sm:h-9" />
                        <div className="hidden md:block" />
                    </div>
                </div>
            </div>

            {/* đáy bo tròn mờ */}
            <div className="h-24 w-full bg-gradient-to-b from-white/0 to-white/2" />
        </section>
    );
};

export default SponsorsSection;
