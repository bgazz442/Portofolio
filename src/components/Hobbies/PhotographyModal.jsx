import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Camera, 
  ZoomIn, 
  ZoomOut,
  Image as ImageIcon
} from 'lucide-react';

export default function PhotographyModal({ isOpen, onClose, photos = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const galleryList = photos.length > 0 ? photos : [
    { src: "/assets/hobbies/photo-1.jpeg", title: "Frame 01", tag: "Atmospheric" },
    { src: "/assets/hobbies/photo-2.jpeg", title: "Frame 02", tag: "Composition" },
    { src: "/assets/hobbies/photo-3.jpeg", title: "Frame 03", tag: "Perspective" },
    { src: "/assets/hobbies/photo-4.jpeg", title: "Frame 04", tag: "Light & Tone" },
    { src: "/assets/hobbies/photo-5.jpeg", title: "Frame 05", tag: "Detail Focus" },
    { src: "/assets/hobbies/photo-6.jpeg", title: "Frame 06", tag: "Minimalism" },
    { src: "/assets/hobbies/photo-7.jpeg", title: "Frame 07", tag: "Shadows" }
  ];

  const handleNext = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % galleryList.length);
  };

  const handlePrev = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + galleryList.length) % galleryList.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, isZoomed, galleryList.length]);

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  if (!isOpen) return null;

  const currentPhoto = galleryList[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 modal-overlay">
      {/* Dark backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-xl" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div 
        className="relative w-full max-w-5xl max-h-[95vh] bg-slate-950/90 border border-amber-500/30 rounded-3xl p-4 sm:p-6 shadow-2xl modal-content flex flex-col justify-between z-10 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-400">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Photography Showcase
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {currentIndex + 1} / {galleryList.length}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                {currentPhoto?.tag || 'Urban & Aesthetic Perspective'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-full text-slate-300 hover:text-white bg-slate-900 border border-white/10 hover:border-amber-400/50 transition-all cursor-pointer hidden sm:flex items-center gap-1.5 text-xs"
              title={isZoomed ? "Reset Zoom" : "Click to Zoom"}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4 text-amber-400" /> : <ZoomIn className="w-4 h-4 text-amber-400" />}
              <span>{isZoomed ? "Exit Zoom" : "Zoom"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white bg-slate-900 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Main Image Canvas */}
        <div 
          className="relative flex-1 flex items-center justify-center my-2 overflow-hidden rounded-2xl bg-black/60 border border-white/5 min-h-[300px] sm:min-h-[420px] max-h-[62vh] select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Image */}
          <div 
            className={`relative max-w-full max-h-full flex items-center justify-center transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setIsZoomed(!isZoomed)}
            title={isZoomed ? "Click to reset zoom" : "Click to zoom"}
          >
            <img 
              src={currentPhoto.src} 
              alt={currentPhoto.title || `Photo ${currentIndex + 1}`}
              className="max-h-[58vh] max-w-full w-auto object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Navigation Overlay Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/15 backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-xl z-20"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/15 backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-xl z-20"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Hint Overlay for Mobile */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[10px] text-slate-300 font-mono pointer-events-none flex items-center gap-1.5">
            <span>Swipe or click arrows to browse</span>
            <span className="text-amber-400">• Click photo to zoom</span>
          </div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="pt-3 border-t border-white/10 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-1 custom-scrollbar">
            {galleryList.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setIsZoomed(false);
                    setCurrentIndex(idx);
                  }}
                  className={`relative rounded-xl overflow-hidden shrink-0 w-14 h-14 sm:w-16 sm:h-16 border-2 transition-all cursor-pointer ${
                    isActive 
                      ? 'border-amber-400 scale-105 shadow-[0_0_12px_rgba(245,158,11,0.5)]' 
                      : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/30'
                  }`}
                >
                  <img 
                    src={item.src} 
                    alt={`Thumb ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-amber-400/10 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
