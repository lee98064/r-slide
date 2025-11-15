import React from 'react';

const SolutionCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700 h-full">
        <div className="flex items-start gap-4">
            <i className={`fa-solid ${icon} text-2xl text-sky-400 w-8 mt-1 text-center`}></i>
            <div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400">{children}</p>
            </div>
        </div>
    </div>
);

export const MitigatingHallucination: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">如何減少幻覺？</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
            <div className="bg-slate-900/50 p-6 rounded-lg border-2 border-sky-500 h-full">
                <div className="flex items-start gap-4">
                     <i className="fa-solid fa-database text-3xl text-sky-400 w-8 mt-1 text-center"></i>
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-2">檢索增強生成 (RAG)</h3>
                        <p className="text-slate-300 mb-4">這是目前最有效的方法之一。在生成回答前，先讓模型從可信的外部知識庫中檢索即時、相關的資訊，並將其作為回答的依據。</p>
                        <div className="flex items-center justify-around mt-6 text-sm text-center">
                            <span><i className="fa-solid fa-question-circle mr-1"></i>提問</span>
                            <i className="fa-solid fa-arrow-right text-slate-500"></i>
                            <span className="animate-pulse"><i className="fa-solid fa-magnifying-glass mr-1"></i>檢索</span>
                            <i className="fa-solid fa-arrow-right text-slate-500"></i>
                             <span><i className="fa-solid fa-file-import mr-1"></i>增強上下文</span>
                            <i className="fa-solid fa-arrow-right text-slate-500"></i>
                            <span><i className="fa-solid fa-robot mr-1"></i>生成答案</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="space-y-6">
            <SolutionCard icon="fa-pen-to-square" title="優化提示工程">
                提供清晰、具體的指令，並要求模型在不確定時承認，或引用來源。
            </SolutionCard>
            <SolutionCard icon="fa-sitemap" title="思維鏈 (CoT)">
                引導模型逐步拆解問題，進行邏輯推理，而不是直接給出答案，有助於提高準確性。
            </SolutionCard>
        </div>
      </div>
    </div>
  );
};
