import React, { useState } from 'react';
import { 
  Gamepad2, 
  Code2, 
  Video, 
  Camera, 
  Headphones,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Layers
} from 'lucide-react';

const iconMap = {
  Gamepad2,
  Code2,
  Video,
  Camera,
  Headphones
};

export default function HobbyCard({ hobby, onCardClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[hobby.icon] || Sparkles;

  const renderHobbyVisual = () => {
    switch (hobby.id) {
      case 'gaming':
        return (
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-indigo-950/50 border border-indigo-500/30 text-indigo-400 group-hover:border-indigo-400/60 transition-all duration-300">
            <IconComponent className="w-5 h-5 hobby-icon-gaming transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
          </div>
        );

      case 'coding':
        return (
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400/60 transition-all duration-300">
            <IconComponent className="w-5 h-5" />
            <div className="absolute -bottom-1 -right-1 text-[9px] font-mono font-bold text-cyan-300 px-1 py-0.5 bg-slate-900 border border-cyan-500/40 rounded">
              &gt;_
            </div>
          </div>
        );

      case 'content-creation':
        return (
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-rose-950/50 border border-rose-500/30 text-rose-400 group-hover:border-rose-400/60 transition-all duration-300">
            <IconComponent className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 flex items-center gap-1 bg-slate-900/90 px-1.5 py-0.5 rounded-full border border-rose-500/30">
              <span className="rec-pulse-dot"></span>
              <span className="text-[8px] font-mono text-rose-400 font-bold">REC</span>
            </div>
          </div>
        );

      case 'photography':
        return (
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-amber-950/50 border border-amber-500/30 text-amber-400 group-hover:border-amber-400/60 transition-all duration-300">
            <span className="photo-bracket photo-bracket-tl absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-amber-500/60 rounded-tl-sm"></span>
            <span className="photo-bracket photo-bracket-br absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-amber-500/60 rounded-br-sm"></span>
            <IconComponent className="w-5 h-5" />
          </div>
        );

      case 'music':
        return (
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-400 group-hover:border-purple-400/60 transition-all duration-300">
            <IconComponent className="w-5 h-5" />
            <div className="absolute -bottom-1 -right-1 flex items-end gap-0.5 px-1 py-0.5 bg-slate-900 border border-purple-500/40 rounded h-3.5">
              <div className="eq-bar"></div>
              <div className="eq-bar"></div>
              <div className="eq-bar"></div>
              <div className="eq-bar"></div>
              <div className="eq-bar"></div>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-800 border border-white/10 text-slate-300">
            <IconComponent className="w-5 h-5" />
          </div>
        );
    }
  };

  const getActionHint = () => {
    switch (hobby.id) {
      case 'gaming':
        return 'Lihat Detail Free Fire & eFootball →';
      case 'coding':
        return 'Jelajahi Showcase Kode & Shaders →';
      case 'content-creation':
        return 'Buka Channel YouTube & TikTok →';
      case 'photography':
        return 'Buka Galeri Foto & Zoom →';
      case 'music':
        return 'Dengarkan Lo-Fi Deep Work (YouTube) ↗';
      default:
        return 'Eksplorasi →';
    }
  };

  return (
    <div
      onClick={() => onCardClick(hobby)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass-card p-6 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/10 hover:border-cyan-500/40 hobby-card-${hobby.id} flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]`}
      role="button"
      tabIndex={0}
    >
      {/* Subtle Background Glow Tint on Hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      <div className="relative z-10 flex flex-col h-full justify-between space-y-4">
        
        {/* Top Header of Card */}
        <div>
          <div className="flex items-start justify-between gap-3 mb-4">
            {renderHobbyVisual()}

            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors">
              {hobby.badge}
            </span>
          </div>

          <div className="space-y-1.5 mb-2">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {hobby.title}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <p className="text-xs text-slate-400 font-mono">
              {hobby.subtitle}
            </p>
          </div>
          
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            {hobby.description}
          </p>
        </div>

        {/* Action Hint Footer */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
          <span className="text-[11px] font-mono text-cyan-400 font-medium group-hover:underline">
            {getActionHint()}
          </span>
          <span className="text-[10px] text-slate-500 font-mono">Click to view</span>
        </div>

      </div>
    </div>
  );
}
