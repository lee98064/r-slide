import React from 'react';

export const Word2Vec: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10 text-left">
      <h1 className="text-5xl font-bold text-sky-400 mb-8 self-start">Word2Vec：讓詞語產生關聯</h1>
      <div className="text-3xl text-slate-300 max-w-5xl space-y-6">
        <p>Word2Vec 的核心精神是：<span className="text-yellow-400">「一個詞的意思，可以由它周圍的詞來決定。」</span></p>
        <p>模型透過閱讀大量文本，學習哪些詞經常一起出現，從而將它們在語義地圖上拉近。</p>
        
        <div className="bg-slate-700 p-6 rounded-lg mt-6 text-2xl">
            <h2 className="text-3xl text-green-400 mb-3">語義運算：向量的奇妙數學</h2>
            <p>最經典的例子就是，向量之間可以進行類比推理：</p>
            <div className="my-4 bg-slate-600 p-4 rounded-md text-center font-mono">
                <span className="text-sky-300">vector('king')</span> 
                <span className="text-red-400"> - </span> 
                <span className="text-sky-300">vector('man')</span> 
                <span className="text-green-400"> + </span> 
                <span className="text-sky-300">vector('woman')</span> 
                <span className="text-yellow-400"> ≈ </span> 
                <span className="text-purple-400">vector('queen')</span>
            </div>
            <p className="text-slate-400">這代表模型從數據中學會了「國王」與「皇后」之間的性別差異，類似於「男人」與「女人」的差異。</p>
        </div>
      </div>
    </div>
  );
};
