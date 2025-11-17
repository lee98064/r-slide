import React from 'react';

const methods = [
  { title: '量化', detail: '權重/激活降位寬 (8/4 bit)，顯存 ↓，需校準確保品質。', color: '#38bdf8' },
  { title: '蒸餾', detail: '把大模型行為教給小模型，降低延遲。', color: '#f472b6' },
  { title: '分片並行', detail: '張量 + 流水線並行，KV cache 壓縮與複用。', color: '#34d399' },
  { title: '路由 / 推測式解碼', detail: '依任務選模型，或用小模型預測、大模型驗證。', color: '#fbbf24' }
];

export const LLMResearchEfficiency: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white h-full w-full px-16 py-12 flex flex-col">
      <h2 className="text-3xl font-bold text-sky-200">10 · 效率與成本</h2>
      <p className="text-slate-300 mt-3">把模型「養得起、跑得動」：量化、蒸餾、分片、路由。</p>

      <div className="grid grid-cols-4 gap-4 mt-8">
        {methods.map((method) => (
          <div key={method.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="text-lg font-semibold" style={{ color: method.color }}>{method.title}</h3>
            <p className="text-sm text-slate-300 mt-2">{method.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex-1 grid grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col">
          <h4 className="text-xl font-semibold text-amber-200">成本-延遲平衡</h4>
          <div className="mt-6 text-sm text-slate-300 space-y-2">
            <p>• 路由器可根據上下文長度 / 任務分類決定走大模型或小模型。</p>
            <p>• KV cache 壓縮 + 分片讓長對話的記憶體成長更平滑。</p>
            <p>• 推測式解碼：小模型預測一批候選，大模型一次驗證多個，節省時間。</p>
          </div>

          <div className="mt-auto">
            <p className="text-xs text-slate-400">監控：token/s、GPU 利用率、尾延遲、成本 / 百萬 token。</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 efficiency-grid"></div>
          <div className="relative z-10 h-full flex flex-col">
            <h4 className="text-xl font-semibold text-amber-200">吞吐模擬</h4>
            <div className="mt-6 space-y-4">
              {['量化後吞吐', '推測式解碼', '批次合併'].map((label, idx) => (
                <div key={label} className="throughput-row">
                  <span>{label}</span>
                  <div className="bar-bg">
                    <div className="bar-fill" style={{ width: `${50 + idx * 20}%` }}></div>
                  </div>
                  <span className="text-xs text-slate-400">{1.5 + idx * 0.5}x</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .efficiency-grid {
          background: linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.4;
        }
        .throughput-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.9rem;
          color: #e0f2fe;
        }
        .bar-bg {
          flex: 1;
          height: 6px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.7);
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #34d399, #38bdf8);
          animation: grow 1.5s ease forwards;
        }
        @keyframes grow {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </div>
  );
};
