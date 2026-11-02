import React from 'react';

export default function SectionHeading({ badge, title, subtitle, align = "center" }) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center flex flex-col items-center" : "text-left"}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
