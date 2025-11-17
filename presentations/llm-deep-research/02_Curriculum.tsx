import React from 'react';

const sections = [
  'LLM 本質',
  'Tokenization',
  'Embedding + Positional',
  'Transformer 內部結構',
  '資料與訓練流程',
  '微調與對齊',
  '推論與服務化',
  '長上下文策略',
  'RAG 工程',
  '效率與成本',
  '評估與監測',
  '誤解與安全',
  '實務小抄',
  '總結'
];

export const LLMResearchCurriculum: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white h-full w-full px-16 py-12 flex flex-col">
      <h2 className="text-4xl font-bold text-sky-300">0 · 全文導覽</h2>
      <p className="text-slate-300 text-lg mt-4 max-w-4xl">
        可把這份投影片當作課綱：由基礎心智模型一路到訓練、推論、RAG、安全與實務流程，全部圍繞 LLM。
        每節保留技術版與白話版的雙語境敘事，方便對外解說。
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6 grow">
        {sections.map((label, index) => (
          <div key={label} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden">
            <div className="absolute right-6 top-6 text-5xl font-black text-white/5">{String(index + 1).padStart(2, '0')}</div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 font-semibold">
                {index + 1}
              </span>
              <h3 className="text-2xl font-semibold">{label}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {index < 4 && '建立模型基本心智，打底 token 與 Transformer 細節。'}
              {index >= 4 && index < 8 && '聚焦資料、訓練與調教流程，確保模型說話合規。'}
              {index >= 8 && index < 12 && '工程面向：RAG、效率、安全與評估。'}
              {index >= 12 && '最後收斂到可實作的小抄與整體結論。'}
            </p>
            <div className="progress-line" style={{ animationDelay: `${index * 0.2}s` }}></div>
          </div>
        ))}
      </div>

      <style>{`
        .progress-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          width: 0%;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          animation: fill 3s forwards;
        }
        @keyframes fill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};
