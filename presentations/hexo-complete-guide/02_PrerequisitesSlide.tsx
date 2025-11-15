import React from 'react';

const InfoCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
        <div className="flex items-center gap-4 mb-4">
            <i className={`${icon} text-4xl text-sky-400`}></i>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <div className="text-slate-300 space-y-2">
            {children}
        </div>
    </div>
);

export const PrerequisitesSlide: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">1. 環境準備 (Prerequisites)</h1>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <InfoCard icon="fa-brands fa-node-js" title="Node.js">
            <p>Hexo 是基於 Node.js 的框架。</p>
            <p>建議安裝 <strong>LTS (長期支援)</strong> 版本。</p>
            <p>安裝後，在終端機中驗證：</p>
            <pre className="bg-slate-900 text-sm p-3 rounded-md mt-2"><code>node -v && npm -v</code></pre>
        </InfoCard>
        <InfoCard icon="fa-brands fa-git-alt" title="Git">
            <p>部署網站與管理原始碼時需要使用 Git。</p>
            <p>請至官方網站下載並安裝。</p>
            <p>安裝後，在終端機中驗證：</p>
            <pre className="bg-slate-900 text-sm p-3 rounded-md mt-2"><code>git --version</code></pre>
        </InfoCard>
      </div>
      <p className="mt-10 text-slate-400 text-center">
        <i className="fa-solid fa-circle-info mr-2"></i>
        完成以上兩項安裝後，才能開始建立您的 Hexo 部落格。
      </p>
    </div>
  );
};
