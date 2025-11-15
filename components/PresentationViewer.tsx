import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { presentations } from '../presentations';
import type { Presentation, SlideComponent } from '../types';

const DESIGN_WIDTH = 1280;
const DESIGN_HEIGHT = 720;

const PresentationViewer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [zoomMode, setZoomMode] = useState('fit'); // 'fit', 'fill', or a number string like '1.5'
  const containerRef = useRef<HTMLDivElement>(null);

  const presentation = presentations.find(p => p.id === id);

  const goToNextSlide = useCallback(() => {
    if (presentation) {
      setCurrentSlideIndex(prev => Math.min(prev + 1, presentation.slides.length - 1));
    }
  }, [presentation]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex(prev => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === 'Escape') {
        navigate('/');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, navigate]);

  const calculateScale = useCallback(() => {
    const targetElement = containerRef.current;
    if (!targetElement) return;

    const availableWidth = targetElement.offsetWidth;
    const availableHeight = targetElement.offsetHeight;

    let newScale = 1;

    if (zoomMode === 'fit') {
      const scaleW = availableWidth / DESIGN_WIDTH;
      const scaleH = availableHeight / DESIGN_HEIGHT;
      newScale = Math.min(scaleW, scaleH);
    } else if (zoomMode === 'fill') {
      newScale = availableWidth / DESIGN_WIDTH;
    } else { // It's a number string
      newScale = parseFloat(zoomMode);
    }
    
    setScale(newScale);
  }, [zoomMode]);


  useEffect(() => {
    const targetElement = containerRef.current;
    if (!targetElement) return;

    const resizeObserver = new ResizeObserver(calculateScale);
    // Only observe for dynamic scaling modes
    if (zoomMode === 'fit' || zoomMode === 'fill') {
      resizeObserver.observe(targetElement);
    }
    
    calculateScale(); // Initial calculation

    return () => {
      if(targetElement) {
        resizeObserver.unobserve(targetElement);
      }
    };
  }, [calculateScale, zoomMode]);

  if (!presentation) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h2 className="text-2xl mb-4">Presentation not found.</h2>
        <Link to="/" className="px-4 py-2 bg-sky-500 rounded hover:bg-sky-600 transition-colors">
          Back to List
        </Link>
      </div>
    );
  }

  const CurrentSlide: SlideComponent = presentation.slides[currentSlideIndex];
  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === presentation.slides.length - 1;

  return (
    <div className="w-full h-screen bg-slate-900 flex flex-col p-4 overflow-hidden">
      {/* Presentation Area */}
      <div ref={containerRef} className="flex-grow w-full flex items-center justify-center overflow-hidden">
        <div
          className="bg-slate-800 shadow-2xl"
          style={{
            width: `${DESIGN_WIDTH}px`,
            height: `${DESIGN_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'center',
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          <CurrentSlide />
        </div>
      </div>
      
      {/* Controls Bar */}
      <div className="w-full max-w-7xl mx-auto mt-4 grid grid-cols-3 items-center text-white shrink-0">
        {/* Left: Home Link */}
        <div className="justify-self-start">
            <Link to="/" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
            </Link>
        </div>
        
        {/* Center: Navigation & Zoom */}
        <div className="flex items-center justify-center gap-6">
          {/* Pagination Group */}
          <div className="flex items-center bg-slate-800 border border-slate-700 rounded-md overflow-hidden">
            <button
              onClick={goToPrevSlide}
              disabled={isFirstSlide}
              className="px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
              aria-label="Previous slide"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <span className="px-4 py-2 text-lg font-mono text-slate-400 border-x border-slate-700">
              {currentSlideIndex + 1} / {presentation.slides.length}
            </span>
            <button
              onClick={goToNextSlide}
              disabled={isLastSlide}
              className="px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors flex items-center gap-2"
              aria-label="Next slide"
            >
              <span>Next</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="relative flex items-center">
            <i className="fa-solid fa-magnifying-glass text-slate-400 absolute left-3 pointer-events-none"></i>
            <select
              value={zoomMode}
              onChange={(e) => setZoomMode(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-md pl-10 pr-8 py-2 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
              aria-label="Zoom level"
            >
              <option value="fit">Fit to Screen</option>
              <option value="fill">Fill Width</option>
              <option value="0.5">50%</option>
              <option value="0.75">75%</option>
              <option value="1">100%</option>
              <option value="1.25">125%</option>
              <option value="1.5">150%</option>
            </select>
            <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
          </div>
        </div>
        
        {/* Right: Presentation Title */}
        <div className="justify-self-end truncate text-right">
             <span className="font-semibold text-slate-400">{presentation.name}</span>
        </div>
      </div>
    </div>
  );
};

export default PresentationViewer;