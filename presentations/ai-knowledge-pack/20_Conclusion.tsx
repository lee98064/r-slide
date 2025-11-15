import React from 'react';

export const Conclusion: React.FC = () => {
  return (
    <div className="bg-slate-900 h-full w-full flex flex-col items-center justify-center p-10 relative overflow-hidden">
        <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
            style={{ backgroundImage: 'url(https://picsum.photos/seed/aifuture/1280/720)' }}
        ></div>
      <div className="text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 mb-6 inline-block">
            <span className="text-5xl font-bold text-white tracking-tighter">
                myP<span className="text-sky-400">DA</span> to PROSUMER
            </span>
        </div>
        <h1 className="text-5xl font-bold text-white mb-6">專業客製化 x Agent Skills x 雲地整合</h1>
        <p className="text-xl text-slate-300 max-w-4xl">
            AI 的未來不僅僅是強大的模型，更是能夠與世界連結、協同合作的智慧代理人。
            結合專業知識、Agent 技能與彈性的雲地部署，將是釋放 AI 真正價值的關鍵。
        </p>
        <p className="mt-8 text-2xl text-amber-400 font-semibold">感謝您的聆聽！</p>
      </div>
    </div>
  );
};