import React from 'react';

export const TokenizationDetails: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10 text-left">
      <h1 className="text-5xl font-bold text-sky-400 mb-6 self-start">Token 的不同切法</h1>
      <div className="text-xl text-slate-300 max-w-6xl space-y-4 w-full">
        <div className="flex gap-4 mt-4 text-lg">
            <div className="bg-slate-700 p-4 rounded-lg flex-1">
                <h3 className="text-2xl font-bold text-sky-300 mb-2">詞級 (Word)</h3>
                <p>按詞切分，但無法處理新詞 (OOV)。</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg flex-1">
                <h3 className="text-2xl font-bold text-sky-300 mb-2">字元級 (Character)</h3>
                <p>切到最細，但序列長、破壞語義。</p>
            </div>
        </div>
        <div className="bg-slate-700 p-6 rounded-lg mt-4 w-full">
            <h3 className="text-2xl font-bold text-green-400 mb-2">子詞級 (Subword) - 當前主流</h3>
            <p>兼顧兩者優點：常見詞保留，罕見詞拆開。如 <code className="text-yellow-300">unbelievable</code> → <code className="text-yellow-300">un</code>, <code className="text-yellow-300">believe</code>, <code className="text-yellow-300">able</code>。</p>
            <p className="mt-3"><span className="font-bold text-sky-300">BPE (Byte Pair Encoding)</span> 是實現子詞切分的常用方法，它透過統計不斷合併高頻字元對，來自動學習出一個「子詞字典」。</p>
        </div>
        <div className="bg-red-900 bg-opacity-30 p-4 rounded-lg mt-4">
            <h3 className="text-2xl text-red-400 mb-2">中文的挑戰</h3>
            <p className="text-lg">
                通用模型常因編碼問題，導致中文的 Token 數遠多於同等長度的英文，成本更高。因此需要專為中文優化的 Tokenizer。
            </p>
        </div>
      </div>
    </div>
  );
};
