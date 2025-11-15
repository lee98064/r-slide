import React from 'react';

const Step: React.FC<{ title: string; example: string; icon: string }> = ({ title, example, icon }) => (
    <div className="text-center">
        <div className="p-6 bg-slate-700 rounded-lg border border-slate-600 mb-4">
            <i className={`fa-solid ${icon} text-3xl text-sky-400`}></i>
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="font-mono text-amber-300 bg-slate-900/50 p-2 rounded-md mt-2 text-sm">{example}</p>
    </div>
);

export const TextVectorization: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-4 text-center">文字的數值化</h1>
      <p className="text-slate-300 max-w-4xl text-center mb-12">
        機器無法直接處理文字，必須將文字轉換為可計算的數字向量 (Vector)。
      </p>
      <div className="w-full max-w-6xl flex items-center justify-center gap-8">
        <Step title="1. 原始文本" example="AI is fun!" icon="fa-font" />
        <i className="fa-solid fa-arrow-right text-3xl text-slate-600 mt-[-50px]"></i>
        <Step title="2. 斷詞 (Tokenization)" example="['AI', 'is', 'fun', '!']" icon="fa-scissors" />
        <i className="fa-solid fa-arrow-right text-3xl text-slate-600 mt-[-50px]"></i>
        <Step title="3. 向量化 (Vectorization)" example="[0.1, 0.9, 0.4, ...]" icon="fa-vector-square" />
      </div>
      <div className="mt-12 w-full max-w-4xl flex gap-8">
        <div className="bg-slate-900/50 p-6 rounded-lg w-1/2">
            <h3 className="text-xl font-bold text-white mb-2">One-hot Encoding</h3>
            <p className="text-slate-400">簡單但維度高、無法表示語義關係。</p>
            <p className="font-mono text-xs mt-2 text-green-400">[0, 0, 1, 0, ... 0]</p>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-lg w-1/2 border-2 border-sky-500">
            <h3 className="text-xl font-bold text-white mb-2">詞嵌入 (Word Embedding)</h3>
            <p className="text-slate-300">將詞語壓縮至低維度稠密向量，能捕捉語義關係。</p>
            <p className="font-mono text-xs mt-2 text-sky-300">[0.23, -0.45, 0.81, ...]</p>
        </div>
      </div>
    </div>
  );
};