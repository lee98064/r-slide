import React from 'react';

export const TitleSlide: React.FC = () => {
  return (
    <div 
      className="h-full w-full flex flex-col items-center justify-center p-10 text-white relative bg-slate-900"
    >
        <div className="absolute inset-0 bg-grid-slate-700/[0.1] bg-[length:20px_20px] [mask-image:linear-gradient(to_bottom,white_30%,transparent_100%)]"></div>
        <div className="text-center relative z-10">
            <i className="fa-solid fa-book-open-reader text-7xl text-sky-400 mb-6"></i>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white">
                Hexo 完整教學
            </h1>
            <p className="mt-6 text-2xl md:text-3xl text-slate-300 font-light max-w-3xl">
                從零到一，學習如何安裝、設定、撰寫、部署，並管理您的個人部落格。
            </p>
        </div>
    </div>
  );
};
