import React from 'react';

const ragSteps = [
  { stage: 'Chunking', detail: '語義/標題為界，適度重疊，段落加上 ID。', color: '#38bdf8' },
  { stage: 'Embedding + 向量庫', detail: 'ANN 搜尋 + 混合檢索，兼顧關鍵詞與語義。', color: '#34d399' },
  { stage: 'Re-ranking', detail: '較重模型在 Top-K 中再挑精確段落。', color: '#f472b6' },
  { stage: 'Prompt 組裝', detail: '引用格式、最大段數、拒答規則，避免擠爆上下文。', color: '#fbbf24' }
];

const checklist = [
  '回答必須引用來源，格式如 [doc-12]',
  '若文檔未提及，回答「文件未提及」',
  '引用多段時，分段敘述並附來源',
  '敏感領域加上工具/查詢審核'
];

export const LLMResearchRAG: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white h-full w-full px-16 py-12 flex flex-col">
      <h2 className="text-3xl font-bold text-sky-300">9 · RAG 工程設計</h2>
      <p className="text-slate-300 mt-3 max-w-4xl">讓答案對齊文件：切段、檢索、重排、提示組裝、引用、防幻覺。</p>

      <div className="grid grid-cols-4 gap-4 mt-10">
        {ragSteps.map((step) => (
          <div key={step.stage} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-lg font-semibold" style={{ color: step.color }}>{step.stage}</p>
            <p className="mt-3 text-sm text-slate-300">{step.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex-1 grid grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 rag-grid"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-amber-200">資料流動畫</h3>
            <div className="mt-6 space-y-4">
              {['Query', 'Embedding', 'ANN 檢索', 'Re-rank', 'Prompt'].map((label, idx) => (
                <div key={label} className="rag-row">
                  <div className="dot" style={{ animationDelay: `${idx * 0.3}s` }}></div>
                  <span>{label}</span>
                  <div className="rag-bar" style={{ width: `${30 + idx * 15}%` }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col">
          <h3 className="text-xl font-semibold text-amber-200">提示限制示例</h3>
          <div className="mt-4 text-sm text-slate-200 space-y-2">
            {checklist.map((item) => (
              <p key={item}>• {item}</p>
            ))}
          </div>

          <div className="mt-auto text-xs text-slate-400">
            評估：Recall@K、命中率、citation 完整度；線上 A/B 比較回答品質 + 延遲。
          </div>
        </div>
      </div>

      <style>{`
        .rag-grid {
          background-image: radial-gradient(rgba(125, 211, 252, 0.15) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .rag-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 0;
        }
        .rag-row span {
          width: 90px;
          font-weight: 600;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #38bdf8;
          animation: blink 1.5s infinite;
        }
        .rag-bar {
          flex: 1;
          height: 6px;
          border-radius: 999px;
          background: linear-gradient(90deg, #38bdf8, #a5b4fc);
        }
        @keyframes blink {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
