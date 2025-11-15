
import React from 'react';

export const TitleSlide: React.FC = () => {
  return (
    <div 
      className="h-full w-full flex flex-col items-center justify-center p-10 text-white relative bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/fireworks/1280/720)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-amber-300" style={{ textShadow: '0 0 15px rgba(252, 211, 77, 0.7)' }}>
          新年快樂
        </h1>
        <p className="mt-4 text-3xl md:text-4xl text-slate-200 font-light">
          Happy New Year 2025
        </p>
      </div>
    </div>
  );
};
