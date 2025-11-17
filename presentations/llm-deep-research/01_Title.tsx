import React from 'react';

export const LLMResearchTitle: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 h-full w-full px-16 py-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="floating-token" style={{ top: '20%', left: '15%' }}>token</div>
        <div className="floating-token" style={{ top: '35%', left: '70%' }}>Q/K/V</div>
        <div className="floating-token" style={{ top: '65%', left: '30%' }}>LoRA</div>
        <div className="floating-token" style={{ top: '55%', left: '80%' }}>RAG</div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="text-sm uppercase tracking-[0.3em] text-sky-400/80 mb-6">LLM Research Series</div>
        <h1 className="text-5xl font-black leading-tight drop-shadow-lg">LLM 原理與實作全書</h1>
        <p className="text-slate-200 text-xl mt-4 max-w-3xl">
          大學等級的工程視角，拆解大型語言模型的資料、訓練、推論與安全，移除公式但深入設計取捨。
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 max-w-4xl">
          {[
            { title: '自回歸心智模型', text: '理解「選下一個 token」的真相與限制。' },
            { title: '工程化推論', text: '從 KV cache 到結構化解碼，打造可靠服務。' },
            { title: '資料與訓練流水線', text: '清理、去重、分布式訓練與優化。' },
            { title: '安全與評估', text: '從紅隊到回歸測試，確保產出可控。' }
          ].map((card) => (
            <div key={card.title} className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur">
              <div className="text-sky-300 text-sm font-semibold mb-1">{card.title}</div>
              <div className="text-slate-200 text-base">{card.text}</div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-10 text-sm text-slate-400">
          無公式 × 細節加深 · 範例以中文場景為主 · 更動: 2024 Research Edition
        </div>
      </div>

      <style>{`
        .floating-token {
          position: absolute;
          padding: 0.6rem 1.2rem;
          border-radius: 999px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(125, 211, 252, 0.2);
          color: #bae6fd;
          font-size: 0.85rem;
          backdrop-filter: blur(6px);
          animation: drift 12s ease-in-out infinite;
        }
        @keyframes drift {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(30px,-20px,0) scale(1.1); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
      `}</style>
    </div>
  );
};
