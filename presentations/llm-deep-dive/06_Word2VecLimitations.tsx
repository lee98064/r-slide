import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Word2VecLimitations: React.FC = () => {
  const [viewMode, setViewMode] = useState<'static' | 'contextual'>('static');

  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10 text-left relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <h1 className="text-4xl font-bold text-sky-400 mb-8 z-10">Word2Vec 的罩門：一詞多義 (Polysemy)</h1>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl z-10 items-center">

        {/* Left: Sentences */}
        <div className="flex-1 space-y-6">
          <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 shadow-lg">
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-bold">Context A</span>
              <p className="text-xl text-slate-200">"I ate a sweet <span className="text-red-400 font-bold">Apple</span>."</p>
            </div>
            <p className="text-sm text-slate-500 pl-20">Meaning: Fruit</p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 shadow-lg">
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-bold">Context B</span>
              <p className="text-xl text-slate-200">"I bought <span className="text-red-400 font-bold">Apple</span> stock."</p>
            </div>
            <p className="text-sm text-slate-500 pl-20">Meaning: Company</p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 mt-8">
            <h3 className="text-lg text-yellow-400 font-bold mb-2">問題所在</h3>
            <p className="text-slate-300">
              在 Word2Vec (Static Embedding) 中，每個詞只有<span className="text-red-400 font-bold mx-1">唯一</span>的向量。
              無論上下文是什麼，"Apple" 永遠在同一個位置。
            </p>
          </div>
        </div>

        {/* Right: Vector Space Visualization */}
        <div className="flex-1 h-[400px] bg-slate-800/80 rounded-2xl border border-slate-600 relative overflow-hidden flex items-center justify-center">
          {/* Axis */}
          <div className="absolute w-full h-[1px] bg-slate-600"></div>
          <div className="absolute h-full w-[1px] bg-slate-600"></div>

          {/* Other Words */}
          <div className="absolute top-1/4 left-1/4 text-slate-600 text-xs">Banana</div>
          <div className="absolute bottom-1/4 right-1/4 text-slate-600 text-xs">Microsoft</div>

          {/* The Apple(s) */}
          <motion.div
            layout
            initial={false}
            animate={{
              x: viewMode === 'static' ? 0 : -80,
              y: viewMode === 'static' ? 0 : -50,
              scale: 1.2
            }}
            className="absolute flex flex-col items-center z-10"
          >
            <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)]"></div>
            <span className="text-red-300 font-bold mt-1 text-sm bg-slate-900/80 px-1 rounded">Apple (Fruit)</span>
          </motion.div>

          <motion.div
            layout
            initial={false}
            animate={{
              x: viewMode === 'static' ? 0 : 80, // Collision in static mode
              y: viewMode === 'static' ? 0 : 50,
              scale: 1.2
            }}
            className="absolute flex flex-col items-center z-20" // Higher z-index to show overlap
          >
            <div className={`w-4 h-4 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)] ${viewMode === 'static' ? 'bg-red-500 opacity-50' : 'bg-red-500'}`}></div>
            <span className={`text-red-300 font-bold mt-1 text-sm bg-slate-900/80 px-1 rounded ${viewMode === 'static' ? 'opacity-0' : 'opacity-100'}`}>Apple (Tech)</span>
          </motion.div>

          {/* Collision Indicator */}
          {viewMode === 'static' && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              className="absolute text-yellow-400 font-bold text-xl pointer-events-none z-30 -mt-8"
            >
              <i className="fa-solid fa-triangle-exclamation"></i> Collision!
            </motion.div>
          )}

          {/* Toggle Control */}
          <div className="absolute bottom-6 flex gap-2 bg-slate-900/90 p-1 rounded-lg border border-slate-700">
            <button
              onClick={() => setViewMode('static')}
              className={`px-4 py-2 rounded text-sm font-medium transition-all ${viewMode === 'static' ? 'bg-red-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Word2Vec (Static)
            </button>
            <button
              onClick={() => setViewMode('contextual')}
              className={`px-4 py-2 rounded text-sm font-medium transition-all ${viewMode === 'contextual' ? 'bg-green-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              BERT/GPT (Contextual)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
