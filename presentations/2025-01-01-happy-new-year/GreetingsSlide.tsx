
import React from 'react';

const WishCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-lg text-center border border-slate-700">
    <i className={`fa-solid ${icon} text-5xl text-amber-300 mb-4`}></i>
    <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
    <p className="text-slate-300">{children}</p>
  </div>
);

export const GreetingsSlide: React.FC = () => {
  return (
    <div 
      className="h-full w-full flex flex-col items-center justify-center p-10 text-white relative bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/celebration/1280/720)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center w-full max-w-5xl">
        <h1 className="text-5xl font-bold mb-10">Wishes for the New Year</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WishCard icon="fa-heart" title="健康平安">
            願您和您的家人在新的一年裡身體健康，萬事如意。
          </WishCard>
          <WishCard icon="fa-briefcase" title="事業順利">
            祝您事業蒸蒸日上，財源廣進，步步高升。
          </WishCard>
          <WishCard icon="fa-face-smile" title="笑口常開">
            希望您每天都充滿陽光與歡笑，幸福美滿。
          </WishCard>
        </div>
      </div>
    </div>
  );
};
