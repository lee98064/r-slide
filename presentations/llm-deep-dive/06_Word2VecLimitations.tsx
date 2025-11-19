import React from 'react';

export const Word2VecLimitations: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10 text-left">
      <h1 className="text-5xl font-bold text-sky-400 mb-8 self-start">Word2Vec 的罩門：一詞多義</h1>
      <div className="text-3xl text-slate-300 max-w-5xl space-y-6">
        <p>Word2Vec 雖然強大，但它有一個致命的限制：<span className="text-red-400">每個詞只有一個固定的向量表示</span>，無論它出現在什麼樣的上下文中。</p>
        
        <div className="bg-slate-700 p-6 rounded-lg mt-6 text-2xl space-y-4">
            <p>這導致它無法處理<span className="text-yellow-400">多義詞 (Polysemy)</span> 的問題。</p>
            <div className="my-2 space-y-2">
                <p className="bg-slate-600 p-3 rounded-md">"I'm coding in <span className="text-green-400 font-bold">Python</span>." (程式語言)</p>
                <p className="bg-slate-600 p-3 rounded-md">"The <span className="text-green-400 font-bold">Python</span> slithered in the jungle." (蛇)</p>
            </div>
            <p>在 Word2Vec 中，這兩個 "Python" 會被映射到<span className="font-bold">完全相同的向量</span>，模型無法區分它們的真實含義。</p>
        </div>
        <p className="mt-6 text-sky-300">
            這個限制催生了新一代的<span className="text-green-400">語境式向量 (Contextual Embeddings)</span>，如 BERT 和 GPT，它們能根據上下文動態調整詞的向量表示。
        </p>
      </div>
    </div>
  );
};
