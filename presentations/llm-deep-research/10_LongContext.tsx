import React from 'react';

const strategies = [
  { title: '滑窗 / 摘要', detail: '把遠處內容濃縮後再丟回上下文，避免超過視窗。', color: '#38bdf8' },
  { title: '層級式提示', detail: '先總結再展開，讓模型逐層聚焦重點。', color: '#f472b6' },
  { title: '長注意力', detail: '稀疏注意力 + 相對/旋轉位置，延長穩定長度。', color: '#34d399' },
  { title: '外掛記憶', detail: 'RAG、工具、資料庫，把不必要的大段落搬到外部。', color: '#fbbf24' }
];

export const LLMResearchLongContext: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white h-full w-full px-16 py-12 flex flex-col">
      <h2 className="text-3xl font-bold text-sky-200">8 · 上下文與長文本</h2>
      <p className="text-slate-300 mt-3 max-w-3xl">
        視窗有限，資訊得動態選：滑窗、摘要、長注意力與外部記憶是常用組合。
      </p>

      <div className="grid grid-cols-2 gap-6 mt-10">
        {strategies.map((item) => (
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-xl font-semibold" style={{ color: item.color }}>{item.title}</h3>
            <p className="text-sm text-slate-300 mt-2">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex-1 bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 longwave"></div>
        <div className="relative z-10 h-full flex flex-col">
          <h4 className="text-lg font-semibold text-amber-200">視窗佔用示意</h4>
          <div className="mt-6 space-y-4">
            {[40, 60, 85].map((percentage, idx) => (
              <div key={percentage}>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>{idx === 0 ? '關鍵摘要' : idx === 1 ? '最新對話' : '原始長文'}</span>
                  <span>{percentage}%</span>
                </div>
                <div className="h-3 bg-slate-900/60 rounded-full mt-1 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${percentage}%`, background: idx === 0 ? '#38bdf8' : idx === 1 ? '#f472b6' : '#fbbf24' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto text-sm text-slate-300 space-y-2">
            <p>• 接近視窗邊界時，舊式絕對位置編碼會失真，可改用 RoPE + 插值技巧。</p>
            <p>• 長文 injection 建議先「摘要+引用」再讓模型展開，避免幻覺。</p>
          </div>
        </div>
      </div>

      <style>{`
        .longwave {
          background: repeating-linear-gradient(120deg, rgba(248, 250, 252, 0.1), rgba(248, 250, 252, 0.1) 20px, transparent 20px, transparent 40px);
          animation: slide 8s linear infinite;
        }
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-40px); }
        }
      `}</style>
    </div>
  );
};
