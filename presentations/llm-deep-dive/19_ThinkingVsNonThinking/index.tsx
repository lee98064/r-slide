import React from 'react';
import GPT41 from "./images/GPT_4.1.png"
import GPT5 from "./images/GPT_5_Thinking.png"

type LightboxImage = {
  title: string;
  imgSrc: string;
  altText: string;
};

type ImageResponseBoxProps = LightboxImage & {
  isSuccess: boolean;
  onImageClick?: (image: LightboxImage) => void;
};

const ImageResponseBox: React.FC<ImageResponseBoxProps> = ({ title, isSuccess, imgSrc, altText, onImageClick }) => (
    <div className={`bg-slate-900/50 p-6 rounded-lg border-2 ${isSuccess ? 'border-sky-500/50' : 'border-red-500/50'} flex flex-col h-full`}>
        <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isSuccess ? 'text-sky-400' : 'text-red-400'}`}>
            <i className={`fa-solid ${isSuccess ? 'fa-rocket' : 'fa-bomb'}`}></i>
            {title}
        </h3>
        <div className="bg-slate-800 rounded-md overflow-hidden flex-1 flex items-center justify-center p-2">
            <button
              type="button"
              onClick={() => onImageClick?.({ title, imgSrc, altText })}
              className="w-full h-full flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-zoom-in"
              aria-label={`放大檢視 ${title}`}
            >
              <img src={imgSrc} alt={altText} className="w-full h-full object-contain max-h-full" />
            </button>
        </div>
    </div>
);

export const ThinkingVsNonThinking: React.FC = () => {
  const [lightboxImage, setLightboxImage] = React.useState<LightboxImage | null>(null);

  const openLightbox = (image: LightboxImage) => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="bg-slate-800 h-full w-full flex flex-col p-10 gap-6 relative overflow-hidden">
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold text-sky-400 text-center">模型思考 vs. 直接輸出</h1>
        <p className="text-slate-300">
          「思考」讓模型能更好地遵循複雜指令 (尤其是負面限制)，它會調整後續 token 的機率分佈。
        </p>
      </div>
      <div className="w-full max-w-4xl bg-slate-700/50 p-4 rounded-lg mx-auto">
        <p className="text-slate-400 text-center text-lg">
          <span className="font-bold text-white">提問: </span>
          <code className="bg-slate-900 px-2 py-1 rounded">不要提到貓，跟我說說貓是什麼樣的動物？</code>
        </p>
      </div>
      <div className="flex-1 w-full flex justify-center min-h-0">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr min-h-0">
          <ImageResponseBox 
              title="非思考模型 (Direct Output)" 
              isSuccess={false}
              imgSrc={GPT41}
              altText="Non-thinking model output that fails the negative constraint"
              onImageClick={openLightbox}
          />
          <ImageResponseBox 
              title="思考模型 (With Thinking)" 
              isSuccess={true}
              imgSrc={GPT5}
              altText="Thinking model output that successfully follows the negative constraint"
              onImageClick={openLightbox}
          />
        </div>
      </div>

      {lightboxImage && (
        <div
          className="absolute inset-0 bg-slate-950/80 z-10 flex items-center justify-center p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="圖片放大檢視"
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900/90 rounded-xl p-6 shadow-2xl border border-slate-700/70"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-full p-1"
              aria-label="關閉放大檢視"
            >
              <i className="fa-solid fa-xmark text-2xl"></i>
            </button>
            <h3 className="text-2xl font-semibold text-white mb-4 pr-10">{lightboxImage.title}</h3>
            <div className="w-full flex items-center justify-center max-h-[520px]">
              <img
                src={lightboxImage.imgSrc}
                alt={lightboxImage.altText}
                className="max-h-[520px] w-full object-contain drop-shadow-2xl"
              />
            </div>
            <p className="text-slate-400 text-sm mt-4">{lightboxImage.altText}</p>
          </div>
        </div>
      )}
    </div>
  );
};
