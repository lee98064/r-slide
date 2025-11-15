import React from 'react';

export const WhatIsNLP: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-6 text-center">自然語言處理 (NLP)</h1>
      <p className="text-slate-300 max-w-4xl text-center text-xl mb-12">
        NLP 的挑戰，在於讓機器不只辨識「文字」，更能理解「語義」。
      </p>
      
      <div className="flex items-center justify-center gap-12 w-full max-w-4xl">
        <div className="text-center">
            <i className="fa-solid fa-user text-8xl text-slate-500 mb-4"></i>
            <p className="text-2xl text-white">人類語言</p>
        </div>
        <div className="flex flex-col items-center">
            <i className="fa-solid fa-arrow-right-long text-5xl text-sky-500 animate-pulse"></i>
            <span className="mt-4 px-4 py-2 bg-sky-500/20 text-sky-300 rounded-md">NLP</span>
            <i className="fa-solid fa-arrow-left-long text-5xl text-sky-500 mt-4 animate-pulse"></i>
        </div>
        <div className="text-center">
            <i className="fa-solid fa-robot text-8xl text-slate-500 mb-4"></i>
            <p className="text-2xl text-white">機器理解</p>
        </div>
      </div>

      <p className="mt-12 text-slate-400 max-w-3xl text-center">
        目標是使機器能夠理解、詮釋並生成人類語言，是推動 AI 智慧化發展的核心目標。
      </p>
    </div>
  );
};