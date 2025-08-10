// components/LandingPage.tsx
import React from 'react';

const LandingPage: React.FC = () => {
  return (
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Header Section */}
        <HeaderSection />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <CountdownSection />
          <Divider />
          <SpecialSection />
          <AllianceIntroSection />
          <EstablishmentSection />
          <VisionToActionSection />
          <InfluenceSection />
        </div>
      </div>
  );
};

const HeaderSection: React.FC = () => {
  return (
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">KOLK KÝ NGUYỄN VƯƠN MINH</h1>
          <p className="text-xl mt-2">COUNTRYING SẢN NGƯỜC NĂM? DẪN ĐỀ XUÂN</p>
        </div>
      </header>
  );
};

const CountdownSection: React.FC = () => {
  return (
      <div className="flex justify-center my-8">
        <div className="text-4xl font-mono space-x-4">
          <span className="bg-gray-200 px-4 py-2 rounded">30</span>
          <span>:</span>
          <span className="bg-gray-200 px-4 py-2 rounded">18</span>
          <span>:</span>
          <span className="bg-gray-200 px-4 py-2 rounded">18</span>
          <span>:</span>
          <span className="bg-gray-200 px-4 py-2 rounded">18</span>
        </div>
      </div>
  );
};

const Divider: React.FC = () => {
  return <hr className="my-8 border-t-2 border-gray-300" />;
};

const SpecialSection: React.FC = () => {
  return (
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">CHUYÊN PÉ</h2>
        <div className="flex space-x-8">
          <div className="flex-1 bg-gray-100 p-4 rounded">
            <h3 className="font-semibold">THẢO LUẬN</h3>
          </div>
          <div className="flex-1 bg-gray-100 p-4 rounded text-center">
            <span className="text-2xl font-bold">01</span>
          </div>
          <div className="flex-1 bg-gray-100 p-4 rounded text-center">
            <span className="text-2xl font-bold">02</span>
          </div>
        </div>
      </section>
  );
};

const AllianceIntroSection: React.FC = () => {
  return (
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">LIÊN MINH NIỀM TIN SỐ</h2>
        <p className="text-lg">GIỚI THIỆU VỀ LIÊN MINH</p>
      </section>
  );
};

const EstablishmentSection: React.FC = () => {
  return (
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">LỰ TO THÀNH LẬP</h2>
        <ul className="list-disc pl-6">
          <li>LIÊN MINH</li>
        </ul>
      </section>
  );
};

const VisionToActionSection: React.FC = () => {
  return (
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">TUTTÁM NHÍN ĐẾN</h2>
        <ul className="list-disc pl-6">
          <li>HÀNH ĐỘNG</li>
        </ul>
      </section>
  );
};

const InfluenceSection: React.FC = () => {
  return (
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">LIÊN MINH NIỀM TIN SỐ</h2>
        <p className="text-lg">ÁNH HƯỚNG TRÚCH NHẬN, CỦA ĐỐI TIÊN TIN</p>
      </section>
  );
};

export default LandingPage;