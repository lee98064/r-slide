import React from 'react';

const Arrow: React.FC<{ from: string, to: string, label?: string }> = ({ from, to, label }) => {
    // This is a simplified arrow component for demonstration.
    // In a real app, you might use SVG for better control.
    return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-500">{label && <span>{label}</span>}<i className="fa-solid fa-arrow-right"></i></div>
};

export const NeuralNetworkBasics: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-8 text-center">神經網路: 基礎原理</h1>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-around gap-12">
        {/* Left: Perceptron */}
        <div className="text-center w-full md:w-1/2">
          <h2 className="text-2xl text-white mb-6">人工神經元 (感知器)</h2>
          <div className="flex items-center justify-center gap-4 bg-slate-900/50 p-6 rounded-lg border border-slate-700">
            <div className="flex flex-col gap-2 text-lg">
                <span>input 1 ──</span>
                <span>input 2 ──</span>
                <span>input 3 ──</span>
            </div>
            <div className="w-24 h-24 bg-sky-500/30 border-2 border-sky-500 rounded-full flex items-center justify-center text-white text-xl font-bold">Math</div>
            <div className="text-lg"><span>── Output</span></div>
          </div>
          <p className="text-slate-400 mt-4">神經元接收輸入，進行數學運算，然後產生輸出。</p>
        </div>

        {/* Right: Network Layers */}
        <div className="text-center w-full md:w-1/2">
          <h2 className="text-2xl text-white mb-6">神經網路分層</h2>
           <div className="flex items-center justify-center gap-8 bg-slate-900/50 p-6 rounded-lg border border-slate-700">
                <div className="flex flex-col items-center gap-2">
                    <h3 className="font-bold text-amber-400">輸入層</h3>
                    <div className="w-4 h-4 rounded-full bg-amber-400"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-400"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-400"></div>
                </div>
                <i className="fa-solid fa-arrow-right text-2xl text-slate-500"></i>
                <div className="flex flex-col items-center gap-2">
                    <h3 className="font-bold text-sky-400">隱藏層</h3>
                    <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                    <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                    <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                    <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                </div>
                <i className="fa-solid fa-arrow-right text-2xl text-slate-500"></i>
                <div className="flex flex-col items-center gap-2">
                    <h3 className="font-bold text-green-400">輸出層</h3>
                    <div className="w-4 h-4 rounded-full bg-green-400"></div>
                    <div className="w-4 h-4 rounded-full bg-green-400"></div>
                </div>
           </div>
           <p className="text-slate-400 mt-4">多個神經元組成層，層層相連構成深度網路。</p>
        </div>
      </div>
    </div>
  );
};