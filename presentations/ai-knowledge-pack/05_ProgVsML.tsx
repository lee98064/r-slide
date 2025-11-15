import React from 'react';

const FlowBox: React.FC<{ title: string, items: {label: string, color: string}[] }> = ({ title, items }) => (
    <div className="bg-slate-900/70 p-6 rounded-lg w-full text-center border-2 border-slate-700">
        <h3 className="text-2xl font-bold text-sky-400 mb-6">{title}</h3>
        <div className="flex items-center justify-around space-x-4">
            {items.map((item, index) => (
                <React.Fragment key={item.label}>
                    <div className={`p-4 rounded-lg bg-${item.color}-500/20 border-2 border-${item.color}-500 text-${item.color}-300`}>
                        <p className="font-semibold">{item.label}</p>
                    </div>
                    {index < items.length - 1 && <i className="fa-solid fa-arrow-right text-slate-500 text-2xl"></i>}
                </React.Fragment>
            ))}
        </div>
    </div>
);

export const ProgVsML: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-10 text-center">傳統程式 vs. 機器學習</h1>
      <div className="w-full max-w-5xl space-y-10">
        <FlowBox 
            title="傳統程式開發"
            items={[
                { label: '資料 (Data)', color: 'blue' },
                { label: '規則 (Rules)', color: 'amber' },
                { label: '結果 (Results)', color: 'green' },
            ]}
        />
        <div className="flex justify-center text-4xl text-slate-600">
          <i className="fa-solid fa-right-left"></i>
        </div>
        <FlowBox 
            title="機器學習"
            items={[
                { label: '資料 (Data)', color: 'blue' },
                { label: '結果 (Results)', color: 'green' },
                { label: '規則 (Rules)', color: 'amber' },
            ]}
        />
      </div>
    </div>
  );
};