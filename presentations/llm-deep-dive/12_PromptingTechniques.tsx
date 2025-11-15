import React from 'react';

const PromptBox: React.FC<{ isGood: boolean; title: string; prompt: string; explanation: string }> = ({ isGood, title, prompt, explanation }) => (
    <div className={`bg-slate-900/50 p-6 rounded-lg border-2 ${isGood ? 'border-green-500/50' : 'border-red-500/50'}`}>
        <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isGood ? 'text-green-400' : 'text-red-400'}`}>
            <i className={`fa-solid ${isGood ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
            {title}
        </h3>
        <p className="font-mono text-slate-300 bg-slate-800 p-3 rounded-md">"{prompt}"</p>
        <p className="text-slate-400 mt-4 text-sm">{explanation}</p>
    </div>
);

export const PromptingTechniques: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-4 text-center">引導 AI：有效的提示技巧</h1>
      <p className="text-slate-300 max-w-4xl text-center mb-10">
        為什麼不該用負面詞語下指令？因為 LLM 是透過關聯性來學習的，提及一個詞（即使是否定它）反而會增加它在回應中出現的機率。
      </p>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <PromptBox 
            isGood={false}
            title="避免 (Don't)"
            prompt="寫一篇關於寵物的文章，不要提到狗。"
            explanation="模型在處理「不要」時可能會遇到困難，因為「狗」這個詞在統計上被激活了，反而可能讓模型圍繞著它來寫作，或產生奇怪的迴避行為。"
        />
        <PromptBox 
            isGood={true}
            title="建議 (Do)"
            prompt="寫一篇關於常見家庭寵物的文章，請專注於貓和鳥。"
            explanation="直接、正面地說明你想要什麼。這為模型提供了清晰的目標，讓它能夠專注於生成相關內容，而不是避開某些內容。"
        />
      </div>
        <p className="mt-8 text-slate-400 max-w-3xl text-center">
            <strong>結論：</strong>與其告訴模型「不要做什麼」，不如清楚地告訴它「要做什麼」。
        </p>
    </div>
  );
};
