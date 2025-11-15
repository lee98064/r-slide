
import React from 'react';

export const SecondSlide: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-6xl font-bold text-sky-400 mb-6">主題與外掛</h1>
      <p className="text-2xl text-slate-300 max-w-3xl">
        Hexo 擁有豐富的主題和外掛生態系，可以輕鬆客製化你的部落格外觀與功能。
      </p>
      <div className="mt-12 flex gap-8">
        <div className="bg-slate-700 p-6 rounded-lg">
          <i className="fa-solid fa-palette text-5xl text-sky-400 mb-4"></i>
          <h2 className="text-2xl font-bold">主題 (Themes)</h2>
          <p className="text-slate-400 mt-2">改變網站的視覺風格。</p>
        </div>
        <div className="bg-slate-700 p-6 rounded-lg">
          <i className="fa-solid fa-puzzle-piece text-5xl text-sky-400 mb-4"></i>
          <h2 className="text-2xl font-bold">外掛 (Plugins)</h2>
          <p className="text-slate-400 mt-2">增加額外功能，如 SEO、Sitemap。</p>
        </div>
      </div>
    </div>
  );
};
