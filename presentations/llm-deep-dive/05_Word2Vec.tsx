import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SENTENCE = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

export const Word2Vec: React.FC = () => {
  const [windowIndex, setWindowIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setWindowIndex((prev) => (prev + 1) % (SENTENCE.length - 2) + 1); // Keep window within bounds
    }, 2000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Window size = 1 (1 word left, 1 word right)
  const centerWord = SENTENCE[windowIndex];
  const leftContext = SENTENCE[windowIndex - 1];
  const rightContext = SENTENCE[windowIndex + 1];

  return (
    <div className="bg-slate-900 h-full w-full flex flex-col items-center justify-center p-10 text-left relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <h1 className="text-4xl font-bold text-sky-400 mb-8 z-10">Word2Vec：從上下文學習</h1>

      <div className="flex flex-col gap-12 w-full max-w-5xl z-10">

        {/* Sliding Window Visualization */}
        <div className="bg-slate-800/80 p-10 rounded-2xl border border-slate-700 shadow-2xl flex flex-col items-center">
          <div className="flex gap-4 text-3xl font-mono mb-12 flex-wrap justify-center">
            {SENTENCE.map((word, index) => {
              const isCenter = index === windowIndex;
              const isContext = index === windowIndex - 1 || index === windowIndex + 1;

              return (
                <motion.div
                  key={index}
                  animate={{
                    scale: isCenter ? 1.2 : isContext ? 1.1 : 1,
                    color: isCenter ? '#38bdf8' : isContext ? '#4ade80' : '#64748b',
                    opacity: isCenter || isContext ? 1 : 0.5
                  }}
                  className="relative px-2 py-1"
                >
                  {word}
                  {/* Sliding Window Box */}
                  {isCenter && (
                    <motion.div
                      layoutId="window-box"
                      className="absolute inset-0 -m-2 border-2 border-sky-500 rounded-lg bg-sky-500/10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Training Pairs Visualization */}
          <div className="flex gap-16 items-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-slate-400">Input (Center)</span>
              <motion.div
                key={`center-${windowIndex}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-sky-500/20 border border-sky-500 text-sky-300 px-6 py-3 rounded-lg text-2xl font-bold"
              >
                {centerWord}
              </motion.div>
            </div>

            <div className="flex flex-col items-center">
              <i className="fa-solid fa-arrow-right-long text-4xl text-slate-600"></i>
              <span className="text-xs text-slate-500 mt-1">Predicts</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-slate-400">Output (Context)</span>
              <div className="flex gap-4">
                <motion.div
                  key={`left-${windowIndex}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="bg-green-500/20 border border-green-500 text-green-300 px-6 py-3 rounded-lg text-2xl font-bold"
                >
                  {leftContext}
                </motion.div>
                <motion.div
                  key={`right-${windowIndex}`}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="bg-green-500/20 border border-green-500 text-green-300 px-6 py-3 rounded-lg text-2xl font-bold"
                >
                  {rightContext}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl text-green-400 mb-2 font-bold">核心思想</h3>
            <p className="text-slate-300 text-lg">
              <span className="italic">"You shall know a word by the company it keeps."</span>
              <br />
              一個詞的意義，取決於它身邊的鄰居。
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-center justify-between">
            <div>
              <h3 className="text-xl text-sky-400 mb-2 font-bold">訓練過程</h3>
              <p className="text-slate-300">
                模型不斷滑動窗口，學習預測上下文。
                <br />
                久而久之，常出現在相同上下文的詞，向量就會靠近。
              </p>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center transition-all shadow-lg"
            >
              <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-xl`}></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
