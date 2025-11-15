import React from 'react';

export const IntroEmbeddings: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-6 text-center">電腦如何「理解」文字？</h1>
      <p className="text-slate-300 max-w-4xl text-center text-xl mb-12">
        語言對電腦來說是混沌的，首要任務是將文字轉換為可運算的數字結構。這個過程稱為「嵌入 (Embedding)」。
      </p>
      
      <div className="flex items-center justify-center gap-12 w-full max-w-5xl">
        <div className="text-center p-8 bg-slate-700/50 rounded-lg">
            <i className="fa-solid fa-font text-8xl text-slate-400 mb-4"></i>
            <p className="text-2xl text-white">文字 (Text)</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
            <i className="fa-solid fa-arrow-right-long text-5xl text-sky-500"></i>
            <span className="mt-4 px-4 py-2 bg-sky-500/20 text-sky-300 rounded-md text-lg">Embedding</span>
            <p className="text-slate-400 mt-2 text-sm">將語義轉換為座標</p>
        </div>
        
        <div className="text-center p-8 bg-slate-700/50 rounded-lg">
            <i className="fa-solid fa-vector-square text-8xl text-slate-400 mb-4"></i>
            <p className="text-2xl text-white">向量 (Vector)</p>
            <p className="font-mono text-xs mt-2 text-amber-300">[0.12, -0.45, 0.89, ...]</p>
        </div>
      </div>

      <p className="mt-12 text-slate-400 max-w-3xl text-center">
        可以把 Embedding 想像成一個巨大的「語義地圖」，語義相近的詞會被放在彼此靠近的位置。
      </p>
    </div>
  );
};