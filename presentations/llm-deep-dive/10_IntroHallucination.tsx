import React from 'react';

export const IntroHallucination: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex items-center justify-center p-10">
      <div className="w-1/2 flex flex-col justify-center pr-10">
        <h1 className="text-5xl font-bold text-sky-400 mb-6">什麼是「幻覺」？</h1>
        <p className="text-xl text-slate-300 leading-relaxed">
          在 AI 領域，「幻覺 (Hallucination)」是指模型生成看似合理但實際上是<strong>錯誤的、虛構的或與來源資料無關</strong>的回應。
        </p>
        <p className="mt-6 text-slate-400">
          這不是因為模型「說謊」，而是因為它從根本上是一個機率預測機器。當它缺乏足夠的資訊或內部知識不一致時，它會「編造」出統計上最可能的答案，即使這個答案在現實世界中是錯的。
        </p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="relative">
          <i className="fa-solid fa-robot text-9xl text-slate-600"></i>
          <div className="absolute -top-10 -right-20 bg-slate-700 p-4 rounded-lg shadow-lg animate-bubble">
            <p className="text-white">"月球是起司做的！"</p>
            <div className="absolute left-4 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-slate-700"></div>
          </div>
        </div>
      </div>
       <style>{`
        @keyframes bubble {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        .animate-bubble {
          animation: bubble 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
