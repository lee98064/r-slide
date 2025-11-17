import React from 'react';

const promptTemplate = [
  '角色：你是嚴謹的技術寫手。',
  '目標：根據提供段落輸出條列重點＋引用。',
  '限制：不得猜測，若無資料回答「文件未提及」。',
  '格式：Markdown，每點 ≤ 30 字，於句尾標註來源。'
];

const ragChecklist = [
  '切段長度＋重疊比例',
  '向量模型 / 維度 / ANN 參數',
  '重排序模型與輸入長度',
  'Prompt 模板：引用格式、最大段數、拒答規則',
  '線上指標：命中率、citation、延遲、失敗率'
];

const loraChecklist = [
  '插入點 (q/k/v/o、FFN)',
  'rank 與 α，先小後大',
  '量化位寬與校準 batch',
  '資料來源＆格式一致性',
  '驗收：格式率、拒答遵循率、偏好勝率'
];

export const LLMResearchPracticalCheatsheets: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white h-full w-full px-16 py-12 flex flex-col">
      <h2 className="text-3xl font-bold text-sky-300">13 · 實務小抄</h2>
      <p className="text-slate-300 mt-3">直接拿去用的 Prompt、RAG、LoRA checklist。</p>

      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-amber-200">Prompt 範本</h3>
          <ul className="text-sm text-slate-200 mt-4 space-y-2">
            {promptTemplate.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-amber-200">RAG 清單</h3>
          <ul className="text-sm text-slate-200 mt-4 space-y-2">
            {ragChecklist.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-amber-200">LoRA / QLoRA</h3>
          <ul className="text-sm text-slate-200 mt-4 space-y-2">
            {loraChecklist.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex-1 bg-white/5 border border-white/10 rounded-3xl p-8 relative">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at top, rgba(56, 189, 248, 0.4), transparent)' }}></div>
        <div className="relative z-10 h-full flex flex-col">
          <h4 className="text-lg font-semibold text-slate-200">加值建議</h4>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-200">
            <div className="p-4 bg-slate-900/60 border border-white/10 rounded-2xl">把小抄做成 wiki / runbook，方便 on-call 快速檢查。</div>
            <div className="p-4 bg-slate-900/60 border border-white/10 rounded-2xl">訓練資料旁備註來源與授權，省去合規追溯。</div>
            <div className="p-4 bg-slate-900/60 border border-white/10 rounded-2xl">回饋表單直接映射到回歸測試集，持續更新。</div>
            <div className="p-4 bg-slate-900/60 border border-white/10 rounded-2xl">部署流程納入安全審查與資料治理 checklist。</div>
          </div>
        </div>
      </div>
    </div>
  );
};
