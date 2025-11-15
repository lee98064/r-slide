import React from 'react';

const NNCard: React.FC<{ title: string; desc: string; icon: string; useCase: string; }> = ({ title, desc, icon, useCase }) => (
    <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 text-center h-full transition-all hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10">
        <i className={`fa-solid ${icon} text-5xl text-sky-400 mb-4`}></i>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-slate-400 mt-2 mb-4">{desc}</p>
        <p className="text-amber-400 font-semibold bg-amber-500/10 px-3 py-1 rounded-full inline-block">{useCase}</p>
    </div>
);

export const NNKings: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">神經網路的三大天王</h1>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <NNCard 
            title="FFNN"
            desc="前饋神經網路，最基本的類型，資訊單向流動。"
            icon="fa-arrow-right-long"
            useCase="分類、回歸"
        />
        <NNCard 
            title="CNN"
            desc="卷積神經網路，專為處理網格狀數據設計，如圖像。"
            icon="fa-border-all"
            useCase="圖像識別"
        />
        <NNCard 
            title="RNN"
            desc="循環神經網路，具有「記憶」，能處理序列數據。"
            icon="fa-repeat"
            useCase="語言模型"
        />
      </div>
    </div>
  );
};