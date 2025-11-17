import React from 'react';

const variants = [
  { title: 'Byte‑BPE', desc: '多數現代模型採用，連 emoji 與稀有字都能穩定切。' },
  { title: '正規化', desc: '大小寫、全半形、空白規則直接影響字典稀疏度。' },
  { title: '特殊符號', desc: 'BOS/EOS、角色、填充與未知符都會參與注意力。' },
  { title: '中文細節', desc: '無空白分詞，專有名詞與單位影響序列長度。' }
];

const dictionaryTradeoff = [
  { label: '小字典 (16k)', pro: '節省記憶體', con: '詞被拆得太碎，序列長度爆炸' },
  { label: '中等 (32-64k)', pro: '常見詞完整、長尾可拆', con: '仍需處理 OOV' },
  { label: '巨大 (100k+)', pro: '專業術語好表示', con: '訓練/推論成本大幅上升' }
];

const sampleTokens = ['請', '問', '▁5', '▁公里', '的', '▁天', '氣'];

export const LLMResearchTokenization: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-950 to-slate-900 h-full w-full text-white px-16 py-12 flex flex-col">
      <div className="flex items-baseline gap-6">
        <h2 className="text-3xl font-bold text-sky-300">2 · Tokenization</h2>
        <p className="text-slate-400">把語言切成模型能理解的離散積木</p>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-10 grow">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-xl font-semibold mb-4 text-sky-200">工程亮點</h3>
          <div className="space-y-4 text-slate-200">
            {variants.map((item) => (
              <div key={item.title} className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-200 font-semibold">
                  {item.title.split(' ')[0]}
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-slate-300 text-sm mb-2">示例：句子「請問 5 公里 的 天氣」被切成以下 token：</p>
            <div className="flex flex-wrap gap-2">
              {sampleTokens.map((token, idx) => (
                <div key={token + idx} className="token-slice" style={{ animationDelay: `${idx * 0.2}s` }}>
                  {token}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-amber-200">字典大小的取捨</h3>
          <div className="mt-6 space-y-6">
            {dictionaryTradeoff.map((row, idx) => (
              <div key={row.label} className="relative border border-white/10 rounded-2xl p-5">
                <div className="text-sm uppercase tracking-widest text-slate-400">{row.label}</div>
                <div className="mt-2 text-slate-200">{row.pro}</div>
                <div className="text-sm text-slate-400">缺點：{row.con}</div>
                <div className="bar" style={{ width: `${40 + idx * 20}%` }}></div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-slate-300 space-y-2">
            <p>中文場景可透過自訂詞庫或附加 tokenizer 提升醫療、法務等領域的表示力。</p>
            <p>重新訓練 tokenizer 需確認與舊模型權重的兼容策略，例如重建 embedding 層。</p>
          </div>
        </div>
      </div>

      <style>{`
        .token-slice {
          padding: 0.5rem 1rem;
          border-radius: 999px;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #e0f2fe;
          font-weight: 600;
          animation: pop 0.6s ease forwards;
          opacity: 0;
        }
        .bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #22d3ee, #818cf8);
          border-bottom-left-radius: 999px;
          border-bottom-right-radius: 999px;
        }
        @keyframes pop {
          0% { transform: translateY(10px) scale(0.9); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
