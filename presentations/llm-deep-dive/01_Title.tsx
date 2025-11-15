import React from 'react';

export const Title: React.FC = () => {
  return (
    <div 
      className="h-full w-full flex flex-col items-center justify-center p-10 text-white relative bg-slate-900 overflow-hidden"
    >
        <div className="absolute inset-0 bg-grid-slate-700/[0.05] bg-[length:40px_40px]"></div>
        <div 
            className="absolute -bottom-60 -right-60 w-[40rem] h-[40rem] bg-sky-500 rounded-full opacity-10 blur-3xl animate-pulse"
            style={{ animationDuration: '8s' }}
        ></div>
        <div 
            className="absolute -top-60 -left-60 w-[40rem] h-[40rem] bg-indigo-500 rounded-full opacity-10 blur-3xl animate-pulse"
             style={{ animationDuration: '8s', animationDelay: '2s' }}
        ></div>

        <div className="text-center relative z-10 flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 mb-6 inline-block">
                <i className="fa-solid fa-brain text-5xl text-sky-300"></i>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white">
                LLM 原理深入解析
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-slate-300 font-light max-w-3xl">
                深入探討 Embedding、Transformer 與幻覺現象
            </p>
        </div>
    </div>
  );
};