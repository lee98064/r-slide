import React from 'react';

const blocks = [
  { title: '多頭注意力', detail: 'Q/K/V 投影，遮罩避免看到未來，頭之間並行。', color: '#38bdf8' },
  { title: '殘差 + 正規化', detail: '殘差維持梯度，LayerNorm / RMSNorm 穩定尺度。', color: '#fbbf24' },
  { title: '前饋網路', detail: '兩層 MLP + 非線性，負責跨維度混合；多用 SwiGLU。', color: '#34d399' },
  { title: '並行優化', detail: '張量/流水線並行、Flash Attention、重排運算順序。', color: '#a78bfa' }
];

export const LLMResearchTransformer: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white h-full w-full px-16 py-12 flex flex-col">
      <h2 className="text-3xl font-bold text-sky-200">4 · Transformer 內部工藝</h2>
      <p className="text-slate-400 mt-3 max-w-4xl">
        注意力不是整個故事：遮罩、殘差、前饋與正規化共同維持深層網路的穩定與吞吐。
      </p>

      <div className="mt-10 grid grid-cols-4 gap-6">
        {blocks.map((block) => (
          <div key={block.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute text-6xl font-black text-white/5 right-4 top-2 tracking-tight">∑</div>
            <h3 className="text-xl font-semibold" style={{ color: block.color }}>{block.title}</h3>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">{block.detail}</p>
            <div className="gear" style={{ borderColor: block.color }}></div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex-1 bg-white/5 border border-white/10 rounded-3xl p-8 relative">
        <h4 className="text-lg text-slate-300 font-semibold">訊號流：從輸入到輸出</h4>
        <div className="mt-6 h-56 flex items-center justify-between px-6">
          {['輸入 token', '嵌入 + 位置', '多頭注意力', '前饋層', '輸出 logit'].map((step, idx) => (
            <div key={step} className="relative flex flex-col items-center gap-3">
              <div className="flow-node" style={{ animationDelay: `${idx * 0.4}s` }}>
                <span>{step}</span>
              </div>
              {idx < 4 && <div className="flow-connector" />}
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 left-6 text-xs text-slate-400 max-w-xl">
          • 遮罩確保自回歸；Flash Attention 直接在 GPU shared memory 中計算 softmax。<br />
          • LayerNorm 位置（前/後）會影響訓練穩定；RMSNorm 省去均值估計。<br />
          • 多層可並行預計算部分前饋 (tensor parallel) 以填滿 GPU。
        </div>
      </div>

      <style>{`
        .gear {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          border: 6px solid;
          border-radius: 999px;
          opacity: 0.2;
          animation: rotate 10s linear infinite;
        }
        .flow-node {
          width: 140px;
          padding: 1rem;
          border-radius: 1rem;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.5);
          text-align: center;
          font-weight: 600;
          color: #e0f2fe;
          animation: fade-up 0.8s ease forwards;
          opacity: 0;
        }
        .flow-connector {
          position: absolute;
          top: 40%;
          right: -70px;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #22d3ee, transparent);
          animation: blink 1.2s linear infinite;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fade-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes blink {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};
