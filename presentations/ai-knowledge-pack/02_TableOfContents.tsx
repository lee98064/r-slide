import React from 'react';

const PhaseItem: React.FC<{ number: number; title: string; items: string[] }> = ({ number, title, items }) => (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-sky-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10">
        <h3 className="text-xl font-bold text-sky-400 mb-3">第 {['一', '二', '三', '四', '五', '六'][number - 1]} 階段: {title}</h3>
        <ul className="space-y-2 text-slate-300">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <i className="fa-solid fa-check-circle text-sky-500 mt-1 mr-2"></i>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export const TableOfContents: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center p-10 overflow-y-auto custom-scrollbar">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">目錄</h1>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PhaseItem number={1} title="AI與神經網路入門" items={["什麼是 AI？", "什麼是大型語言模型 (LLM)？", "神經網路的基礎原理", "神經網路的三大天王"]} />
        <PhaseItem number={2} title="自然語言處理" items={["NLP 基礎介紹", "Tokenization 是什麼？", "從 Embedding 到語義理解", "注意力機制 vs 自注意力機制"]} />
        <PhaseItem number={3} title="語言模型的訓練與推論" items={["BERT vs GPT", "預訓練與微調語言模型", "推論時到底發生了什麼事？", "小模型 vs 大模型差異"]} />
        <PhaseItem number={4} title="模型優化進階技術" items={["RAG: 檢索增強生成", "剪枝、量化與知識蒸餾", "MoE: 混合專家模型"]} />
        <PhaseItem number={5} title="AI Agent 與模型協作" items={["人機協同的三種模式", "MCP 技術介紹", "A2A 和 MCP"]} />
        <PhaseItem number={6} title="企業實務應用部署" items={["地端模型的優勢與挑戰", "企業應用與產品化部署實務", "雲地整合的關鍵價值"]} />
      </div>
    </div>
  );
};