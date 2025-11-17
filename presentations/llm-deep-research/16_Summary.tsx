import React from 'react';

const takeaways = [
  {
    title: 'LLM = 接龍系統',
    detail: '每一步都在調整下一個 token，因此需要明確的結構與資料約束。',
    color: '#38bdf8'
  },
  {
    title: '可靠 = 工程化控制',
    detail: 'RAG + 引用、logit bias、結構化解碼、監測回歸測試。',
    color: '#fbbf24'
  },
  {
    title: '成本 = 量化 + 路由',
    detail: '量化、LoRA、推測式解碼、分層模型路由讓成本可控。',
    color: '#34d399'
  }
];

export const LLMResearchSummary: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white h-full w-full px-16 py-12 flex flex-col">
      <h2 className="text-4xl font-black text-sky-200">14 · 總結</h2>
      <p className="text-slate-300 mt-4 max-w-3xl">
        LLM 是在「選下一個最合理的 token」。想要它可靠，就給結構、給資料、給監控，必要時搭配硬約束。
        想便宜，就量化、LoRA、蒸餾、路由。想穩定，就建立回歸測試與線上監控。
      </p>

      <div className="mt-10 grid grid-cols-3 gap-6">
        {takeaways.map((takeaway) => (
          <div key={takeaway.title} className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold" style={{ color: takeaway.color }}>{takeaway.title}</h3>
            <p className="text-slate-200 text-sm mt-3">{takeaway.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <div className="text-sm text-slate-400">next：把這套心智用在團隊流程，建立資料、模型、服務的全鏈路 SOP。</div>
      </div>
    </div>
  );
};
