import React, { useState, useEffect, useRef } from 'react';

const ExplanationStep: React.FC<{ step: number; title: string; children: React.ReactNode; isVisible: boolean }> = ({ step, title, children, isVisible }) => (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-xl font-bold text-sky-400 mb-2"><span className="bg-sky-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">{step}</span>{title}</h3>
        <p className="text-slate-300 pl-11">{children}</p>
    </div>
);

export const EmbeddingSpace: React.FC = () => {
    const [step, setStep] = useState(0);
    const [rotation, setRotation] = useState({ x: -25, y: -45 });
    const [isDragging, setIsDragging] = useState(false);
    const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 500),
            setTimeout(() => setStep(2), 2500),
            setTimeout(() => setStep(3), 4500),
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setLastMousePos({ x: e.clientX, y: e.clientY });
        if (sceneRef.current) {
            sceneRef.current.style.cursor = 'grabbing';
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const dx = e.clientX - lastMousePos.x;
        const dy = e.clientY - lastMousePos.y;
        setRotation({
            x: rotation.x - dy * 0.25,
            y: rotation.y + dx * 0.25,
        });
        setLastMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
        if (sceneRef.current) {
            sceneRef.current.style.cursor = 'grab';
        }
    };

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        const newScale = scale - e.deltaY * 0.001;
        // Clamp the scale to a reasonable range
        setScale(Math.max(0.5, Math.min(2.5, newScale)));
    };


  return (
    <div className="bg-slate-800 h-full w-full flex flex-col md:flex-row items-center justify-center p-10 overflow-hidden">
      <div className="w-full md:w-2/5 h-full flex flex-col justify-center pr-8">
        <h1 className="text-4xl font-bold text-sky-400 mb-8">3D 語義空間：意義的幾何學</h1>
        <div className="space-y-6">
            <ExplanationStep step={1} title="語義座標" isVisible={step >= 1}>
                把每個詞變成太空中的一個點。意思相近的詞 (例如 '國王' 與 '皇后')，或是概念相關的詞 (例如 '法國' 與 '巴黎')，它們的位置就會很靠近。
            </ExplanationStep>
            <ExplanationStep step={2} title="向量關係" isVisible={step >= 2}>
                詞與詞之間的「關係」，可以變成一條有方向的箭頭（向量）。例如，從「男人」畫一條箭頭到「國王」，這條箭頭就代表了「皇室男性」這個抽象概念。
            </ExplanationStep>
            <ExplanationStep step={3} title="類比推理" isVisible={step >= 3}>
                把代表「皇室」概念的箭頭，接到「女人」這個點上，箭頭的終點就會神奇地指向「皇后」。這就是 AI 理解類比的方式：<code className="text-sm">國王 - 男人 ≈ 皇后 - 女人</code>
            </ExplanationStep>
        </div>
         <div className="mt-8 bg-slate-700 px-4 py-2 rounded-md text-center self-start ml-11">
            <p className="text-white font-mono text-lg">king - man + woman ≈ queen</p>
        </div>
      </div>
      <div 
        className="w-full md:w-3/5 h-full flex items-center justify-center cursor-grab" 
        style={{ perspective: '1500px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onWheel={handleWheel}
        ref={sceneRef}
      >
        <div className="scene" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`}}>
          <div className="grid-plane"></div>
          <div className="grid-plane-xy"></div>
          <div className="grid-plane-yz"></div>
          
          <div className="axis x-axis"></div>
          <div className="axis-label x-label">X</div>
          <div className="axis y-axis"></div>
          <div className="axis-label y-label">Y</div>
          <div className="axis z-axis"></div>
          <div className="axis-label z-label">Z</div>

          {/* Royalty */}
          <div className="point king"><div className="label">國王</div></div>
          <div className="point man"><div className="label">男人</div></div>
          <div className="point woman"><div className="label">女人</div></div>
          <div className="point queen"><div className="label">皇后</div></div>
          <div className="point prince"><div className="label">王子</div></div>
          <div className="point princess"><div className="label">公主</div></div>
          
          {/* Geography */}
          <div className="point france"><div className="label">法國</div></div>
          <div className="point paris"><div className="label">巴黎</div></div>
          <div className="point japan"><div className="label">日本</div></div>
          <div className="point tokyo"><div className="label">東京</div></div>
          <div className="point germany"><div className="label">德國</div></div>
          <div className="point berlin"><div className="label">柏林</div></div>

          {/* Verbs */}
          <div className="point walk"><div className="label">walk</div></div>
          <div className="point walked"><div className="label">walked</div></div>
          <div className="point walking"><div className="label">walking</div></div>
          <div className="point run"><div className="label">run</div></div>
          <div className="point ran"><div className="label">ran</div></div>
          <div className="point running"><div className="label">running</div></div>

          {/* Animals */}
          <div className="point dog"><div className="label">dog</div></div>
          <div className="point puppy"><div className="label">puppy</div></div>
          <div className="point cat"><div className="label">cat</div></div>
          <div className="point kitten"><div className="label">kitten</div></div>

          <div className="vector-line vector-man-king" style={{ opacity: step >= 2 ? 1 : 0 }}></div>
          <div className="vector-line vector-woman-queen" style={{ opacity: step >= 3 ? 1 : 0 }}></div>
        </div>
      </div>
      <style>{`
        .scene {
          width: 400px;
          height: 400px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s linear;
        }
        
        .grid-plane, .grid-plane-xy, .grid-plane-yz {
          width: 400px;
          height: 400px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -200px;
          margin-left: -200px;
          background-image: 
            linear-gradient(rgba(71, 85, 105, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(71, 85, 105, 0.5) 1px, transparent 1px);
          background-size: 25px 25px;
        }
        .grid-plane {
            transform: translateY(200px) rotateX(90deg);
        }
        .grid-plane-xy {
            transform: translateZ(-200px);
            opacity: 0.3;
        }
        .grid-plane-yz {
            transform: translateX(-200px) rotateY(90deg);
            opacity: 0.3;
        }

        .axis { 
          position: absolute; 
          background: #94a3b8;
          top: 50%;
          left: 50%;
        }
        .axis-label { 
          position: absolute; 
          color: #94a3b8; 
          font-size: 1.2rem; 
          font-weight: bold;
        }
        .x-axis { width: 400px; height: 2px; margin-left: -200px; margin-top: -1px; }
        .x-label { left: calc(50% + 210px); top: 50%; transform: translate(-50%, -50%); }

        .y-axis { width: 2px; height: 400px; margin-left: -1px; margin-top: -200px; }
        .y-label { top: calc(50% - 220px); left: 50%; transform: translate(-50%, -50%); }
        
        .z-axis { width: 2px; height: 400px; margin-left: -1px; margin-top: -200px; transform: rotateX(90deg); }
        .z-label { left: 50%; top: calc(50% + 210px); transform: translate(-50%, -50%) rotateX(90deg); }

        .point { 
          position: absolute; 
          top: 50%; 
          left: 50%;
          margin-top: -0.5rem;
          margin-left: -0.5rem;
          width: 1rem; 
          height: 1rem; 
          border-radius: 9999px; 
          border: 2px solid #fff; 
          transform-style: preserve-3d;
          opacity: 0;
          animation: fade-in 0.5s forwards;
        }
        .label { 
          position: absolute; 
          bottom: 150%; 
          left: 50%; 
          transform: translateX(-50%);
          padding: 0.1rem 0.4rem;
          color: white; 
          font-size: 0.75rem;
          white-space: nowrap; 
          background: rgba(0,0,0,0.7);
          border-radius: 4px;
        }
        
        /* Coordinates adjusted for visual proximity */
        .king    { animation-delay: 0.1s; transform: translate3d(-60px, -50px, 20px); }
        .man     { animation-delay: 0.2s; transform: translate3d(40px, -55px, 15px); }
        .woman   { animation-delay: 0.3s; transform: translate3d(45px, 45px, 25px); }
        .queen   { animation-delay: 0.4s; transform: translate3d(-55px, 50px, 30px); }
        .prince  { animation-delay: 0.5s; transform: translate3d(20px, -40px, 0px); }
        .princess{ animation-delay: 0.6s; transform: translate3d(-75px, 35px, 10px); }
        
        .france  { animation-delay: 0.7s; transform: translate3d(120px, 10px, -60px); }
        .paris   { animation-delay: 0.8s; transform: translate3d(125px, 60px, -55px); }
        .japan   { animation-delay: 0.9s; transform: translate3d(-100px, 5px, -90px); }
        .tokyo   { animation-delay: 1.0s; transform: translate3d(-95px, 55px, -85px); }
        .germany { animation-delay: 1.1s; transform: translate3d(100px, -80px, 50px); }
        .berlin  { animation-delay: 1.2s; transform: translate3d(105px, -30px, 55px); }

        .walk    { animation-delay: 1.3s; transform: translate3d(-20px, 140px, -120px); }
        .walked  { animation-delay: 1.4s; transform: translate3d(30px, 135px, -115px); }
        .walking { animation-delay: 1.5s; transform: translate3d(5px, 165px, -95px); }
        .run     { animation-delay: 1.6s; transform: translate3d(-15px, -140px, 120px); }
        .ran     { animation-delay: 1.7s; transform: translate3d(35px, -145px, 125px); }
        .running { animation-delay: 1.8s; transform: translate3d(10px, -115px, 145px); }

        .dog     { animation-delay: 1.9s; transform: translate3d(-150px, -100px, 70px); }
        .puppy   { animation-delay: 2.0s; transform: translate3d(-120px, -80px, 60px); }
        .cat     { animation-delay: 2.1s; transform: translate3d(-160px, 80px, 80px); }
        .kitten  { animation-delay: 2.2s; transform: translate3d(-130px, 100px, 70px); }

        .king, .queen, .man, .woman, .prince, .princess { background: #38bdf8; box-shadow: 0 0 12px #38bdf8; }
        .france, .paris, .japan, .tokyo, .germany, .berlin { background: #a78bfa; box-shadow: 0 0 12px #a78bfa;}
        .walk, .walked, .walking, .run, .ran, .running { background: #f97316; box-shadow: 0 0 12px #f97316;}
        .dog, .puppy, .cat, .kitten { background: #f43f5e; box-shadow: 0 0 12px #f43f5e; }

        .vector-line {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 3px;
            border-radius: 2px;
            transform-style: preserve-3d;
            transform-origin: left center;
            transition: opacity 0.5s;
        }
        .vector-line::before { /* Vector body */
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 2px;
            animation: draw-vector 1s ease-out forwards;
        }
        @keyframes draw-vector {
            from { width: 0; }
            to { width: 100%; }
        }
        .vector-line::after { /* Arrow head */
            content: '';
            position: absolute;
            right: -3px;
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
            width: 10px;
            height: 10px;
            border-top-style: solid;
            border-right-style: solid;
            border-width: 3px;
            opacity: 0;
            animation: fade-in 0.3s 0.8s forwards;
        }
        @keyframes fade-in { from { opacity: 0 } to { opacity: 1 } }

        .vector-man-king {
            width: 100px;
            transform: translate3d(40px, -55px, 15px) rotateY(180deg) rotateZ(3deg) rotateX(-2deg);
        }
        .vector-man-king::before { background: #f59e0b; animation-delay: 2.5s; }
        .vector-man-king::after { border-color: #f59e0b; animation-delay: 3.3s; }
        
        .vector-woman-queen {
            width: 100px;
            transform: translate3d(45px, 45px, 25px) rotateY(180deg) rotateZ(-2deg);
        }
        .vector-woman-queen::before { background: #14b8a6; animation-delay: 4.5s; }
        .vector-woman-queen::after { border-color: #14b8a6; animation-delay: 5.3s; }
      `}</style>
    </div>
  );
};