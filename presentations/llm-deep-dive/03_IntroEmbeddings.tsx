import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'animal' | 'food' | 'tech';

interface WordItem {
  id: string;
  text: string;
  category: Category;
  clusterPos: { x: number; y: number }; // Percentage 0-100
  randomPos: { x: number; y: number };
  vector: string;
}

const WORDS: WordItem[] = [
  // Animals (Top Left)
  { id: '1', text: 'Cat', category: 'animal', clusterPos: { x: 20, y: 20 }, randomPos: { x: 10, y: 80 }, vector: '[0.2, 0.9, 0.1]' },
  { id: '2', text: 'Dog', category: 'animal', clusterPos: { x: 25, y: 25 }, randomPos: { x: 80, y: 10 }, vector: '[0.2, 0.8, 0.2]' },
  { id: '3', text: 'Rabbit', category: 'animal', clusterPos: { x: 15, y: 28 }, randomPos: { x: 40, y: 50 }, vector: '[0.3, 0.8, 0.1]' },

  // Food (Bottom Center)
  { id: '4', text: 'Pizza', category: 'food', clusterPos: { x: 50, y: 75 }, randomPos: { x: 90, y: 90 }, vector: '[0.9, 0.1, 0.1]' },
  { id: '5', text: 'Burger', category: 'food', clusterPos: { x: 55, y: 80 }, randomPos: { x: 20, y: 20 }, vector: '[0.8, 0.2, 0.1]' },
  { id: '6', text: 'Apple', category: 'food', clusterPos: { x: 45, y: 70 }, randomPos: { x: 60, y: 30 }, vector: '[0.8, 0.1, 0.2]' },

  // Tech (Top Right)
  { id: '7', text: 'Computer', category: 'tech', clusterPos: { x: 80, y: 20 }, randomPos: { x: 10, y: 10 }, vector: '[0.1, 0.1, 0.9]' },
  { id: '8', text: 'AI', category: 'tech', clusterPos: { x: 85, y: 15 }, randomPos: { x: 50, y: 60 }, vector: '[0.1, 0.2, 0.9]' },
  { id: '9', text: 'Robot', category: 'tech', clusterPos: { x: 75, y: 25 }, randomPos: { x: 30, y: 90 }, vector: '[0.2, 0.1, 0.8]' },
];

export const IntroEmbeddings: React.FC = () => {
  const [isClustered, setIsClustered] = useState(false);
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-8 overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="z-10 max-w-6xl w-full flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-4 text-center"
        >
          Embedding: 賦予文字座標
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-xl text-center mb-8 max-w-3xl"
        >
          電腦看不懂文字，但看得懂數字。Embedding 將文字轉換為高維空間中的向量，
          讓語義相近的詞在空間中彼此靠近。
        </motion.p>

        {/* Interactive Visualization Area */}
        <div className="relative w-full max-w-4xl h-[400px] bg-slate-800/50 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden mb-8">

          {/* Axis Labels (Only visible in Clustered mode) */}
          <AnimatePresence>
            {isClustered && (
              <>
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute bottom-4 left-4 text-xs text-slate-500 font-mono"
                >
                  Feature Dimension 1 →
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute bottom-4 left-4 text-xs text-slate-500 font-mono origin-bottom-left -rotate-90 translate-y-[-20px]"
                >
                  Feature Dimension 2 →
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Words */}
          {WORDS.map((word) => (
            <motion.div
              key={word.id}
              layout
              initial={false}
              animate={{
                left: isClustered ? `${word.clusterPos.x}%` : `${word.randomPos.x}%`,
                top: isClustered ? `${word.clusterPos.y}%` : `${word.randomPos.y}%`,
                scale: hoveredWord === word.id ? 1.2 : 1,
                zIndex: hoveredWord === word.id ? 50 : 1,
              }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              className={`absolute cursor-pointer px-4 py-2 rounded-full shadow-lg border transition-colors duration-300
                ${word.category === 'animal' ? 'bg-rose-500/20 border-rose-500/50 text-rose-200' : ''}
                ${word.category === 'food' ? 'bg-amber-500/20 border-amber-500/50 text-amber-200' : ''}
                ${word.category === 'tech' ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-200' : ''}
              `}
              onMouseEnter={() => setHoveredWord(word.id)}
              onMouseLeave={() => setHoveredWord(null)}
            >
              <span className="font-bold">{word.text}</span>

              {/* Tooltip for Vector */}
              <AnimatePresence>
                {hoveredWord === word.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-slate-900 text-xs font-mono text-slate-300 px-2 py-1 rounded border border-slate-600 whitespace-nowrap z-50 pointer-events-none"
                  >
                    {word.vector}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex gap-4">
          <button
            onClick={() => setIsClustered(false)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${!isClustered ? 'bg-slate-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            <i className="fa-solid fa-shuffle mr-2"></i>
            Random Input
          </button>
          <button
            onClick={() => setIsClustered(true)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${isClustered ? 'bg-sky-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            <i className="fa-solid fa-magnet mr-2"></i>
            Apply Embedding
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          * 試著切換模式，觀察「動物」、「食物」、「科技」如何自動分群
        </p>
      </div>
    </div>
  );
};