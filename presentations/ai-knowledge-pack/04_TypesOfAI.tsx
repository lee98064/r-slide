import React from 'react';

const AICard: React.FC<{ title: string, subtitle: string, icon: string, children: React.ReactNode }> = ({ title, subtitle, icon, children }) => (
    <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 h-full transform transition-transform hover:-translate-y-2 hover:border-sky-500">
        <div className="flex items-center gap-4 mb-4">
            <i className={`fa-solid ${icon} text-4xl text-sky-400`}></i>
            <div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-sky-400/80">{subtitle}</p>
            </div>
        </div>
        <div className="text-slate-300">
            {children}
        </div>
    </div>
);

export const TypesOfAI: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">三種人工智慧</h1>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <AICard title="狹義人工智慧" subtitle="Narrow AI / Weak AI" icon="fa-bullseye">
            <p>目前最常見的 AI 型態，被設計來執行特定任務。</p>
            <p className="mt-2 text-slate-400"><strong>範例:</strong> 語音助理 (Siri, Google Assistant)、影像辨識、推薦系統。</p>
        </AICard>
        <AICard title="通用人工智慧" subtitle="General AI / Strong AI" icon="fa-brain">
            <p>目前仍處於研究與發展階段，目標是打造具備與人類相當智慧的 AI 系統。</p>
             <p className="mt-2 text-slate-400"><strong>範例:</strong> 科幻電影中的 AI 系統，如《雲端情人》中的 Samantha。</p>
        </AICard>
        <AICard title="超級人工智慧" subtitle="Super AI" icon="fa-infinity">
            <p>超越人類智慧水準的人工智慧，在各方面表現遠勝人類，目前尚屬理論階段。</p>
            <p className="mt-2 text-slate-400"><strong>範例:</strong> 科幻電影中的智慧體，如《復仇者聯盟》中的 Ultron。</p>
        </AICard>
      </div>
    </div>
  );
};