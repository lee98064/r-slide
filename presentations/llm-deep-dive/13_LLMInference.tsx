import React from 'react';

export const LLMInference: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-6 text-center">LLM 如何生成文本：「機率選字遊戲」</h1>
      <p className="text-slate-300 max-w-4xl text-center text-xl mb-12">
        LLM 的生成過程是「自回歸 (autoregressive)」的，也就是一次預測一個 token，然後將預測結果加到輸入中，再進行下一次預測。
      </p>
      
      <div className="w-full max-w-4xl bg-slate-900/50 p-8 rounded-lg border border-slate-700">
        <div className="font-mono text-3xl text-white p-4 bg-slate-800 rounded-md">
          <span>The quick brown fox </span>
          <span className="generation-animation"></span>
        </div>
      </div>
      
      <p className="mt-12 text-slate-400 max-w-3xl text-center">
        這個循序漸進的過程，就像一場永無止境的文字接龍，直到模型生成結束符號或達到長度限制為止。
      </p>

      <style>{`
        .generation-animation::after {
          content: '';
          animation: generation 8s steps(1) infinite;
          display: inline-block;
          border-right: 3px solid #f59e0b; /* Blinking cursor */
          vertical-align: bottom;
        }

        @keyframes generation {
          0% { content: 'jumps'; }
          12.5% { content: 'jumps '; }
          25% { content: 'jumps over'; }
          37.5% { content: 'jumps over '; }
          50% { content: 'jumps over the'; }
          62.5% { content: 'jumps over the '; }
          75% { content: 'jumps over the lazy'; }
          87.5% { content: 'jumps over the lazy '; }
          100% { content: 'jumps over the lazy dog'; }
        }
      `}</style>
    </div>
  );
};