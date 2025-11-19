import React from 'react';

export const TokenizationIntro: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10 text-left">
      <h1 className="text-6xl font-bold text-sky-400 mb-8 self-start">Tokenization 是什麼？</h1>
      <div className="text-3xl text-slate-300 max-w-5xl space-y-6">
        <p>簡單來說，就是把人類的句子，切成一塊一塊<span className="text-yellow-400">「積木」</span>，讓模型更容易處理。</p>
        <p>這些「積木」就是 <span className="text-green-400">Token</span>，是語言模型運算的最小單位。</p>
        <div className="bg-slate-700 p-6 rounded-lg mt-6 text-2xl">
            <p className="text-slate-400">一句話在模型眼中，會被拆解：</p>
            <p className="mt-2">「我今天想吃拉麵」</p>
            <p className="mt-4 text-center text-yellow-300">
                <span className="border-2 border-sky-500 rounded-md p-2 m-1">我</span>
                <span className="border-2 border-sky-500 rounded-md p-2 m-1">今天</span>
                <span className="border-2 border-sky-500 rounded-md p-2 m-1">想</span>
                <span className="border-2 border-sky-500 rounded-md p-2 m-1">吃</span>
                <span className="border-2 border-sky-500 rounded-md p-2 m-1">拉麵</span>
            </p>
            <p className="mt-4 text-sky-300">Token 不完全等於「一個字」或「一個詞」，而是模型為了方便計算，所採用的一種切分方式。</p>
        </div>
      </div>
    </div>
  );
};
