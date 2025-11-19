import React from 'react';

const Bar: React.FC<{ height: number; label: string; color: string; highlight: boolean }> = ({ height, label, color, highlight }) => (
    <div className="flex flex-col items-center h-full justify-end">
        <div 
            className={`w-12 rounded-t-md ${color} transition-all duration-500 ease-in-out ${highlight ? 'shadow-lg shadow-white/50' : ''}`}
            style={{ height: `${height}%` }}
        ></div>
        <span className="text-slate-400 text-sm mt-2">{label}</span>
    </div>
);


export const DecodingStrategies: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10 overflow-hidden">
      <h1 className="text-4xl font-bold text-sky-400 mb-4 text-center">生成時的創意 vs. 準確性</h1>
      <p className="text-slate-300 max-w-4xl text-center mb-10">
        模型不僅僅是選擇機率最高的詞，我們可以透過一些策略來控制其「創意程度」。
      </p>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="strategy-card">
            <h2 className="title">Temperature (溫度)</h2>
            <p className="desc">控制機率分佈的平滑度。低溫使高機率詞更突出 (更可預測)，高溫使詞語機率更平均 (更有創意)。</p>
            <div className="viz-box">
                <Bar height={80} label="jumps" color="bg-green-500" highlight={true} />
                <Bar height={10} label="runs" color="bg-slate-600" highlight={false} />
                <Bar height={5} label="hops" color="bg-slate-600" highlight={false} />
            </div>
            <p className="text-center text-xs text-amber-300">低溫 (e.g., 0.2): 更傾向選 "jumps"</p>
        </div>
        <div className="strategy-card">
            <h2 className="title">Top-K Sampling</h2>
            <p className="desc">只從機率最高的 K 個詞中進行抽樣。這可以防止選到非常罕見或不合理的詞。</p>
            <div className="viz-box">
                <Bar height={70} label="jumps" color="bg-green-500" highlight={true} />
                <Bar height={40} label="runs" color="bg-green-500" highlight={true} />
                <Bar height={10} label="hops" color="bg-slate-600" highlight={false} />
            </div>
            <p className="text-center text-xs text-amber-300">K=2: 只在 "jumps" 和 "runs" 中選擇</p>
        </div>
        <div className="strategy-card">
            <h2 className="title">Top-P (Nucleus) Sampling</h2>
            <p className="desc">從累積機率超過 P 值的最小詞彙集合中抽樣。這比 Top-K 更動態，有時選的多有時選的少。</p>
            <div className="viz-box">
                <Bar height={70} label="jumps" color="bg-green-500" highlight={true} />
                <Bar height={25} label="runs" color="bg-green-500" highlight={true} />
                <Bar height={5} label="hops" color="bg-slate-600" highlight={false} />
            </div>
            <p className="text-center text-xs text-amber-300">P=0.9: 選擇 "jumps" (0.7) + "runs" (0.25) {'>'} 0.9</p>
        </div>
      </div>
      <style>{`
        .strategy-card { background-color: rgba(30, 41, 59, 0.7); padding: 1.5rem; border-radius: 0.5rem; border: 1px solid #334155; }
        .title { font-size: 1.5rem; font-weight: bold; color: #38bdf8; margin-bottom: 0.75rem; text-align: center; }
        .desc { color: #cbd5e1; font-size: 0.875rem; min-height: 80px; }
        .viz-box { height: 150px; display: flex; align-items: flex-end; justify-content: space-around; padding: 1rem; border-radius: 0.25rem; background: #1e293b; margin-top: 1rem; margin-bottom: 1rem; }
      `}</style>
    </div>
  );
};
