import type { Presentation } from '../types';
import { AIKnowledgePackSlides } from './ai-knowledge-pack';
import { HexoTutorialSlides } from './hexo-tutorial';
import { HexoCompleteGuideSlides } from './hexo-complete-guide';
import { LLMDeepDiveSlides } from './llm-deep-dive';
import { LLMDeepResearchSlides } from './llm-deep-research';

export const presentations: Presentation[] = [
  {
    id: 'ai-knowledge-pack',
    name: 'AI 知識大禮包',
    description: '從入門到精通，把AI核心觀念一次打包帶走！一份全面性的 AI 知識整理。',
    slides: AIKnowledgePackSlides,
    thumbnail: 'https://picsum.photos/seed/ai-pack/400/225'
  },
  {
    id: 'llm-deep-dive',
    name: 'LLM 原理深入解析',
    description: '深入探討大型語言模型的運作原理，包含 Embedding、幻覺現象，以及 Transformer 核心架構。',
    slides: LLMDeepDiveSlides,
    thumbnail: 'https://picsum.photos/seed/llm-deep-dive/400/225'
  },
  {
    id: 'llm-deep-research',
    name: 'LLM 原理與實作全書',
    description: '大學等級的 LLM 心智模型，涵蓋資料、訓練、推論、RAG、安全與實務小抄，移除公式但保留工程深度。',
    slides: LLMDeepResearchSlides,
    thumbnail: 'https://picsum.photos/seed/llm-research/400/225'
  },
  {
    id: 'hexo-complete-guide',
    name: 'Hexo 完整教學 (完整版)',
    description: '從零到一，學習如何安裝、設定、撰寫、部署，並管理您的 Hexo 部落格。',
    slides: HexoCompleteGuideSlides,
    thumbnail: 'https://picsum.photos/seed/hexo-guide/400/225'
  },
  {
    id: 'hexo-tutorial',
    name: 'Hexo 完整教學 (單頁速覽)',
    description: 'A single-page cheat sheet for setting up and deploying a Hexo blog.',
    slides: HexoTutorialSlides,
    thumbnail: 'https://picsum.photos/seed/hexo/400/225'
  }
];
