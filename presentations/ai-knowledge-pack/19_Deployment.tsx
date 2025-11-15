import React from 'react';

const DeployCard: React.FC<{ title: string, icon: string, advantages: string[], challenges: string[] }> = ({ title, icon, advantages, challenges }) => (
    <div className="bg-slate-900/50 p-8 rounded-lg border border-slate-700 w-full">
        <div className="flex items-center gap-4 mb-6">
            <i className={`fa-solid ${icon} text-4xl text-sky-400`}></i>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        <div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">優勢</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
                {advantages.map(adv => <li key={adv}>{adv}</li>)}
            </ul>
        </div>
        <div className="mt-6">
            <h3 className="text-xl font-semibold text-amber-400 mb-2">挑戰</h3>
            <ul className="list-disc list-inside text-slate-400 space-y-1">
                {challenges.map(ch => <li key={ch}>{ch}</li>)}
            </ul>
        </div>
    </div>
);

export const Deployment: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">不只上雲，更要落地：雲地整合</h1>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch justify-center gap-10">
        <DeployCard 
            title="雲端部署 (Cloud)"
            icon="fa-cloud"
            advantages={["彈性擴展", "維護成本低", "快速取得最新模型"]}
            challenges={["資料隱私與安全風險", "網路延遲", "長期成本可能較高"]}
        />
        <DeployCard 
            title="地端部署 (On-Premise)"
            icon="fa-server"
            advantages={["資料完全掌控、安全性高", "低延遲", "可客製化"]}
            challenges={["硬體建置與維護成本高", "擴展性受限", "需要專業技術人力"]}
        />
      </div>
    </div>
  );
};