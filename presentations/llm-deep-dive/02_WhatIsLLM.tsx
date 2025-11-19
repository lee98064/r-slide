import React from 'react';

export const WhatIsLLM: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10 text-left">
      <h1 className="text-6xl font-bold text-sky-400 mb-8 self-start">什麼是大型語言模型 (LLM)？</h1>
      <div className="text-3xl text-slate-300 max-w-5xl space-y-6">
        <p>本質上，它是一個大型的 <span className="text-yellow-400">「猜猜樂」</span>與<span className="text-yellow-400">「接龍遊戲」</span>。</p>
        <p>語言模型 (Language Model) 是一種統計模型，能根據「已經看到的文字」預測「下一個最可能出現的詞」。</p>
        <div className="bg-slate-700 p-6 rounded-lg mt-6 text-2xl">
            <p className="text-slate-400">例如：</p>
            <p className="mt-2">「我今天去 ____ 吃拉麵」</p>
            <p className="mt-4">模型會根據看過的無數句子，預測空格中可能是「台北」、「公司附近」或「一家新開的店」。</p>
            <p className="mt-4 text-sky-300">這種「填空」與「接龍」的能力，就是語言模型的基礎邏輯。</p>
        </div>
      </div>
    </div>
  );
};
