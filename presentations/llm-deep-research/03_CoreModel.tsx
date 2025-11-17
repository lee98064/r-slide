import React from 'react';

const technicalPoints = [
  '自回歸：每步輸出下一個 token 的條件機率分布，重複直到結束。',
  '因果遮罩確保每個位置只能看見前文；上下文長度限制是硬上限。',
  'LLM 學的是語料統計共現：被文字吸引，不被邏輯約束。'
];

const countermeasures = [
  '少用負向提示，直接給定允許的格式、角色、範例。',
  'logit bias / 禁詞表 / 停止詞，或使用語法約束式解碼。',
  '搭配 RAG、工具或人工覆核，把答案鎖在可信來源。'
];

const magneticTokens = [
  { text: '貓', top: '5%', left: '8%' },
  { text: '狗', top: '40%', left: '12%' },
  { text: '格式', top: '70%', left: '18%' },
  { text: '引用', top: '55%', left: '45%' },
  { text: 'JSON', top: '15%', left: '40%' }
];

export const LLMResearchCoreModel: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white h-full w-full px-16 py-12 grid grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold text-sky-300 mb-4">1 · LLM 是什麼？</h2>
        <p className="text-slate-300 mb-6">把它想成自回歸的接龍系統，本質上只是在調整下一個 token 的機率。</p>
        <div className="space-y-4">
          {technicalPoints.map((point) => (
            <div key={point} className="bg-white/5 border border-white/10 rounded-xl p-4 text-slate-200">
              <span className="text-sky-300 font-semibold mr-2">技術版 ·</span>
              {point}
            </div>
          ))}
        </div>

        <div className="mt-6 bg-slate-800/60 border border-sky-500/30 p-4 rounded-xl text-sm font-mono text-slate-200">
          <p className="mb-2">原文重點：</p>
          <p>「不要提到貓」其實讓貓這個 token 出現一次，上下文磁力反而把它拉高。</p>
          <p>模型做的是調整後續 token 的機率，對文字敏感、對邏輯約束遲鈍。</p>
        </div>
      </div>

      <div className="relative">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
          <h3 className="text-xl font-semibold text-amber-300">白話版 · 超會接龍的同學</h3>
          <p className="text-slate-200 mt-3">
            你說「不要講 X」，他還是會被 X 吸住，因為上下文的關鍵字像磁鐵一樣拉著它往同一個語境走。
          </p>

          <div className="grow relative mt-8">
            <div className="magnet" />
            {magneticTokens.map((token, idx) => (
              <div
                key={token.text}
                className="token-chip"
                style={{ top: token.top, left: token.left, animationDelay: `${idx * 0.4}s` }}
              >
                {token.text}
              </div>
            ))}
            <p className="text-xs text-slate-400 absolute bottom-2 left-2">負向提示會讓敏感詞更亮，必須靠工程手段約束。</p>
          </div>

          <h4 className="text-lg font-semibold text-sky-300 mt-6">工程對策</h4>
          <ul className="mt-2 text-slate-200 space-y-2 list-disc list-inside">
            {countermeasures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <style>{`
          .magnet {
            position: absolute;
            right: 10%;
            top: 25%;
            width: 120px;
            height: 120px;
            border: 4px solid #fbbf24;
            border-bottom-left-radius: 60px;
            border-bottom-right-radius: 60px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            transform: rotate(90deg);
            box-shadow: 0 0 30px rgba(251, 191, 36, 0.35);
            animation: pulse 2.4s infinite;
          }
          .token-chip {
            position: absolute;
            padding: 0.4rem 0.8rem;
            background: rgba(125, 211, 252, 0.12);
            border: 1px solid rgba(125, 211, 252, 0.4);
            border-radius: 999px;
            color: #e0f2fe;
            font-size: 0.9rem;
            animation: pull 3s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.6; transform: rotate(90deg) scale(1); }
            50% { opacity: 1; transform: rotate(90deg) scale(1.05); }
          }
          @keyframes pull {
            0% { transform: translate(0, 0); }
            50% { transform: translate(80px, -10px); }
            100% { transform: translate(0, 0); }
          }
        `}</style>
      </div>
    </div>
  );
};
