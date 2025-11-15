import React from 'react';

export const Conclusion: React.FC = () => {
  return (
    <div className="bg-slate-900 h-full w-full flex flex-col items-center justify-center p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-700/[0.1] bg-[length:30px_30px]"></div>
        <div 
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-sky-500 rounded-full opacity-20 blur-3xl"
        ></div>
        <div 
            className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"
        ></div>

      <div className="text-center relative z-10 max-w-4xl">
        <h1 className="text-5xl font-bold text-white mb-8">總結</h1>
        <ul className="text-xl text-slate-300 space-y-4 text-left list-disc list-inside">
            <li>
                <strong>Embedding</strong> 是將語言轉化為數學的橋樑，讓電腦能夠理解語義關係。
            </li>
            <li>
                <strong>Transformer</strong> 的<strong>自注意力機制</strong>是現代 LLM 的核心，使其能夠理解複雜的上下文。
            </li>
            <li>
                <strong>解碼策略 (Decoding)</strong> 如 Temperature 和 Top-P，讓我們能控制模型輸出的創造性與確定性。
            </li>
            <li>
                <strong>提示技巧 (Prompting)</strong> 很重要，給予清晰、正面的指令能更好地引導模型。
            </li>
            <li>
                <strong>幻覺</strong> 是 LLM 的內在特性，雖然無法完全消除，但可以透過 RAG 等技術有效緩解。
            </li>
        </ul>
        <p className="mt-10 text-slate-400 text-lg">
            理解這些核心原理，是駕馭和應用大型語言模型的關鍵第一步。
        </p>
      </div>
    </div>
  );
};
