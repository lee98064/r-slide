import React from 'react';

const ModelCard: React.FC<{ title: string, arch: string, desc: string, bestFor: string, color: string }> = ({ title, arch, desc, bestFor, color }) => (
    <div className={`bg-slate-900/50 p-8 rounded-lg border-2 border-${color}-500/50 w-full`}>
        <h2 className={`text-4xl font-bold text-${color}-400 mb-4`}>{title}</h2>
        <p className={`font-semibold text-lg text-white mb-4 bg-${color}-500/20 inline-block px-3 py-1 rounded-md`}>{arch}</p>
        <p className="text-slate-300 mb-4">{desc}</p>
        <p className="text-slate-300"><strong className="text-white">擅長:</strong> {bestFor}</p>
    </div>
);

export const BERTvsGPT: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">兩大流派: BERT vs GPT</h1>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch justify-center gap-10">
        <ModelCard 
            title="BERT"
            arch="雙向 Encoder 架構"
            desc="在預訓練時同時考慮上下文的左右兩邊資訊，具備更完整的語義理解能力。"
            bestFor="語義理解、分類、問答、實體辨識"
            color="blue"
        />
        <ModelCard 
            title="GPT"
            arch="單向 Decoder 架構"
            desc="從左至右逐詞預測下一個詞，專注於語言的連貫性與生成能力。"
            bestFor="文本生成、對話系統、文章撰寫"
            color="green"
        />
      </div>
      <p className="mt-12 text-slate-400 max-w-3xl text-center">
        簡單來說：BERT 擅長做「克漏字填充」，而 GPT 擅長做「文字接龍」。
      </p>
    </div>
  );
};