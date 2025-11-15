import React from 'react';

export const IntroTransformer: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-6 text-center">解決方案：Transformer 與自注意力機制</h1>
      <p className="text-slate-300 max-w-4xl text-center text-xl mb-12">
        Transformer 架構的核心創新「自注意力機制 (Self-Attention)」讓模型在處理每個詞時，都能「關註」到句子中所有其他的詞。
      </p>
      
      <div className="w-full max-w-5xl bg-slate-900/50 p-8 rounded-lg border border-slate-700">
        <p className="text-2xl text-center text-slate-300 leading-relaxed">
            "The <span className="text-amber-400">animal</span> didn't cross the street because <span className="font-bold text-sky-300 text-3xl underline decoration-sky-400 decoration-2 underline-offset-4 animate-attention">it</span> was too tired."
        </p>
        
        <div className="mt-8 flex items-center justify-center gap-4 text-slate-400">
            <span>"it" 指的是什麼？</span>
            <i className="fa-solid fa-arrow-right text-2xl"></i>
            <span className="bg-sky-500/20 text-sky-300 px-3 py-1 rounded-md">Self-Attention 計算關聯性</span>
            <i className="fa-solid fa-arrow-right text-2xl"></i>
            <span className="text-amber-400 font-bold">"animal"</span>
        </div>
      </div>
      
      <p className="mt-12 text-slate-400 max-w-3xl text-center">
        這使得模型能夠動態地根據上下文調整每個詞的 Embedding，完美解決了多義詞問題，並能捕捉長距離的語義依賴。
      </p>

      <style>{`
        @keyframes attention {
            0%, 100% { box-shadow: 0 0 20px 5px rgba(56, 189, 248, 0); }
            50% { box-shadow: 0 0 30px 10px rgba(56, 189, 248, 0.4); }
        }
        .animate-attention {
            animation: attention 2.5s ease-in-out infinite;
            border-radius: 8px; /* To make shadow look better */
        }
      `}</style>
    </div>
  );
};