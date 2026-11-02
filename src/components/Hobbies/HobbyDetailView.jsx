import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Gamepad2, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Maximize2, 
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import WebThreads from '../ReactBits/WebThreads';

export default function HobbyDetailView({ hobby, onBack }) {
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    // Scroll to top smoothly when opening hobby detail page
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
        } else {
          onBack();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack, zoomedImage]);

  if (!hobby) return null;

  const isGaming = hobby.id === 'gaming';
  const isCoding = hobby.id === 'coding';

  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Background WebThreads Effect */}
      <div className="fixed inset-0 z-0 opacity-70 pointer-events-auto">
        <WebThreads
          color1={isGaming ? '#4f46e5' : '#06b6d4'}
          color2={isGaming ? '#d946ef' : '#8b5cf6'}
          color3="#ffffff"
          speed={0.25}
          threadCount={7}
          frequency={4.5}
          spread={0.22}
          taper={1.2}
          position={0.5}
          fanMode="center"
          glow={0.025}
          falloff={0.55}
          thickness={1.2}
          brightness={0.7}
          opacity={0.85}
          mirror={true}
          shimmer={true}
          grain={true}
          grainIntensity={0.04}
          mouseInteraction={true}
          mouseStrength={0.4}
        />
      </div>

      {/* Dark overlay gradient for readable content */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#060911]/85 via-[#060911]/75 to-[#060911]/95 pointer-events-none z-[1]" />

      {/* Content Container */}
      <div className="relative z-10 portfolio-container pt-8 pb-20 md:pt-12 md:pb-28">
        
        {/* Navigation Bar / Back button */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/15 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg group"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs md:text-sm font-semibold">Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-cyan-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Hobby Exploration</span>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-3xl border border-white/15 mb-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isGaming ? 'bg-indigo-500/25 text-indigo-300 border border-indigo-500/40' : 'bg-cyan-500/25 text-cyan-300 border border-cyan-500/40'} flex items-center gap-1.5`}>
                {isGaming ? <Gamepad2 className="w-3.5 h-3.5" /> : <Code2 className="w-3.5 h-3.5" />}
                {hobby.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {hobby.subtitle}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              {hobby.title}
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              {isGaming 
                ? "Menjelajahi dunia gaming taktis dan kompetitif yang melatih kecepatan reaksi, pemahaman spasial mendalam, serta strategi pengambilan keputusan kritis di bawah tekanan."
                : (hobby.details?.intro || hobby.description)}
            </p>
          </div>
        </div>

        {/* =========================================================================
            GAMING VIEW: FREE FIRE & EFOOTBALL
            ========================================================================= */}
        {isGaming && hobby.games && (
          <div className="space-y-16">
            {hobby.games.map((game, idx) => (
              <div 
                key={game.id} 
                className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 shadow-xl space-y-8"
              >
                {/* Game Title & Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                        GAME 0{idx + 1}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                        {game.genre}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {game.name}
                    </h2>
                  </div>

                  <span className="self-start md:self-auto px-3.5 py-1 rounded-full text-xs font-medium bg-slate-900 border border-white/10 text-cyan-300">
                    {game.badge}
                  </span>
                </div>

                {/* Game Description & Skill Pillars */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                      <span>Gameplay Overview &amp; Strategy</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {game.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-950/60 border border-white/10 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                      Key Competencies Trained
                    </h4>
                    <ul className="space-y-2">
                      {game.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Photo Gallery for This Game */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <span>Gallery &amp; In-Game Moments</span>
                    <span className="text-[10px] text-slate-500">(Click image to expand)</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {game.photos.map((photoUrl, pIdx) => (
                      <div 
                        key={pIdx}
                        onClick={() => setZoomedImage(photoUrl)}
                        className="group/img relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 aspect-[16/9] cursor-pointer shadow-lg hover:border-cyan-400/60 transition-all duration-300"
                      >
                        <img 
                          src={photoUrl} 
                          alt={`${game.name} moment ${pIdx + 1}`}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                          <span className="text-xs font-medium text-white">
                            {game.name} — Screenshot {pIdx + 1}
                          </span>
                          <div className="p-2 rounded-full bg-cyan-500 text-white shadow-md">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* =========================================================================
            CREATIVE CODING VIEW
            ========================================================================= */}
        {isCoding && hobby.details && (
          <div className="space-y-12">
            
            {/* Highlights Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {hobby.details.highlights.map((highlight, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-cyan-500/20 flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 block mb-1">PILLAR 0{idx + 1}</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                      {highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Screenshots Gallery Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                    <span>Creative Coding Artifacts &amp; Workspaces</span>
                  </h2>
                  <p className="text-xs text-slate-400 font-mono">
                    Cuplikan lingkungan pemrograman, eksperimen visual, dan arsitektur kode
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
                  {hobby.details.photos.length} Screenshots
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {hobby.details.photos.map((photoUrl, pIdx) => (
                  <div 
                    key={pIdx}
                    onClick={() => setZoomedImage(photoUrl)}
                    className="group/img glass-card rounded-2xl overflow-hidden border border-white/15 bg-slate-950 flex flex-col justify-between cursor-pointer hover:border-cyan-400/60 transition-all duration-300 shadow-xl"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={photoUrl} 
                        alt={`Creative Coding Snapshot ${pIdx + 1}`}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-cyan-400 border border-white/10 opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="p-4 bg-slate-900/90 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-200">
                        Code Workspace 0{pIdx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400">
                        View Fullscreen →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Back to top or portfolio footer button */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="btn-primary text-xs md:text-sm py-2.5 cursor-pointer w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Halaman Utama Portfolio</span>
          </button>

          <p className="text-xs text-slate-400 font-mono">
            &copy; 2026 Bagas Chandra Nirvana
          </p>
        </div>

      </div>

      {/* Lightbox / Zoom Modal for Single Image */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/90 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer z-10"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative max-w-5xl max-h-[88vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={zoomedImage} 
              alt="Zoomed View" 
              className="max-h-[85vh] w-auto object-contain mx-auto rounded-xl"
            />
          </div>
        </div>
      )}

    </div>
  );
}
