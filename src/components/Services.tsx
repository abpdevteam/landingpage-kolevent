import React from 'react';

const Services: React.FC = () => {
  return (
      <div className="w-full  bg-gray-50">
        <div className="w-full  space-y-12">
          {/* Phần header và đơn vị tổ chức */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Đơn vị chủ trì */}
            <div className="flex-1 text-center">
              <h2 className="text-xl font-semibold text-gray-700 mt-2">ĐƠN VỊ CHỦ TRÌ</h2>
              <div className="mt-6 flex justify-center">
                <div className="flex justify-center">
                  <h1 className="text-2xl font-bold text-gray-800 mt-[50px] mr-[20px]">
                    Hiệp hội an ninh <br/> mạng quốc gia
                  </h1>
                </div>
                <div
                    className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
                  [LOGO CHỦ TRÌ]
                </div>
              </div>
            </div>

            {/* Đơn vị phối hợp */}
            <div className="flex-1 text-center">
              <h3 className="text-xl font-semibold text-gray-700">ĐƠN VỊ PHỐI HỢP TỔ CHỨC</h3>
              <div className="mt-6 flex justify-center gap-8">
                <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
                  [LOGO 1]
                </div>
                <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
                  [LOGO 2]
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full h-40 flex items-center justify-center text-gray-400 bg-gray-200">
              [ARTWORK]
            </div>
          </div>
        </div>
      </div>
  );
};

export default Services;