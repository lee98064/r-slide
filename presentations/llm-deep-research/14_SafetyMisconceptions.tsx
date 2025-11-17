import React from 'react';

const myths = [
  { myth: '「不要提到 X」就能生效', truth: '實際是拉高 X 的機率，需靠正向約束與硬限制。' },
  { myth: 'LLM = 事實查詢', truth: 'LLM 是模式生成器，必須搭配 RAG / 工具 / 引用。' },
  { myth: '上下文越長越好', truth: '長上下文會稀釋重點、增加成本，需策略性摘要。' },
  { myth: '丟任何資料都安全', truth: '需脫敏、設訪問控管，避免個資與商業機密外洩。' }
];

const safeguards = [
  '建立輸入/輸出過濾：prompt 注入與敏感詞偵測。',
  '資料治理：日誌與快取加密，設定留存期限。',
  '工具調用沙箱：限制系統呼叫範圍，避免越權。',
  '高風險領域加人工覆核，並保留 audit trail。'
];

export const LLMResearchSafetyMisconceptions: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white h-full w-full px-16 py-12 grid grid-cols-2 gap-12">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-sky-200">12 · 常見誤解</h2>
        <p className="text-slate-300 mt-3">把迷思拆掉，才不會把錯誤前提帶進產品。</p>
        <div className="mt-6 space-y-4">
          {myths.map((item) => (
            <div key={item.myth} className="p-4 bg-slate-900/60 border border-white/10 rounded-2xl">
              <p className="text-sm text-rose-300">Myth：{item.myth}</p>
              <p className="text-sm text-slate-200 mt-2">Reality：{item.truth}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col">
        <h3 className="text-2xl font-semibold text-amber-200">安全實務</h3>
        <div className="mt-4 space-y-3 text-sm text-slate-200">
          {safeguards.map((text) => (
            <p key={text}>• {text}</p>
          ))}
        </div>

        <div className="mt-8 p-5 rounded-2xl border border-rose-400/40 bg-rose-900/20 text-sm text-rose-100">
          <p className="font-semibold">提示注入案例</p>
          <p className="mt-2">
            「忽略以上規則」等字串會讓模型重寫系統訊息，需在檢索層與模型輸入層兩邊同時防護。
          </p>
        </div>

        <div className="mt-auto text-xs text-slate-400">
          Security + Privacy review = 需求階段就開始，搭配資料資產盤點。
        </div>
      </div>
    </div>
  );
};
