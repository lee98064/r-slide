import React from 'react';

const DirItem: React.FC<{ name: string; desc: string; icon: string }> = ({ name, desc, icon }) => (
    <div className="flex items-start gap-4">
        <i className={`fa-solid ${icon} text-sky-400 text-xl mt-1 w-6 text-center`}></i>
        <div>
            <h3 className="text-lg font-semibold text-white font-mono">{name}</h3>
            <p className="text-slate-400">{desc}</p>
        </div>
    </div>
);


export const DirectoryStructureSlide: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">4. 目錄架構</h1>
      <div className="w-full max-w-4xl bg-slate-900/50 p-8 rounded-lg space-y-6">
          <DirItem icon="fa-file-code" name="_config.yml" desc="網站主要設定檔。包含網站標題、作者、部署設定等。" />
          <DirItem icon="fa-folder-open" name="source/" desc="您部落格的內容。文章 (Markdown) 放在 source/_posts 內，其他頁面或資源也放此處。" />
          <DirItem icon="fa-palette" name="themes/" desc="存放佈景主題的地方。您可以在這裡切換或客製化網站外觀。" />
          <DirItem icon="fa-scroll" name="scaffolds/" desc="文章樣板。執行 `hexo new` 時會依照這裡的檔案格式建立新文章。" />
          <DirItem icon="fa-file-zipper" name="package.json" desc="Node.js 專案設定檔，定義專案依賴 (如主題、外掛)。" />
          <DirItem icon="fa-globe" name="public/" desc="執行 `hexo generate` 後生成的靜態網站資料夾，這是最終部署到伺服器的內容 (通常不需手動修改)。" />
      </div>
    </div>
  );
};
