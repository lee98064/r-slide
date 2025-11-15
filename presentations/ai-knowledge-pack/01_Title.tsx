import React from 'react';

export const Title: React.FC = () => {
  return (
    <div 
      className="h-full w-full flex flex-col items-center justify-center p-10 text-white relative bg-slate-900 overflow-hidden"
    >
        <div className="absolute inset-0 bg-grid-slate-700/[0.1] bg-[length:30px_30px]"></div>
        <div 
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-sky-500 rounded-full opacity-20 blur-3xl"
        ></div>
        <div 
            className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"
        ></div>

        <div className="text-center relative z-10 flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 mb-8 flex items-center justify-center w-40 h-40">
                <span className="text-7xl font-bold text-white tracking-tighter">
                    P<span className="text-sky-400">DA</span>
                </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-down" style={{animationDelay: '0.2s'}}>
                AI 知識大禮包
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-slate-300 font-light max-w-3xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                從入門到精通，把 AI 核心觀念一次打包帶走！
            </p>
            <p className="mt-4 text-slate-400 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                AI 的技術變化迅速，但底層原理從不複雜——只需要被好好整理。
            </p>
        </div>
        <style>{`
            @keyframes fade-in-down {
                0% { opacity: 0; transform: translateY(-20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes fade-in-up {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-down { animation: fade-in-down 0.5s ease-out forwards; }
            .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
        `}</style>
    </div>
  );
};