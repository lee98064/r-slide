
import React from 'react';

export const SummarySlide: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col p-10 font-lato">
      <h1 className="text-4xl text-center w-full mb-8 text-sky-400 font-bold font-poppins">
        Hexo 完整教學 (單頁速覽)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full flex-grow overflow-hidden">

        {/* Column 1: Setup */}
        <div className="flex flex-col gap-6 custom-scrollbar overflow-y-auto pr-3">
          <div>
            <h2 className="text-2xl text-sky-400 mb-4 border-b-2 border-slate-700 pb-2 flex items-center gap-3 font-poppins"><i className="fa-solid fa-download"></i>1. 環境準備</h2>
            <ul className="list-none p-0 m-0">
              <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-brands fa-node-js absolute left-0 top-1 text-sky-400 text-sm"></i>安裝 <strong>Node.js</strong> (LTS 版本)</li>
              <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-brands fa-git-alt absolute left-0 top-1 text-sky-400 text-sm"></i>安裝 <strong>Git</strong></li>
              <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-solid fa-terminal absolute left-0 top-1 text-sky-400 text-sm"></i>驗證: <code>node -v</code>, <code>npm -v</code></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-sky-400 mb-4 border-b-2 border-slate-700 pb-2 flex items-center gap-3 font-poppins"><i className="fa-solid fa-rocket"></i>2. 安裝與啟動</h2>
            <ul className="list-none p-0 m-0">
              <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-solid fa-globe absolute left-0 top-1 text-sky-400 text-sm"></i>安裝 CLI: <code>npm i hexo-cli -g</code></li>
              <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-solid fa-folder-plus absolute left-0 top-1 text-sky-400 text-sm"></i>初始化: <code>hexo init my-blog</code></li>
              <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-solid fa-code-branch absolute left-0 top-1 text-sky-400 text-sm"></i>裝依賴: <code>cd my-blog && npm i</code></li>
              <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-solid fa-server absolute left-0 top-1 text-sky-400 text-sm"></i>本地預覽: <code>hexo s</code></li>
              <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-solid fa-link absolute left-0 top-1 text-sky-400 text-sm"></i>網址: <code>http://localhost:4000</code></li>
            </ul>
          </div>
        </div>
        
        {/* Column 2: Usage & Structure */}
        <div className="flex flex-col gap-6 custom-scrollbar overflow-y-auto pr-3">
          <div>
            <h2 className="text-2xl text-sky-400 mb-4 border-b-2 border-slate-700 pb-2 flex items-center gap-3 font-poppins"><i className="fa-solid fa-pen-to-square"></i>3. 基本使用</h2>
            <ul className="list-none p-0 m-0">
              <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-solid fa-file-pen absolute left-0 top-1 text-sky-400 text-sm"></i>新文章: <code>hexo new "My Post"</code></li>
              <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-solid fa-cogs absolute left-0 top-1 text-sky-400 text-sm"></i>生成靜態: <code>hexo g</code></li>
              <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-solid fa-broom absolute left-0 top-1 text-sky-400 text-sm"></i>清除快取: <code>hexo clean</code></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-sky-400 mb-4 border-b-2 border-slate-700 pb-2 flex items-center gap-3 font-poppins"><i className="fa-solid fa-folder-tree"></i>4. 目錄架構</h2>
            <div className="space-y-3">
              <div className="bg-slate-700 rounded-lg p-3"><h3 className="text-lg font-semibold text-slate-100 mb-1 font-poppins"><code>_config.yml</code></h3><p className="text-slate-300 text-sm">全站設定檔 (標題、網址、主題...)</p></div>
              <div className="bg-slate-700 rounded-lg p-3"><h3 className="text-lg font-semibold text-slate-100 mb-1 font-poppins"><code>source/</code></h3><p className="text-slate-300 text-sm">內容 (<code>_posts/</code> 放文章)</p></div>
              <div className="bg-slate-700 rounded-lg p-3"><h3 className="text-lg font-semibold text-slate-100 mb-1 font-poppins"><code>themes/</code></h3><p className="text-slate-300 text-sm">佈景主題資料夾 (e.g. <code>themes/next</code>)</p></div>
              <div className="bg-slate-700 rounded-lg p-3"><h3 className="text-lg font-semibold text-slate-100 mb-1 font-poppins"><code>public/</code></h3><p className="text-slate-300 text-sm"><code>hexo g</code> 生成的網站 (部署用)</p></div>
            </div>
          </div>
        </div>
        
        {/* Column 3: Deployment */}
        <div className="flex flex-col gap-4 custom-scrollbar overflow-y-auto pr-3">
            <h2 className="text-2xl text-sky-400 mb-2 border-b-2 border-slate-700 pb-2 flex items-center gap-3 font-poppins"><i className="fa-brands fa-github"></i>5. 部署到 GitHub</h2>
            <ul className="list-none p-0 m-0">
                <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-solid fa-book absolute left-0 top-1 text-sky-400 text-sm"></i>建立倉庫: <code>username.github.io</code></li>
                <li className="relative pl-7 mb-2.5 text-slate-300"><i className="fa-solid fa-plug absolute left-0 top-1 text-sky-400 text-sm"></i>安裝工具: <code>npm i hexo-deployer-git</code></li>
            </ul>
            <h3 className="text-xl text-slate-200 mt-2 font-poppins">修改 <code>_config.yml</code></h3>
            <pre className="bg-slate-950 border border-slate-700 text-slate-200 p-4 rounded-lg font-mono whitespace-pre-wrap text-sm my-0 leading-relaxed"><code>
# URL
url: https://username.github.io
root: /

# Deployment
deploy:
  type: git
  repo: https://github.com/username/username.github.io.git
  branch: main
            </code></pre>
            <h3 className="text-xl text-slate-200 mt-2 font-poppins flex items-center gap-2"><i className="fa-solid fa-bolt"></i>最終指令</h3>
            <p className="text-slate-300">清除、生成、部署三合一：</p>
            <pre className="bg-slate-950 border border-slate-700 text-slate-200 p-4 rounded-lg font-mono whitespace-pre-wrap text-sm my-0"><code>hexo clean && hexo g && hexo d</code></pre>
        </div>
      </div>
    </div>
  );
};
