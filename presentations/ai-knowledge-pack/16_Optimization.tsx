import React from 'react';

const TechniqueCard: React.FC<{ title: string, icon: string, children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 h-full text-center transform transition-transform hover:scale-105">
        <i className={`fa-solid ${icon} text-5xl text-sky-400 mb-4`}></i>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-slate-300 mt-2">{children}</p>
    </div>
);

export const Optimization: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-4 text-center">讓大模型變輕巧的秘密武器</h1>
      <p className="text-slate-300 max-w-4xl text-center mb-12">
        隨著模型規模擴大，部署成本與運算需求也隨之暴增。模型壓縮技術是讓大模型落地的關鍵。
      </p>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <TechniqueCard title="剪枝 (Pruning)" icon="fa-tree">
            移除神經網路中不重要或影響力低的參數，如同修剪樹枝。
        </TechniqueCard>
        <TechniqueCard title="量化 (Quantization)" icon="fa-down-left-and-up-right-to-center">
            降低模型參數的數值精度 (如從 32 位元浮點數降至 8 位元整數)，減少記憶體用量。
        </TechniqueCard>
        <TechniqueCard title="知識蒸餾 (Knowledge Distillation)" icon="fa-flask-vial">
            用一個大型、性能好的「教師模型」來教導一個小型的「學生模型」，讓小模型學會大模型的智慧。
        </TechniqueCard>
      </div>
    </div>
  );
};