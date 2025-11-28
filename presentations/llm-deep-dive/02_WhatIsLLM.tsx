import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CyclingText = () => {
  const words = ["台北", "公司附近", "一家新開的店"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block min-w-[300px] text-center border-b-2 border-yellow-400 mx-2 text-yellow-300 relative h-[1.2em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="absolute left-0 right-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export const WhatIsLLM: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10 text-left">
      <h1
        className="text-6xl font-bold text-sky-400 mb-12 self-start"
      >
        什麼是大型語言模型 (LLM)？
      </h1>

      <div className="text-3xl text-slate-300 max-w-6xl space-y-10">
        <p
          className="leading-relaxed"
        >
          本質上，它是一個大型的
          <motion.span
            className="text-yellow-400 inline-block mx-3 font-bold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            「猜猜樂」
          </motion.span>
          與
          <motion.span
            className="text-yellow-400 inline-block mx-3 font-bold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1, ease: "easeInOut" }}
          >
            「接龍遊戲」
          </motion.span>
          。
        </p>

        <p
          className="leading-relaxed"
        >
          語言模型 (Language Model) 是一種統計模型，能根據「已經看到的文字」預測「下一個最可能出現的詞」。
        </p>

        <div
          className="bg-slate-700 p-8 rounded-xl mt-8 text-2xl shadow-2xl border border-slate-600"
        >
          <p className="text-slate-400 mb-6">例如：</p>
          <div className="text-4xl font-mono bg-slate-800 p-6 rounded-lg mb-8 flex items-center flex-wrap shadow-inner">
            <span>「我今天去</span>
            <CyclingText />
            <span>吃拉麵」</span>
          </div>

          <div
            className="space-y-4"
          >
            <p className="text-slate-300">
              模型會根據看過的無數句子，預測空格中可能是「台北」、「公司附近」或「一家新開的店」。
            </p>
            <p className="text-sky-300 font-bold text-3xl mt-6">
              這種「填空」與「接龍」的能力，就是語言模型的基礎邏輯。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
