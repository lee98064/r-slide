import React from 'react';

const FlowStep: React.FC<{ icon: string; title: string; command?: string }> = ({ icon, title, command }) => (
    <div className="flex flex-col items-center text-center">
        <div className="bg-slate-700 w-24 h-24 rounded-full flex items-center justify-center border-4 border-slate-600">
            <i className={`fa-solid ${icon} text-4xl text-sky-400`}></i>
        </div>
        <h3 className="text-white font-bold mt-4 text-lg">{title}</h3>
        {command && <code className="bg-slate-900 px-2 py-1 rounded-md text-sm mt-1 text-amber-400">{command}</code>}
    </div>
);

const Arrow = () => (
    <div className="flex-1 flex items-center justify-center">
        <i className="fa-solid fa-arrow-right text-3xl text-slate-500 hidden md:block"></i>
        <i className="fa-solid fa-arrow-down text-3xl text-slate-500 md:hidden"></i>
    </div>
);

export const SummarySlide: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-12 text-center">7. 日常工作流程總結</h1>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch justify-center gap-4">
            <FlowStep icon="fa-plus" title="建立新文章" command="hexo new 'My Post'"/>
            <Arrow />
            <FlowStep icon="fa-keyboard" title="撰寫內容" command="(使用 Markdown)"/>
            <Arrow />
            <FlowStep icon="fa-eye" title="本地預覽" command="hexo server"/>
            <Arrow />
            <FlowStep icon="fa-rocket" title="部署網站" command="hexo g -d"/>
            <Arrow />
            <FlowStep icon="fa-code-branch" title="備份原始碼" command="git push"/>
      </div>
      <p className="mt-12 text-slate-300 text-2xl text-center">Happy Blogging!</p>
    </div>
  );
};
