import React from 'react';

const ArchDiagram: React.FC<{ title: string; input: string[]; output: string; desc: string }> = ({ title, input, output, desc }) => (
    <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 w-full">
        <h3 className="text-xl font-bold text-sky-400 mb-6 text-center">{title}</h3>
        <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col gap-2 items-center">
                {input.map(i => <div key={i} className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-md">{i}</div>)}
            </div>
            <div className="flex flex-col items-center">
                 <i className="fa-solid fa-arrow-right-long text-3xl text-slate-500"></i>
                 <span className="text-xs text-slate-400 mt-1">預測</span>
            </div>
            <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-md">{output}</div>
        </div>
        <p className="text-slate-400 mt-6 text-center text-sm">{desc}</p>
    </div>
);


export const Word2Vec: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-4 text-center">Word2Vec: 讓機器「猜」語義</h1>
      <p className="text-slate-300 max-w-4xl text-center mb-10">
        Word2Vec (2013年) 是一個里程碑，它透過神經網路進行訓練，根據詞語在大量文本中的「共現模式」來推斷語義關聯。
      </p>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <ArchDiagram
            title="CBOW (Continuous Bag-of-Words)"
            input={["今天", "天氣", "好"]}
            output="真"
            desc="根據上下文的詞，預測中間的詞。"
        />
        <ArchDiagram
            title="Skip-gram"
            input={["真"]}
            output="今天, 天氣, 好"
            desc="根據中間的詞，預測上下文的詞。"
        />
      </div>
      <p className="mt-10 text-slate-400 max-w-3xl text-center">
        核心思想：「一個詞的意義取決於它周圍的詞。」 Word2Vec 依此學會了詞語的向量表示。
      </p>
    </div>
  );
};