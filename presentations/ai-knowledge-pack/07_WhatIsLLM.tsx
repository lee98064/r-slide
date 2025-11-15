import React from 'react';

export const WhatIsLLM: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-6 text-center">什麼是大型語言模型 (LLM)？</h1>
      <p className="text-slate-300 max-w-4xl text-center text-xl mb-12">
        核心概念是：從「猜下一個字」開始。LLM 是一種統計模型，能根據輸入文字預測下一個最可能的詞。
      </p>
      
      <div className="bg-slate-900/50 p-12 rounded-lg border border-slate-700 text-center w-full max-w-4xl">
        <h2 className="text-2xl text-slate-400 mb-8">語言模型的基本任務，就是根據上下文「猜」出接下來的詞：</h2>
        <div className="text-4xl font-mono p-4 bg-slate-800 rounded-md inline-block">
          <span>我今天去</span>
          <span className="inline-block bg-sky-500/20 text-sky-300 border-2 border-sky-400 rounded-md px-4 py-2 mx-2 animate-predict-word">台北</span>
          <span>吃拉麵</span>
        </div>
      </div>

      <p className="mt-12 text-slate-400 max-w-3xl text-center">
        當模型變得極為龐大，擁有數千億個參數，並學習了整個網路的文本後，就成為了「大型語言模型」。它不僅能猜字，還能寫文章、生成程式碼，甚至進行推理。
      </p>
        <style>{`
            @keyframes predict-word {
                0%, 100% { content: '台北'; }
                33% { content: '新竹'; }
                66% { content: '公司'; }
            }
            .animate-predict-word::after {
                content: '台北';
                animation: predict-word 4s infinite;
            }
             .animate-predict-word {
                color: transparent;
             }
        `}</style>
    </div>
  );
};