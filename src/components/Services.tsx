import React from "react";

const Services: React.FC = () => {
  return (
      <footer className=" py-12 px-6">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Đơn vị chủ trì */}
            <div className="text-center">
              <h3 className="font-bold text-gray-500 mb-3 text-xl uppercase tracking-wide">ĐƠN VỊ CHỦ TRÌ</h3>
              <p className=" text-sm leading-relaxed">
                Hiệp Hội An Ninh
                <br />
                Mạng Quốc Gia
              </p>
            </div>

            {/* Đơn vị bảo trợ */}
            <div className="text-center">
              <h3 className="font-bold text-gray-500 mb-3 text-xl uppercase tracking-wide">ĐƠN VỊ BẢO TRỢ</h3>
              <p className=" text-sm">Cục A05</p>
            </div>

            {/* Đơn vị phối hợp tổ chức */}
            <div className="text-center ">
              <h3 className="font-bold text-gray-500 mb-3 text-xl uppercase tracking-wide">ĐƠN VỊ PHỐI HỢP TỔ CHỨC</h3>
              <p className="text-sm">Người Quan Sát x Cyber Trust</p>
            </div>

            {/* Đơn vị tài trợ chính */}
            <div className="text-center ">
              <h3 className="font-bold text-gray-500 mb-3 text-xl uppercase tracking-wide">ĐƠN VỊ TÀI TRỢ CHÍNH</h3>
              <div className="flex justify-center  gap-4">
                <div className="w-16 h-8 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">Logo</span>
                </div>
                <div className="w-16 h-8 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">Logo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
export default Services;