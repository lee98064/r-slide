import React from 'react';

const semanticDimensions = [
  { word: 'AI', coords: { x: 30, y: 30 }, color: '#38bdf8' },
  { word: '模型', coords: { x: 55, y: 40 }, color: '#34d399' },
  { word: '資料', coords: { x: 20, y: 60 }, color: '#fbbf24' },
  { word: '推論', coords: { x: 70, y: 65 }, color: '#f472b6' },
  { word: '對齊', coords: { x: 45, y: 75 }, color: '#a5b4fc' }
];

const positionTypes = [
  {
    title: '絕對位置',
    detail: '每個 token 擁有固定位置編碼；視窗外資料會崩壞。',
    accent: 'absolute'
  },
  {
    title: '相對位置',
    detail: '依 token 彼此距離計算，遷移長度較穩。',
    accent: 'relative'
  },
  {
    title: '旋轉編碼 (RoPE)',
    detail: '用複數旋轉保留距離與方向，是長上下文主流。',
    accent: 'rope'
  }
];

export const LLMResearchEmbeddingPosition: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white h-full w-full px-16 py-12 grid grid-cols-2 gap-12">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative">
        <h2 className="text-3xl font-bold text-sky-200 mb-2">3 · Embedding 與位置</h2>
        <p className="text-slate-300 mb-6">把語義投影到座標，再告訴模型「這些 token 排列在什麼位置」。</p>

        <div className="embedding-space">
          {semanticDimensions.map((point) => (
            <div
              key={point.word}
              className="embedding-dot"
              style={{
                left: `${point.coords.x}%`,
                top: `${point.coords.y}%`,
                background: point.color,
                boxShadow: `0 0 20px ${point.color}66`
              }}
            >
              {point.word}
            </div>
          ))}
          <div className="axis-label x">語氣/技術性</div>
          <div className="axis-label y">抽象/具象</div>
        </div>

        <p className="text-sm text-slate-400 mt-4">
          同語義的詞會聚在一起；微調或 adapter 其實是在輕推這些點的位置，讓模型改變語氣或知識分佈。
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col">
        <h3 className="text-2xl font-semibold text-amber-200">位置資訊的演進</h3>
        <div className="mt-6 space-y-5">
          {positionTypes.map((pos) => (
            <div key={pos.title} className="relative border border-white/10 rounded-2xl p-5 overflow-hidden">
              <div className="text-lg font-semibold">{pos.title}</div>
              <p className="text-slate-400 text-sm mt-2">{pos.detail}</p>
              <div className={`position-wave ${pos.accent}`}></div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-slate-300">
          <p>• 中文與多語模型常會在 embedding 前加入 Unicode 正規化，避免等價字形散落。</p>
          <p>• 相對/旋轉編碼常搭配分段遮罩，確保長上下文仍保存局部順序。</p>
        </div>
      </div>

      <style>{`
        .embedding-space {
          position: relative;
          height: 320px;
          border-radius: 1.5rem;
          border: 1px dashed rgba(148, 163, 184, 0.4);
          background: radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent);
          overflow: hidden;
        }
        .embedding-dot {
          position: absolute;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          transform: translate(-50%, -50%);
          animation: float 6s ease-in-out infinite;
        }
        .axis-label {
          position: absolute;
          color: rgba(148, 163, 184, 0.8);
          font-size: 0.8rem;
        }
        .axis-label.x { bottom: 8px; right: 20px; }
        .axis-label.y { top: 20px; left: 8px; writing-mode: vertical-rl; }
        .position-wave {
          position: absolute;
          inset: 0;
          opacity: 0.25;
          background: repeating-linear-gradient(120deg, rgba(56, 189, 248, 0.6), rgba(56, 189, 248, 0.6) 20px, transparent 20px, transparent 40px);
          animation: slide 6s linear infinite;
        }
        .position-wave.relative {
          background: repeating-linear-gradient(45deg, rgba(16, 185, 129, 0.7), rgba(16, 185, 129, 0.7) 15px, transparent 15px, transparent 30px);
        }
        .position-wave.rope {
          background: radial-gradient(circle at center, rgba(236, 72, 153, 0.5), transparent);
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -60%) scale(1.05); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes slide {
          from { transform: translateX(-20px); }
          to { transform: translateX(20px); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};
