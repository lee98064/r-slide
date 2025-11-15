import React from 'react';

const AgentComponent: React.FC<{ title: string, icon: string, items: string[], className?: string }> = ({ title, icon, items, className }) => (
    <div className={`bg-slate-700/50 p-4 rounded-lg text-center ${className}`}>
        <h3 className="font-bold text-white mb-2"><i className={`fa-solid ${icon} text-sky-400 mr-2`}></i>{title}</h3>
        <ul className="text-sm text-slate-300 space-y-1">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </div>
);

export const AIAgent: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-8 text-center">LLM 驅動的 AI Agent 系統架構</h1>
      <div className="w-full max-w-5xl relative">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-sky-900/80 rounded-full flex flex-col items-center justify-center text-center p-4 border-2 border-sky-500 shadow-2xl shadow-sky-500/20">
                <i className="fa-solid fa-robot text-4xl text-sky-300 mb-2"></i>
                <h2 className="text-2xl font-bold text-white">AI Agent</h2>
                <p className="text-xs text-slate-400">(以 LLM 為核心)</p>
            </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-x-64 gap-y-12">
            <AgentComponent title="記憶機制" icon="fa-database" items={["短期記憶", "長期記憶"]} className="justify-self-start" />
            <AgentComponent title="任務規劃" icon="fa-list-check" items={["子目標分解", "反思與自我評估"]} className="justify-self-end" />
            <AgentComponent title="工具使用" icon="fa-toolbox" items={["API 呼叫", "程式碼執行", "資料庫查詢"]} className="justify-self-start" />
            <AgentComponent title="行動執行" icon="fa-person-running" items={["根據規劃執行", "與環境互動"]} className="justify-self-end" />
        </div>
      </div>
    </div>
  );
};