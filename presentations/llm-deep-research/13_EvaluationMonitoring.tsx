import React from 'react';

const pillars = [
  { title: '離線自動評', detail: '任務指標 (摘要/問答)、格式正確率、citation 完整度。', icon: '📊' },
  { title: '人評 / 偏好', detail: '相關、正確、簡潔、禮貌、可操作；成對比較較穩。', icon: '🧑‍⚖️' },
  { title: '紅隊與安全', detail: '越獄、prompt 注入、工具誤用、敏感資料外洩。', icon: '🛡️' },
  { title: '線上監測', detail: '延遲、吞吐、錯誤率、平均輸出長度、關鍵詞觸發。', icon: '📈' }
];

export const LLMResearchEvaluationMonitoring: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white h-full w-full px-16 py-12 flex flex-col">
      <h2 className="text-3xl font-bold text-sky-300">11 · 評估與監測</h2>
      <p className="text-slate-300 mt-3">不只是分數，更是穩定、安全與可回溯。</p>

      <div className="grid grid-cols-4 gap-4 mt-8">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-4xl mb-3">{pillar.icon}</div>
            <h3 className="text-lg font-semibold">{pillar.title}</h3>
            <p className="text-sm text-slate-300 mt-2">{pillar.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex-1 grid grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col">
          <h4 className="text-xl font-semibold text-amber-200">回歸測試集</h4>
          <p className="text-sm text-slate-300 mt-3">
            自建固定測試集 + 版本化答案，每次模型升級都跑一次，紀錄輸出差異並交叉審查。
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <p>• 分層抽樣：常見任務、長上下文、安全情境。</p>
            <p>• Diff tool 標記語氣/引用差異，人工判斷 pass/fail。</p>
          </div>
          <div className="mt-auto text-xs text-slate-400">指標：保留率、退步案例數、修正追蹤。</div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 analytics-grid"></div>
          <div className="relative z-10 h-full flex flex-col">
            <h4 className="text-xl font-semibold text-amber-200">線上儀表板</h4>
            <div className="mt-6 space-y-4">
              {['Avg Latency', 'p95 Latency', 'Error Rate', '輸出長度'].map((metric, idx) => (
                <div key={metric} className="flex items-center gap-3">
                  <div className="metric-dot" style={{ animationDelay: `${idx * 0.3}s` }}></div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-200">{metric}</p>
                    <div className="h-2 bg-slate-900/60 rounded-full overflow-hidden mt-1">
                      <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500" style={{ width: `${50 + idx * 10}%` }}></div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">trend</span>
                </div>
              ))}
            </div>
            <p className="mt-auto text-xs text-slate-400">搭配異常警報與自動回滾流程，確保線上穩定。</p>
          </div>
        </div>
      </div>

      <style>{`
        .analytics-grid {
          background-image: linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .metric-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #f97316;
          animation: pulse 2s ease infinite;
        }
        @keyframes pulse {
          0%,100% { transform: scale(0.8); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
