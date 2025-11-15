import React from 'react';

const DiagramNode: React.FC<{ icon: string; title: string; desc: string; className?: string }> = ({ icon, title, desc, className }) => (
    <div className={`flex flex-col items-center text-center p-4 bg-slate-700/50 rounded-lg group ${className}`}>
        <i className={`fa-solid ${icon} text-4xl text-sky-400 mb-3 transition-transform duration-300 group-hover:scale-110`}></i>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-slate-400 text-sm">{desc}</p>
    </div>
);

export const WhatIsAI: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-4 text-center">什麼是 AI？</h1>
      <p className="text-slate-300 max-w-4xl text-center mb-12">
        人工智慧 (AI) 是電腦科學領域，專注於開發能夠模擬人類智慧行為的電腦程序，能從數據中學習、做出決策，執行過去通常需由人類完成的任務。
      </p>
      
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        <div className="absolute w-64 h-64 bg-slate-900 rounded-full flex items-center justify-center text-center p-4">
            <div>
                <h2 className="text-2xl font-bold text-sky-400">人工智慧</h2>
                <p className="text-slate-400">以自駕車為例</p>
            </div>
        </div>
        
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-x-12 gap-y-8">
            <DiagramNode icon="fa-camera-retro" title="擷取 (ACQUIRE)" desc="透過感應器收集環境資料" className="col-start-1 row-start-1" />
            <div className="col-span-1 row-start-1 flex items-center justify-center relative"><div className="w-full h-1 bg-slate-700"></div><i className="fa-solid fa-arrow-right text-slate-500 absolute"></i></div>
            <DiagramNode icon="fa-magnifying-glass-chart" title="診斷 (DIAGNOSE)" desc="分析潛在問題或變化" className="col-start-3 row-start-1" />
            
            <DiagramNode icon="fa-car" title="行動 (ACT)" desc="自主操控車輛" className="col-start-1 row-start-2" />
            <div className="col-span-1 row-start-2 flex items-center justify-center relative"><div className="w-full h-1 bg-slate-700"></div><i className="fa-solid fa-arrow-up text-slate-500 absolute"></i></div>
            <div className="col-span-1 row-start-2 flex items-center justify-center relative"><div className="w-full h-1 bg-slate-700"></div><i className="fa-solid fa-arrow-down text-slate-500 absolute"></i></div>
            <div className="col-span-1 row-start-1 flex items-center justify-center relative"><div className="w-full h-1 bg-slate-700"></div><i className="fa-solid fa-arrow-left text-slate-500 absolute"></i></div>

            <DiagramNode icon="fa-lightbulb" title="決策 (DECIDE)" desc="分析訊息並決定最安全路徑" className="col-start-3 row-start-2"/>
        </div>
      </div>
    </div>
  );
};