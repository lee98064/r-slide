import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BagOfWords: React.FC = () => {
  const [sentence, setSentence] = useState<string>("I love cats and cats love me");
  const [isProcessing, setIsProcessing] = useState(false);
  const [bag, setBag] = useState<Record<string, number>>({});

  const processSentence = () => {
    setIsProcessing(true);
    setBag({});

    const words = sentence.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);

    let currentBag: Record<string, number> = {};

    words.forEach((word, index) => {
      setTimeout(() => {
        currentBag = { ...currentBag, [word]: (currentBag[word] || 0) + 1 };
        setBag({ ...currentBag });
        if (index === words.length - 1) setIsProcessing(false);
      }, index * 500);
    });
  };

  return (
    <div className="bg-slate-900 h-full w-full flex flex-col items-center justify-center p-10 text-left relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <h1 className="text-4xl font-bold text-sky-400 mb-8 z-10">Bag-of-Words (詞袋模型)</h1>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl z-10">
        {/* Left: Input Area */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl text-slate-300 mb-4 font-semibold">1. 輸入句子</h3>
            <div className="flex gap-2 mb-4">
              <button onClick={() => setSentence("I love cats and cats love me")} className="px-3 py-1 bg-slate-700 rounded text-sm hover:bg-slate-600 transition">Example A</button>
              <button onClick={() => setSentence("A dog bit a man")} className="px-3 py-1 bg-slate-700 rounded text-sm hover:bg-slate-600 transition">Example B</button>
            </div>
            <input
              type="text"
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
              className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white text-lg focus:ring-2 focus:ring-sky-500 outline-none"
            />
            <button
              onClick={processSentence}
              disabled={isProcessing}
              className="mt-4 w-full bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 disabled:text-slate-500 text-white py-2 rounded-lg font-medium transition-colors"
            >
              {isProcessing ? 'Processing...' : '丟進詞袋 (Process)'}
            </button>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl text-slate-300 mb-2 font-semibold">核心概念</h3>
            <p className="text-slate-400 leading-relaxed">
              Bag-of-Words 只在乎<span className="text-yellow-400 font-bold mx-1">詞頻</span>，完全忽略<span className="text-red-400 font-bold mx-1">語序</span>。
              <br />
              "I love cats" 和 "Cats love I" 在這裡是一模一樣的。
            </p>
          </div>
        </div>

        {/* Right: The Bag Visualization */}
        <div className="flex-1 bg-slate-800/80 p-8 rounded-xl border-2 border-dashed border-slate-600 flex flex-col items-center relative min-h-[400px]">
          <h3 className="text-2xl text-slate-300 mb-8 font-bold flex items-center gap-2">
            <i className="fa-solid fa-sack-dollar text-amber-400"></i> The Bag
          </h3>

          <div className="flex flex-wrap justify-center gap-4 content-start w-full">
            <AnimatePresence>
              {Object.entries(bag).map(([word, count]) => (
                <motion.div
                  key={word}
                  initial={{ scale: 0, y: 50, rotate: Math.random() * 30 - 15 }}
                  animate={{ scale: 1, y: 0, rotate: 0 }}
                  className="bg-slate-700 border border-slate-500 px-4 py-3 rounded-lg shadow-lg flex items-center gap-3"
                >
                  <span className="text-xl text-white font-mono">{word}</span>
                  <span className="bg-sky-500 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[24px] text-center">
                    {count}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>

            {Object.keys(bag).length === 0 && !isProcessing && (
              <div className="text-slate-500 italic mt-20">詞袋是空的...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
