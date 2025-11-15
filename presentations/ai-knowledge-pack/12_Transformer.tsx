import React from 'react';

const Block: React.FC<{ title: string; color: string; children: React.ReactNode }> = ({ title, color, children }) => (
    <div className={`border-2 border-${color}-500 bg-${color}-500/20 p-6 rounded-lg text-center`}>
        <h3 className={`text-2xl font-bold text-${color}-300 mb-4`}>{title}</h3>
        <div className="space-y-2">{children}</div>
    </div>
);

export const Transformer: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-4 text-center">Transformer 大解密</h1>
      <p className="text-slate-300 max-w-4xl text-center mb-12">
        Transformer 架構於 2017 年問世，徹底改變了 NLP 領域，是現代大型語言模型 (GPT, BERT) 的核心基礎。
      </p>
      <div className="w-full max-w-5xl flex items-center justify-center gap-8">
          <div className="text-center">
              <p className="text-lg text-white font-mono mb-2">"Are you OK?"</p>
              <i className="fa-solid fa-arrow-down text-2xl text-slate-500"></i>
          </div>
          <Block title="編碼器 (Encoder)" color="blue">
              <p>理解輸入句子的語義結構</p>
              <div className="font-semibold text-white/80 mt-2">自注意力機制 (Self-Attention)</div>
          </Block>
          <i className="fa-solid fa-arrow-right text-4xl text-slate-600"></i>
          <Block title="解碼器 (Decoder)" color="green">
              <p>根據已理解的語義逐步生成輸出</p>
               <div className="font-semibold text-white/80 mt-2">遮罩自注意力機制</div>
          </Block>
          <div className="text-center">
            <i className="fa-solid fa-arrow-up text-2xl text-slate-500"></i>
            <p className="text-lg text-white font-mono mt-2">"你好嗎？"</p>
          </div>
      </div>
       <p className="mt-12 text-slate-400 max-w-3xl text-center">
        關鍵創新：完全拋棄 RNN 的循環結構，僅依賴「自注意力機制」，使其能夠並行運算，大幅提升訓練效率與處理長距離依賴的能力。
      </p>
    </div>
  );
};