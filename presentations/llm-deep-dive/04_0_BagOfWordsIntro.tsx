import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VOCABULARY = ["AI", "Love", "Future", "Robot"];
const INPUT_SENTENCE = "I love AI and I love future";

export const BagOfWordsIntro: React.FC = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(-1);
    const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const inputWords = INPUT_SENTENCE.split(' ');

    const startProcessing = () => {
        setIsProcessing(true);
        setIsFinished(false);
        setCounts([0, 0, 0, 0]);
        setCurrentWordIndex(-1);

        inputWords.forEach((word, index) => {
            setTimeout(() => {
                setCurrentWordIndex(index);

                // Clean word: remove punctuation, keep letters
                const cleanWord = word.replace(/[^a-zA-Z]/g, '');

                // Case-insensitive match
                const vocabIndex = VOCABULARY.findIndex(v => v.toLowerCase() === cleanWord.toLowerCase());

                if (vocabIndex !== -1) {
                    setCounts(prev => {
                        const newCounts = [...prev];
                        newCounts[vocabIndex]++;
                        return newCounts;
                    });
                }

                if (index === inputWords.length - 1) {
                    setTimeout(() => {
                        setIsProcessing(false);
                        setIsFinished(true);
                        setCurrentWordIndex(-1);
                    }, 1000);
                }
            }, index * 800 + 500);
        });
    };

    return (
        <div className="bg-slate-900 h-full w-full flex flex-col items-center justify-center p-10 text-left relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <h1 className="text-4xl font-bold text-sky-400 mb-6 z-10">什麼是 Bag-of-Words？</h1>

            <div className="max-w-4xl text-slate-300 text-lg text-center mb-10 z-10 leading-relaxed">
                <p>
                    <span className="font-bold text-sky-300">詞袋模型 (Bag-of-Words)</span> 是一種將文本轉換為向量的簡單方法。
                    <br />
                    它<span className="text-white font-bold">忽略語法和詞序</span>，只關注詞彙在句子中<span className="text-white font-bold">出現的頻率</span>。
                    就像把所有字丟進一個袋子裡搖一搖，只數每個字有幾個！
                </p>
            </div>

            <div className="flex flex-col gap-10 w-full max-w-5xl z-10 items-center">

                {/* Step 1: Input Sentence */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full text-center">
                    <h3 className="text-slate-400 text-sm mb-4 uppercase tracking-wider">步驟 1: 輸入文本 (Input Text)</h3>
                    <div className="flex justify-center gap-3 text-3xl font-bold flex-wrap font-mono">
                        {inputWords.map((word, i) => (
                            <motion.span
                                key={i}
                                animate={{
                                    color: i === currentWordIndex ? '#38bdf8' : '#e2e8f0',
                                    scale: i === currentWordIndex ? 1.3 : 1,
                                    textShadow: i === currentWordIndex ? "0 0 15px #38bdf8" : "none"
                                }}
                                className="transition-colors"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>
                </div>

                <i className="fa-solid fa-arrow-down text-3xl text-slate-600"></i>

                {/* Step 2: Vocabulary & Counting */}
                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 w-full">
                    <h3 className="text-slate-400 text-sm mb-6 text-center uppercase tracking-wider">步驟 2: 統計詞頻 (Vocabulary & Count)</h3>

                    <div className="flex justify-center gap-8">
                        {VOCABULARY.map((vocabWord, i) => (
                            <div key={vocabWord} className="flex flex-col items-center gap-3">
                                <div className="text-xl text-slate-300 font-bold font-mono">{vocabWord}</div>
                                <div className={`w-20 h-24 rounded-lg border-2 flex items-center justify-center relative overflow-hidden shadow-inner transition-colors duration-300
                            ${counts[i] > 0 ? 'bg-sky-900/30 border-sky-500/50' : 'bg-slate-700 border-slate-600'}
                        `}>
                                    <AnimatePresence mode='popLayout'>
                                        <motion.span
                                            key={counts[i]}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            className={`text-4xl font-mono font-bold absolute ${counts[i] > 0 ? 'text-sky-400' : 'text-slate-500'}`}
                                        >
                                            {counts[i]}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <i className="fa-solid fa-arrow-down text-3xl text-slate-600"></i>

                {/* Step 3: Vector Output */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full flex flex-col items-center">
                    <h3 className="text-slate-400 text-sm mb-4 uppercase tracking-wider">步驟 3: 生成向量 (Generate Vector)</h3>

                    <div className="flex items-center gap-6">
                        <span className="text-slate-400">各詞彙次數 (Counts)</span>
                        <i className="fa-solid fa-arrow-right text-slate-600"></i>
                        <div className={`px-8 py-4 rounded-lg border shadow-[0_0_15px_rgba(14,165,233,0.1)] transition-colors duration-500
                            ${isFinished ? 'bg-sky-900/20 border-sky-500' : 'bg-slate-950 border-slate-700'}
                        `}>
                            <span className={`text-3xl font-mono tracking-widest ${isFinished ? 'text-sky-400' : 'text-slate-500'}`}>
                                [ {counts.join(', ')} ]
                            </span>
                        </div>
                    </div>
                    <p className="text-slate-500 text-sm mt-4">
                        向量的每一個數字，對應上方詞彙的出現次數。
                    </p>
                </div>

                {/* Control */}
                <div className="h-16 flex items-center">
                    {!isProcessing ? (
                        <button
                            onClick={startProcessing}
                            className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105 text-lg flex items-center gap-2"
                        >
                            <i className={`fa-solid ${isFinished ? 'fa-rotate-right' : 'fa-play'}`}></i>
                            {isFinished ? '再看一次 (Replay)' : '開始運算 (Start)'}
                        </button>
                    ) : (
                        <span className="text-sky-400 animate-pulse font-mono">Processing...</span>
                    )}
                </div>

            </div>
        </div>
    );
};
