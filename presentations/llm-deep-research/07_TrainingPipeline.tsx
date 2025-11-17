import React from 'react';

const phases = [
  {
    title: '資料清理',
    items: ['去重/移除個資、標記毒性', '格式統一、語言偵測、正規化'],
    color: '#38bdf8'
  },
  {
    title: '打包與 Curriculum',
    items: ['依任務/品質分桶，決定比例', 'pack sequence 讓 GPU 滿載'],
    color: '#f97316'
  },
  {
    title: '優化器與調度',
    items: ['AdamW / Lion + 動態學習率', '梯度裁剪、精度混合 (bf16)'],
    color: '#34d399'
  },
  {
    title: '分散式訓練',
    items: ['張量 + 資料並行、Zero-offload', '檢查點策略與錯誤復原'],
    color: '#a78bfa'
  }
];

export const LLMResearchTrainingPipeline: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white h-full w-full px-16 py-12 flex flex-col">
      <h2 className="text-3xl font-bold text-sky-300">5 · 訓練資料與流程</h2>
      <p className="text-slate-300 mt-3 max-w-4xl">
        資料品質決定最終行為：清理 → 去重 → 打包 → 優化 → 並行，缺一不可。
      </p>

      <div className="grid grid-cols-4 gap-5 mt-10">
        {phases.map((phase) => (
          <div key={phase.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col">
            <div className="text-sm uppercase tracking-widest text-slate-400">{phase.title}</div>
            <ul className="mt-3 text-slate-200 space-y-2 text-sm">
              {phase.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-auto h-1 rounded-full" style={{ background: phase.color }}></div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex-1 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 training-grid"></div>
        <div className="relative z-10 h-full flex flex-col p-8">
          <h3 className="text-xl font-semibold text-amber-200">訓練循環動畫</h3>
          <div className="mt-10 flex justify-around items-center">
            {['清理資料', '打包 batches', '分布式訓練', '驗證指標'].map((step, idx) => (
              <div key={step} className="flex flex-col items-center">
                <div className="cycle-node" style={{ animationDelay: `${idx * 0.4}s` }}>{step}</div>
                {idx < 3 && <div className="cycle-arrow" />}
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-slate-200">
            <div>
              <p className="text-slate-400 mb-1">監控</p>
              <p>困惑度趨勢、loss spikes、長上下文穩定性。</p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">失敗對策</p>
              <p>bad batch auto skip、重跑 dataloader、梯度檢查。</p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">Checkpoint</p>
              <p>定期保存 + 指標對照，避免回不了頭。</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .training-grid {
          background-image: linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .cycle-node {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 2px dashed rgba(56, 189, 248, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1rem;
          animation: pulse 2.5s ease-in-out infinite;
        }
        .cycle-arrow {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #fbbf24);
          margin-top: 10px;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
