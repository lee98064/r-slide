import React from 'react';

const Stage: React.FC<{ number: number, title: string, icon: string, children: React.ReactNode }> = ({ number, title, icon, children }) => (
    <div className="w-full bg-slate-900/50 p-8 rounded-lg border border-slate-700">
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-sky-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">{number}</div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <div className="flex items-center gap-6">
            <i className={`fa-solid ${icon} text-6xl text-sky-400 w-16 text-center`}></i>
            <div className="text-slate-300">{children}</div>
        </div>
    </div>
);

export const TrainingProcess: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">語言模型的訓練兩階段</h1>
      <div className="w-full max-w-4xl space-y-8">
        <Stage number={1} title="預訓練 (Pre-training)" icon="fa-book-open">
            <p>在大量的、未標註的文本資料 (如整個網路) 上學習語言的通用規則、語法、語義和常識。這個階段成本高昂，奠定模型的基礎能力。</p>
        </Stage>
        <div className="flex justify-center">
            <i className="fa-solid fa-arrow-down text-4xl text-slate-600"></i>
        </div>
        <Stage number={2} title="微調 (Fine-tuning)" icon="fa-user-pen">
            <p>使用特定領域或任務的、較小規模的標註資料集，對預訓練好的模型進行調整，使其適應該任務，例如客服問答、法律文件摘要等。</p>
        </Stage>
      </div>
    </div>
  );
};