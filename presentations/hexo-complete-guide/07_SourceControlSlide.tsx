import React from 'react';

export const SourceControlSlide: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-6 text-center">6. 原始碼管理 (重要！)</h1>
      <p className="text-slate-400 max-w-4xl text-center mb-8">
        部署到 GitHub Pages 的是 <code>public</code> 資料夾內的靜態檔案，並非您的原始碼 (Markdown 文件、設定檔等)。<br/>
        您需要另外使用 Git 來管理原始碼，以達到備份、版本控制與協作的目的。
      </p>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900/50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">建議做法</h3>
            <ol className="list-decimal list-inside space-y-3 text-slate-300">
                <li>為您的原始碼建立一個<strong>新的 GitHub 儲存庫</strong> (例如 `my-blog-source`)。</li>
                <li>在您的 Hexo 專案根目錄中，建立 <code>.gitignore</code> 檔案。</li>
                <li>將您的原始碼推送到這個新的儲存庫。</li>
                <li className="text-amber-400">
                    <strong>部署 (<code>hexo d</code>)</strong> 和 <strong>原始碼推送 (<code>git push</code>)</strong> 是兩個完全獨立的操作！
                </li>
            </ol>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4"><code>.gitignore</code> 範例</h3>
            <p className="text-slate-400 text-sm mb-2">告訴 Git 哪些檔案不需要被追蹤。</p>
            <pre className="bg-slate-950 border border-slate-700 text-slate-200 p-4 rounded-lg font-mono text-sm leading-relaxed">
{`# Dependency directory
node_modules/

# Public folder
public/

# Other
.deploy_git/
db.json
*.log`}
            </pre>
        </div>
      </div>
    </div>
  );
};
