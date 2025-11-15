import React from 'react';

export const References: React.FC = () => {
  return (
    <div className="bg-slate-800 h-full w-full flex flex-col p-10 overflow-y-auto custom-scrollbar">
      <h1 className="text-4xl font-bold text-sky-400 mb-8 text-center">參考來源</h1>
      <div className="text-xs text-slate-400 space-y-2 w-full max-w-6xl mx-auto columns-2 gap-8">
        <p>羅, 光志 (2023)。從AI到生成式AI: 40個零程式的實作體驗，培養新世代人工智慧素養。</p>
        <p>IBM. (無日期)。Gradient Descent。</p>
        <p>Alake, R. (2022, Feb 09)。A Data Scientist’s Guide to Gradient Descent and Backpropagation Algorithms NVIDIA Developer Blog。</p>
        <p>Vaniukov, S. (2024, Feb 15)。NLP vs LLM: A Comprehensive Guide to Understanding Key Differences。</p>
        <p>Ghatifernado Inc. (2024, Feb 26)。 Overcoming Overfitting and Underfitting in NLP Models。</p>
        <p>KDnuggets. (2019, December)。5 Techniques to Prevent Overfitting in Neural Networks。</p>
        <p>Millière, R. (2024). Language models as models of language. arXiv preprint arXiv:2408.07144.</p>
        <p>Pramoditha, R. (2022, Feb 01) Overview of a Neural Network's Learning Process。</p>
        <p>MLU-Explain. (2023, May) Neural Networks。</p>
        <p>莊, 智宇 (2024年1月26日)。模型部署前哨站!模型壓縮的原理與方法。</p>
        <p>Teki, S. (2023, September 29). Knowledge distillation: Principles, algorithms, applications.</p>
        <p>Lee, H.-Y. (2021)。 Regression (v16) [PDF 文件]。</p>
        <p>Chen, Y.-N. (2023年9月22日)。台大資訊深度學習之應用| ADL 3.1: Word Representations。</p>
        <p>Alammar, J. (2021). The illustrated BERT, ELMo, and co. (How NLP cracked transfer learning).</p>
        <p>Fregly, C., Barth, A., & Eigenbrode, S. (2024). Generative Al on AWS.</p>
        <p>Surapaneni, R., Jha, M., Vakoc, M., & Segal, T. (2025, April 9). Announcing the Agent2Agent Protocol (A2A).</p>
        <p>hiKala Al Insight (2025年3月22日)。什麼是 Model Context Protocol (MCP) ?</p>
        <p>Al Engineer. (2025年3月5日)。Building Agents with Model Context Protocol - Full Workshop with Mahesh Murag of Anthropic。</p>
        <p className="col-span-2 mt-4 text-center text-slate-500">... and other sources from the provided PDF.</p>
      </div>
    </div>
  );
};