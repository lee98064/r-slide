import React from 'react';

const MitigationCard: React.FC<{ icon: string; title: string; children: React.ReactNode; className?: string }> = ({ icon, title, children, className = '' }) => (
    <div className={`bg-slate-900/50 p-6 rounded-lg border border-slate-700 flex flex-col ${className}`}>
        <div className="flex items-center gap-4 mb-4">
            <i className={`fa-solid ${icon} text-3xl text-sky-400 w-8 text-center`}></i>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <div className="text-slate-400 text-lg leading-relaxed flex-grow">
            {children}
        </div>
    </div>
);

export const MitigatingHallucination: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold text-sky-400 mb-10 text-center">如何從根本上緩解模型幻覺？</h1>
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <MitigationCard icon="fa-database" title="系統層：RAG" className="lg:col-span-2 border-2 border-sky-500">
            <p className="text-slate-300">
                檢索增強生成 (Retrieval-Augmented Generation) 是目前業界最核心的解決方案。與其讓模型僅依賴內部記憶，不如讓它在生成前，先透過 <strong className="text-yellow-400">Tool-Calling</strong> 或其他方式，從可信的外部知識庫 (如 API、資料庫、文件) 中檢索即時、相關的資料。
            </p>
            <div className="mt-6 bg-slate-800 p-4 rounded-lg text-center">
                <p className="font-mono text-sky-300 text-lg">
                    [User Query] → [Search Query] → [API/DB] → [Retrieved Facts] → [Augmented Prompt] → [Grounded Response]
                </p>
            </div>
            <p className="mt-4 text-slate-400">
                這將模型的角色從「全知的回答者」轉變為「聰明的資訊整合者」，大幅提高回答的準確性與可信度。
            </p>
        </MitigationCard>

        <div className="space-y-8 flex flex-col">
            <MitigationCard icon="fa-gears" title="訓練層：指令微調">
                <p>
                    透過在高品質的資料集上進行指令微調 (Instruction Fine-tuning)，可以教導模型辨識牠知識範圍外的問題，並學會回答「我不知道」或主動引用資料來源，而不是胡亂編造。
                </p>
            </MitigationCard>

            <MitigationCard icon="fa-code" title="推理層：受限解碼">
                <p>
                    在需要特定輸出格式 (如 JSON) 的場景中，可以透過受限解碼 (Constrained Decoding) 技術，強制模型在生成時的每一步都必須符合預定的格式或 Schema，從而完全杜絕結構性的幻覺。
                </p>
            </MitigationCard>
        </div>

      </div>
    </div>
  );
};
