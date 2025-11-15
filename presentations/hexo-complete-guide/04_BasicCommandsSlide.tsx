import React from 'react';

const CommandCard: React.FC<{ command: string; short: string; desc: string; icon: string;}> = ({command, short, desc, icon}) => (
    <div className="bg-slate-700 p-4 rounded-lg h-full">
        <div className="flex items-center gap-3 mb-3">
            <i className={`fa-solid ${icon} text-sky-400 text-xl`}></i>
            <h3 className="text-lg font-bold text-white font-mono">{command}</h3>
        </div>
        <p className="text-slate-400 mb-2 text-sm">縮寫: <code className="bg-slate-800 px-1.5 py-0.5 rounded">{short}</code></p>
        <p className="text-slate-300">{desc}</p>
    </div>
);

export const BasicCommandsSlide: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">3. 常用基本指令</h1>
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
        <CommandCard 
            command="hexo new <title>" 
            short="hexo n"
            desc="建立一篇新文章。檔案會產生在 source/_posts/ 資料夾中。"
            icon="fa-file-pen"
        />
        <CommandCard 
            command="hexo generate"
            short="hexo g"
            desc="生成靜態檔案。生成的網站內容會放在 public/ 資料夾。"
            icon="fa-cogs"
        />
        <CommandCard 
            command="hexo server"
            short="hexo s"
            desc="啟動本地預覽伺服器，方便即時查看變更。"
            icon="fa-server"
        />
        <CommandCard 
            command="hexo clean"
            short="-"
            desc="清除快取檔案 (db.json) 與已生成的靜態檔案 (public/)"
            icon="fa-broom"
        />
      </div>
    </div>
  );
};
