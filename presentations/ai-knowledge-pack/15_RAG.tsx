import React from 'react';

const FlowItem: React.FC<{ icon: string, title: string, color: string }> = ({ icon, title, color }) => (
    <div className="flex flex-col items-center text-center">
        <div className={`bg-${color}-500/20 border-2 border-${color}-500 w-24 h-24 rounded-full flex items-center justify-center`}>
            <i className={`fa-solid ${icon} text-4xl text-${color}-300`}></i>
        </div>
        <h3 className="text-white font-semibold mt-3">{title}</h3>
    </div>
);

export const RAG: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-4 text-center">RAG: 檢索增強生成</h1>
      <p className="text-slate-300 max-w-4xl text-center mb-12">
        解決 LLM 知識過時、產生幻覺的問題。RAG 讓模型在生成回答前，先從外部知識庫 (如公司文件、最新新聞) 檢索相關資訊。
      </p>
      <div className="w-full max-w-5xl flex items-center justify-around">
        <FlowItem icon="fa-question" title="使用者提問" color="amber" />
        <i className="fa-solid fa-arrow-right text-3xl text-slate-600"></i>
        <FlowItem icon="fa-database" title="從知識庫檢索" color="blue" />
        <i className="fa-solid fa-arrow-right text-3xl text-slate-600"></i>
        <FlowItem icon="fa-file-import" title="增強 Prompt" color="indigo" />
        <i className="fa-solid fa-arrow-right text-3xl text-slate-600"></i>
        <FlowItem icon="fa-robot" title="LLM 生成回答" color="green" />
      </div>
      <div className="mt-12 bg-slate-900/50 p-6 rounded-lg border border-slate-700 w-full max-w-4xl">
        <h3 className="text-xl font-bold text-white mb-2">優點</h3>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>提供更準確、更新的資訊。</li>
            <li>減少模型「幻覺」(Hallucination) 的發生。</li>
            <li>回答具可追溯性，可引用資料來源。</li>
        </ul>
      </div>
    </div>
  );
};