import React from 'react';

export const ContextualEmbeddings: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-4 text-center">靜態 Embedding 的困境：多義詞</h1>
      <p className="text-slate-300 max-w-4xl text-center mb-12">
        Word2Vec 為每個詞只提供一個固定的向量，無論上下文如何。這對於擁有多種含義的詞 (多義詞) 來說是個大問題。
      </p>
      
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
            <p className="text-xl text-slate-300 mb-2">句子 1: He went to the <span className="text-amber-400 font-bold text-2xl">bank</span> to deposit money.</p>
            <p className="text-slate-400">(他去 <span className="text-amber-400">銀行</span> 存錢)</p>
        </div>

        <div className="relative flex items-center justify-center my-8 h-20">
            <div className="absolute w-40 text-center">
                <div className="bg-red-500/20 border-2 border-red-500 text-red-300 p-4 rounded-lg text-2xl font-bold font-mono animate-polysemy">bank</div>
            </div>
        </div>

        <div className="text-center">
            <p className="text-xl text-slate-300 mb-2">句子 2: He sat on the river <span className="text-amber-400 font-bold text-2xl">bank</span>.</p>
            <p className="text-slate-400">(他坐在 <span className="text-amber-400">河岸</span> 上)</p>
        </div>
      </div>

      <p className="mt-16 text-slate-300 text-xl max-w-3xl text-center">
        為了解決這個問題，我們需要 <strong className="text-sky-300">語境化嵌入 (Contextual Embeddings)</strong>，讓同一個詞在不同句子中能有不同的向量表示。
      </p>

      <style>{`
        @keyframes polysemy {
          0%, 100% { transform: translateY(-60px); }
          50% { transform: translateY(60px); }
        }
        .animate-polysemy {
          animation: polysemy 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};