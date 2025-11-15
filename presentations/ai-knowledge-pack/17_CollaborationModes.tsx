import React from 'react';

const Mode: React.FC<{ title: string, desc: string, icon: string, level: string, bgColor: string }> = ({ title, desc, icon, level, bgColor }) => (
    <div className="relative text-center p-6 bg-slate-800 rounded-lg border border-slate-700 group">
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-bold text-white rounded-full ${bgColor}`}>{level}</div>
        <i className={`fa-solid ${icon} text-6xl text-sky-400 my-6 transition-transform duration-300 group-hover:scale-110`}></i>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-slate-400 mt-2">{desc}</p>
    </div>
);


export const CollaborationModes: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-12 text-center">人機協同的三種模式</h1>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12">
          <Mode title="檢索輔助型" desc="AI 作為工具，人類主導決策" icon="fa-magnifying-glass" level="AI 助攻" bgColor="bg-blue-600"/>
          <i className="fa-solid fa-arrow-right text-4xl text-slate-600 hidden md:block"></i>
          <i className="fa-solid fa-arrow-down text-4xl text-slate-600 md:hidden"></i>
          <Mode title="副駕駛型 (Copilot)" desc="AI 提供建議，與人類協作" icon="fa-user-group" level="人機並肩" bgColor="bg-indigo-600"/>
          <i className="fa-solid fa-arrow-right text-4xl text-slate-600 hidden md:block"></i>
          <i className="fa-solid fa-arrow-down text-4xl text-slate-600 md:hidden"></i>
          <Mode title="代理人 (Agent)" desc="AI 自主規劃並執行任務" icon="fa-robot" level="AI 主導" bgColor="bg-green-600"/>
      </div>
    </div>
  );
};