import React from 'react';

export const SelfAttention: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10 overflow-hidden">
      <h1 className="text-4xl font-bold text-sky-400 mb-4 text-center">自注意力機制深度解析</h1>
      <p className="text-slate-400 max-w-4xl text-center mb-6">
        對於輸入序列中的每一個詞，自注意力機制都會執行以下步驟來計算其上下文感知的表示。
      </p>

      <div className="w-full max-w-6xl h-[500px] relative font-mono">
        {/* Step indicators */}
        <div className="step-indicator" style={{ animationDelay: '0s' }}>1. 為每個詞生成 Q, K, V 向量</div>
        <div className="step-indicator" style={{ animationDelay: '2.5s' }}>2. 計算 Query 和所有 Key 的分數</div>
        <div className="step-indicator" style={{ animationDelay: '5s' }}>3. Softmax 正規化分數 {'->'} 注意力權重</div>
        <div className="step-indicator" style={{ animationDelay: '7.5s' }}>4. 權重 x Value 向量</div>
        <div className="step-indicator" style={{ animationDelay: '10s' }}>5. 加總加權後的 Value {'->'} 最終輸出</div>

        {/* Tokens */}
        <div className="token" style={{ left: '20%' }}>The</div>
        <div className="token" style={{ left: '40%' }}>animal</div>
        <div className="token" style={{ left: '60%' }}>tired</div>
        <div className="token target-token" style={{ left: '80%' }}>it</div>

        {/* QKV vectors */}
        <div className="qkv q" style={{ left: '80%' }}>Q</div>
        <div className="qkv k" style={{ left: '20%' }}>K</div>
        <div className="qkv k" style={{ left: '40%' }}>K</div>
        <div className="qkv k" style={{ left: '60%' }}>K</div>
        <div className="qkv k" style={{ left: '80%' }}>K</div>
        
        <div className="qkv v" style={{ left: '20%' }}>V</div>
        <div className="qkv v" style={{ left: '40%' }}>V</div>
        <div className="qkv v" style={{ left: '60%' }}>V</div>
        <div className="qkv v" style={{ left: '80%' }}>V</div>

        {/* Lines and Scores */}
        <svg className="absolute w-full h-full top-0 left-0 overflow-visible">
            <line className="score-line" x1="80%" y1="70%" x2="20%" y2="70%"></line>
            <line className="score-line" x1="80%" y1="70%" x2="40%" y2="70%"></line>
            <line className="score-line" x1="80%" y1="70%" x2="60%" y2="70%"></line>
            <line className="score-line" x1="80%" y1="70%" x2="80%" y2="70%"></line>
        </svg>

        <div className="score-box" style={{ left: '20%' }}>.05</div>
        <div className="score-box" style={{ left: '40%' }}>.85</div>
        <div className="score-box" style={{ left: '60%' }}>.05</div>
        <div className="score-box" style={{ left: '80%' }}>.05</div>

        <div className="softmax-box">Softmax</div>

        {/* Weighted V lines */}
        <svg className="absolute w-full h-full top-0 left-0 overflow-visible">
            <line className="sum-line" x1="20%" y1="45%" x2="50%" y2="15%"></line>
            <line className="sum-line" x1="40%" y1="45%" x2="50%" y2="15%"></line>
            <line className="sum-line" x1="60%" y1="45%" x2="50%" y2="15%"></line>
            <line className="sum-line" x1="80%" y1="45%" x2="50%" y2="15%"></line>
        </svg>

        <div className="output-box">Output for "it"</div>

      </div>
      <style>{`
        .step-indicator { position: absolute; top: 0; left: 10px; font-size: 1.25rem; color: #94a3b8; opacity: 0; animation: fade-in-out 3s ease-in-out forwards; }
        @keyframes fade-in-out { 0% { opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { opacity: 0; } }
        
        .token { position: absolute; bottom: 0; transform: translateX(-50%); padding: 8px 12px; background: #334155; border-radius: 4px; color: white; }
        .target-token { border: 2px solid #38bdf8; }

        .qkv { position: absolute; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: white; transform: translate(-50%, -50%); opacity: 0; }
        .q { background: #2563eb; top: 70%; animation: q-up 1s 0.5s forwards; }
        .k { background: #d97706; top: 70%; animation: k-up 1s 1s forwards; }
        .v { background: #16a34a; top: 45%; animation: v-up 1s 1s forwards; }
        
        @keyframes q-up { from { opacity: 0; top: 90%; } to { opacity: 1; top: 70%; } }
        @keyframes k-up { from { opacity: 0; top: 90%; } to { opacity: 1; top: 70%; } }
        @keyframes v-up { from { opacity: 0; top: 90%; } to { opacity: 1; top: 45%; } }

        .score-line { stroke: #d97706; stroke-width: 2; stroke-dasharray: 5 5; animation: scoring 1.5s 3s forwards; opacity: 0; }
        @keyframes scoring { from { opacity: 0; } to { opacity: 1; } }

        .score-box { position: absolute; top: 52%; transform: translateX(-50%); padding: 4px 8px; background: #1e293b; color: #f59e0b; border-radius: 4px; opacity: 0; animation: fade-in 0.5s 4.5s forwards; }
        
        .softmax-box { position: absolute; top: 52%; left: 50%; transform: translateX(-50%); padding: 8px 16px; background: #be185d; color: white; border-radius: 4px; opacity: 0; animation: fade-in 0.5s 5.5s forwards, weight-highlight 1.5s 8s forwards; }
        
        .score-box:nth-of-type(2) { animation: fade-in 0.5s 4.5s forwards, weight-highlight 1.5s 8s forwards; }
        .qkv.v:nth-of-type(2) { animation: v-up 1s 1s forwards, weight-highlight 1.5s 8s forwards; }
        @keyframes weight-highlight { 0% {} 50% { transform: translate(-50%, -50%) scale(1.3); box-shadow: 0 0 20px #38bdf8; } 100% {}}

        .sum-line { stroke: #16a34a; stroke-width: 2; opacity: 0; animation: summing 1.5s 10.5s forwards; }
        @keyframes summing { from { opacity: 0; } to { opacity: 1; } }

        .output-box { position: absolute; top: 15%; left: 50%; transform: translate(-50%, -50%); padding: 12px 20px; background: #0891b2; color: white; border-radius: 4px; opacity: 0; animation: fade-in 0.5s 12s forwards; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};
