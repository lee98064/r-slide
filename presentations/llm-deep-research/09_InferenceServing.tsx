import React from 'react';

const steps = [
  { title: 'Prefill', desc: '把整個提示灌進 transformer，建立 KV cache。' },
  { title: 'Decode', desc: '每步只算最新 token，複用 cache 加速。' },
  { title: '解碼策略', desc: 'Greedy/Beam/Sampling + 重複懲罰 + 停止詞。' },
  { title: '服務化', desc: '批次合併、流式輸出、推測式解碼、路由。' }
];

const controls = [
  'logit bias 禁詞 / 偏好詞',
  'JSON / Schema 解碼保障格式',
  '重複/存在懲罰控制刷詞',
  '停止序列 + 長度偏置',
  '高風險任務降溫，有 citation 強制'
];

export const LLMResearchInferenceServing: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white h-full w-full px-16 py-12 flex flex-col">
      <h2 className="text-3xl font-bold text-sky-300">7 · 推論與服務化</h2>
      <p className="text-slate-300 mt-3 max-w-4xl">
        從 logit 到文字的最後一哩：Prefill/Decode、解碼策略與系統層最佳化。
      </p>

      <div className="mt-8 grid grid-cols-4 gap-4">
        {steps.map((step) => (
          <div key={step.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="text-lg font-semibold text-sky-200">{step.title}</h3>
            <p className="text-sm text-slate-300 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex-1 bg-white/5 border border-white/10 rounded-3xl p-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold text-amber-200">KV Cache 流程</h4>
          <div className="mt-6 relative flex-1">
            <div className="kv-stage" style={{ top: '10%' }}>
              <span>提示 token</span>
              <div className="kv-bar" style={{ width: '85%' }}></div>
            </div>
            <div className="kv-stage" style={{ top: '40%' }}>
              <span>Prefill 計算</span>
              <div className="kv-bar" style={{ width: '65%', background: '#f97316' }}></div>
            </div>
            <div className="kv-stage" style={{ top: '70%' }}>
              <span>Decode step</span>
              <div className="kv-bar" style={{ width: '30%', background: '#34d399' }}></div>
            </div>
            <div className="kv-cache" />
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-amber-200">可調控的鈕</h4>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {controls.map((control) => (
              <div key={control} className="bg-slate-900/70 border border-white/10 rounded-2xl p-4 text-sm text-slate-200">
                • {control}
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-300">
            批次合併與推測式解碼讓吞吐 ↑；路由器可依任務難度選擇不同模型，兼顧成本與品質。
          </div>
        </div>
      </div>

      <style>{`
        .kv-stage {
          position: absolute;
          left: 0;
          width: 100%;
          padding: 0.8rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .kv-bar {
          height: 16px;
          border-radius: 999px;
          background: #38bdf8;
          animation: fillBar 2s ease forwards;
        }
        .kv-cache {
          position: absolute;
          right: 5%;
          top: 15%;
          width: 160px;
          height: 180px;
          border-radius: 1rem;
          border: 1px dashed rgba(248, 250, 252, 0.3);
          background: rgba(59, 130, 246, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kv-cache::after {
          content: 'KV Cache';
          color: #bae6fd;
          font-weight: 600;
        }
        @keyframes fillBar {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </div>
  );
};
