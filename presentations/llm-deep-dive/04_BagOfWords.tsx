import React from 'react';

export const BagOfWords: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10 text-left">
      <h1 className="text-5xl font-bold text-sky-400 mb-8 self-start">早期做法：Bag-of-Words (詞袋模型)</h1>
      <div className="text-3xl text-slate-300 max-w-5xl space-y-6">
        <p>這是一種非常早期的文字向量化方法。</p>
        <p>它的核心思想是：<span className="text-yellow-400">不管詞語的順序，只在乎「哪些詞出現了」以及「出現了幾次」</span>。</p>
        
        <div className="bg-slate-700 p-6 rounded-lg mt-6 text-2xl">
            <p>在 Bag-of-Words 的眼中，下面這兩句話幾乎沒有差別，因為它們包含的詞是相同的：</p>
            <div className="my-4 space-y-2">
                <p className="bg-slate-600 p-3 rounded-md">"I love cats"</p>
                <p className="bg-slate-600 p-3 rounded-md">"Cats love I"</p>
            </div>
            <p className="text-red-400 font-bold">
                這種方法完全忽略了語法和語序，因此無法真正理解句子的深層含義。
            </p>
        </div>
      </div>
    </div>
  );
};
