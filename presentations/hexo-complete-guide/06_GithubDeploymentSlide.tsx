import React from 'react';

export const GithubDeploymentSlide: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold text-sky-400 mb-8 text-center">5. 部署到 GitHub Pages</h1>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h3 className="text-2xl text-slate-200 font-bold">事前準備</h3>
                <p className="text-slate-300">1. 在 GitHub 建立一個名為 <code>&lt;username&gt;.github.io</code> 的公開儲存庫 (repository)。</p>
                <p className="text-slate-300">2. 安裝部署工具：</p>
                <pre className="bg-slate-900 p-3 rounded-md font-mono text-sm"><code>npm install hexo-deployer-git --save</code></pre>
                
                <h3 className="text-2xl text-slate-200 font-bold mt-4">最終指令</h3>
                <p className="text-slate-300">生成並部署網站：</p>
                <pre className="bg-slate-900 p-3 rounded-md font-mono text-sm"><code>hexo generate --deploy</code></pre>
                 <p className="text-slate-400 text-sm">或簡寫為 <code>hexo g -d</code></p>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl text-slate-200 font-bold">修改 <code>_config.yml</code></h3>
                <p className="text-slate-300">在檔案最下方找到 <code>deploy</code> 區塊，並修改成以下內容：</p>
                <pre className="bg-slate-900 border border-slate-700 text-slate-200 p-4 rounded-lg font-mono text-sm leading-relaxed h-full">
                    <code>
{`# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repo: https://github.com/<username>/<username>.github.io.git
  branch: main`}
                    </code>
                </pre>
            </div>
        </div>
    </div>
  );
};
