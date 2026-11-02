import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Video, 
  Sparkles, 
  Play, 
  Share2 
} from 'lucide-react';

export default function ContentCreationModal({ isOpen, onClose, hobby }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = hobby?.links || {
    youtube: "https://youtube.com/@x.fc.m?si=WrxOVqMlG-Wh2vWe",
    tiktok: "https://www.tiktok.com/@bgfcm2?_r=1&_t=ZS-990eDAXL5Iw"
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 modal-overlay">
      {/* Dark backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-lg bg-slate-900/95 border border-rose-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl modal-content text-slate-200 z-10 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Glow corner */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-rose-950/70 border border-rose-500/30 text-rose-400">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block">
                Channel &amp; Socials
              </span>
              <h3 className="text-lg font-bold text-white">Content Creation</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed relative z-10">
          Pilih platform di bawah ini untuk melihat konten video, tips pemrograman, review teknologi, dan kreasi digital terbaru saya:
        </p>

        {/* Platform Choices */}
        <div className="space-y-4 relative z-10">
          
          {/* YouTube Card */}
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-950/40 to-slate-900 border border-red-500/30 hover:border-red-500/70 hover:shadow-[0_0_25px_rgba(239,68,68,0.25)] transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    YouTube Channel
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                    @x.fc.m
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Tutorial teknologi, video kompilasi, &amp; showcase karya
                </p>
              </div>
            </div>
            <div className="p-2 rounded-full bg-red-500/10 text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* TikTok Card */}
          <a
            href={links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-pink-950/40 border border-pink-500/30 hover:border-pink-500/70 hover:shadow-[0_0_25px_rgba(244,63,94,0.25)] transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-600/20 border border-pink-500/40 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white group-hover:text-pink-400 transition-colors">
                    TikTok
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    @bgfcm2
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Short-form tech clips, setup snippets, &amp; daily creative vibes
                </p>
              </div>
            </div>
            <div className="p-2 rounded-full bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono relative z-10">
          <span>Click to open in new tab</span>
          <span className="text-rose-400 font-semibold">2 Channels Active</span>
        </div>

      </div>
    </div>
  );
}
