import React from 'react';

const modules = [
  {
    title: 'SFT / 指令化',
    bullets: ['輸入→輸出 pairs 教會格式與語氣', '多任務混合、插入角色與結構描述'],
    color: '#38bdf8'
  },
  {
    title: 'PEFT (LoRA / Adapter / QLoRA)',
    bullets: ['低秩或小模組只訓練增量參數', '先小 rank 試水，再以指標決定升級'],
    color: '#f472b6'
  },
  {
    title: '偏好學習 (RLHF / DPO)',
    bullets: ['偏好對比→回饋模型→PPO 或直接優化', 'DPO 無需回饋模型，較穩'],
    color: '#fbbf24'
  }
];

const safety = [
  '制定允許/拒答模板，搭配敏感詞觸發器。',
  '輸出審核器 + 工具沙箱，必要時人工覆核。',
  '防災難性遺忘：混入原始通用資料，避免語氣失衡。'
];

export const LLMResearchFineTuneAlignment: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white h-full w-full px-16 py-12 grid grid-cols-2 gap-10">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col">
        <h2 className="text-3xl font-bold text-sky-300">6 · 微調與對齊</h2>
        <p className="text-slate-300 mt-3">
          讓通用模型說話像你團隊：先監督學格式，再用偏好資料對齊語氣與安全。
        </p>
        <div className="mt-8 space-y-6">
          {modules.map((module) => (
            <div key={module.title} className="border border-white/10 rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute right-4 top-4 text-5xl font-black text-white/5">{module.title.includes('PEFT') ? 'Δ' : '◎'}</div>
              <h3 className="text-xl font-semibold" style={{ color: module.color }}>{module.title}</h3>
              <ul className="mt-3 space-y-2 text-slate-200 text-sm">
                {module.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col">
        <h3 className="text-2xl font-semibold text-amber-200">對齊管控面板</h3>
        <div className="mt-6 flex-1 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="panel" style={{ borderColor: '#38bdf8' }}>
              <p className="title">LoRA Rank</p>
              <p className="value">r = 16 → 32</p>
            </div>
            <div className="panel" style={{ borderColor: '#fbbf24' }}>
              <p className="title">量化策略</p>
              <p className="value">QLoRA (NF4) + bf16 head</p>
            </div>
            <div className="panel" style={{ borderColor: '#10b981' }}>
              <p className="title">驗收指標</p>
              <p className="value">格式正確率 98% ↑</p>
            </div>
            <div className="panel" style={{ borderColor: '#f472b6' }}>
              <p className="title">偏好勝率</p>
              <p className="value">DPO win rate 68%</p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5">
            <p className="text-sky-200 font-semibold mb-2">安全與審核</p>
            <ul className="text-slate-200 space-y-2 text-sm">
              {safety.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <style>{`
          .panel {
            border: 1px solid rgba(56, 189, 248, 0.4);
            border-radius: 1.25rem;
            padding: 1rem;
            background: rgba(15, 23, 42, 0.6);
          }
          .panel .title {
            text-transform: uppercase;
            font-size: 0.7rem;
            letter-spacing: 0.3em;
            color: rgba(226, 232, 240, 0.7);
          }
          .panel .value {
            font-size: 1rem;
            color: #e0f2fe;
            font-weight: 600;
          }
        `}</style>
      </div>
    </div>
  );
};
