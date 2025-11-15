import React from 'react';

const CauseCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 h-full">
        <div className="flex items-center gap-4 mb-3">
            <i className={`fa-solid ${icon} text-3xl text-sky-400 w-8 text-center`}></i>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-slate-400">{children}</p>
    </div>
);

export const CausesOfHallucination: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">幻覺現象的成因</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <CauseCard icon="fa-dice" title="機率性預測的本質">
            LLM 的目標是預測下一個最可能的詞，而不是陳述事實。這使得它在知識不確定時傾向於「編造」。
        </CauseCard>
        <CauseCard icon="fa-calendar-xmark" title="訓練資料的限制">
            模型不知道訓練資料截止日期之後發生的事 (知識過時)，且訓練資料中可能本身就包含錯誤或偏見的資訊。
        </CauseCard>
        <CauseCard icon="fa-ruler-horizontal" title="上下文長度限制">
            當對話或文件過長，超出模型的上下文視窗時，它會「忘記」前面的內容，導致前後矛盾或資訊斷裂。
        </CauseCard>
        <CauseCard icon="fa-pen-ruler" title="模糊的提示 (Prompt)">
            如果使用者的問題不明確、模稜兩可或帶有引導性，模型可能會誤解意圖，從而產生不相關或錯誤的答案。
        </CauseCard>
      </div>
    </div>
  );
};
