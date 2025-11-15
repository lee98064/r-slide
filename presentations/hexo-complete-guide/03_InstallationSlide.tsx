import React from 'react';

const Step: React.FC<{ number: number; title: string; command: string }> = ({ number, title, command }) => (
    <div>
        <h3 className="text-xl font-semibold text-sky-400 mb-2">步驟 {number}: {title}</h3>
        <pre className="bg-slate-900 text-slate-200 p-4 rounded-lg font-mono text-sm"><code>{command}</code></pre>
    </div>
);

export const InstallationSlide: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">2. 安裝與啟動</h1>
      <div className="w-full max-w-4xl space-y-6">
        <Step number={1} title="安裝 Hexo CLI" command="npm install hexo-cli -g" />
        <Step number={2} title="初始化部落格專案" command="hexo init my-blog" />
        <Step number={3} title="進入專案目錄並安裝依賴" command="cd my-blog && npm install" />
        <Step number={4} title="啟動本地伺服器" command="hexo server" />
      </div>
       <div className="mt-8 bg-slate-700 p-4 rounded-lg text-center">
            <p className="text-slate-300">啟動後，即可在瀏覽器打開 <a href="http://localhost:4000" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">http://localhost:4000</a> 進行預覽。</p>
      </div>
    </div>
  );
};
