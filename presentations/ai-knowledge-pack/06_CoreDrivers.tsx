import React from 'react';

const DriverNode: React.FC<{ icon: string; title: string; desc: string; className: string }> = ({ icon, title, desc, className }) => (
    <div className={`absolute flex items-center justify-center flex-col text-center p-4 group ${className}`}>
        <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="w-28 h-28 bg-slate-700 rounded-full flex items-center justify-center border-2 border-slate-600 transition-all group-hover:border-sky-500">
                <i className={`fa-solid ${icon} text-4xl text-sky-400`}></i>
            </div>
        </div>
        <h3 className="text-xl font-bold text-white mt-4">{title}</h3>
        <p className="text-slate-400 w-48 text-sm">{desc}</p>
    </div>
);

export const CoreDrivers: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-16 text-center">AI 三大核心推動力</h1>
      <div className="relative w-[500px] h-[450px]">
        <div className="absolute w-full h-full flex items-center justify-center">
            <div className="w-64 h-64 bg-slate-900 border-4 border-slate-700 rounded-full flex items-center justify-center text-5xl font-bold text-sky-500 shadow-2xl">AI</div>
        </div>
        <DriverNode 
            icon="fa-database" 
            title="巨量資料 (Big Data)" 
            desc="提供模型學習的原料" 
            className="top-0 left-1/2 -translate-x-1/2" 
        />
        <DriverNode 
            icon="fa-code" 
            title="演算法 (Software)" 
            desc="機器學習模型與框架" 
            className="bottom-0 left-0 translate-x-1/2 -translate-y-4" 
        />
        <DriverNode 
            icon="fa-microchip" 
            title="硬體算力 (Hardware)" 
            desc="CPU、GPU、TPU 提供強大計算能力" 
            className="bottom-0 right-0 -translate-x-1/2 -translate-y-4" 
        />
      </div>
    </div>
  );
};