import React from 'react';
import { GraduationCap, Compass, CheckCircle2, Terminal } from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';
import { personalData } from '../../data/portfolioData';

export default function AboutSection() {
  const { about } = personalData;

  return (
    <section id="about" className="section-padding relative">
      <div className="portfolio-container">
        <SectionHeading
          badge="About Me"
          title="Engineering Purposeful Digital Solutions"
          subtitle="Menggabungkan logika rekayasa perangkat lunak dengan pendekatan antarmuka yang ramah pengguna."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Developer Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden border border-white/10 shadow-xl">
              <div className="absolute top-0 right-0 p-8 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Profile Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/30 p-1 flex-shrink-0 overflow-hidden shadow-inner">
                  <img
                    src={personalData.avatar}
                    alt={personalData.fullName}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{personalData.fullName}</h3>
                  <p className="text-xs text-cyan-400 font-mono">{personalData.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">📍 {personalData.location}</p>
                </div>
              </div>

              {/* Core Philosophy */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 mb-6 text-xs md:text-sm text-slate-300 italic leading-relaxed">
                "{about.philosophy}"
              </div>

              {/* Education Milestone */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>Formal Education</span>
                </div>
                {about.education.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-semibold text-white">{edu.degree}</span>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium mb-1.5">{edu.institution}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">

            {/* Story Paragraphs */}
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Terminal className="w-4 h-4" />
                <span>Background &amp; Overview</span>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {about.story}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Fokus utama saya adalah menciptakan produk digital yang tidak hanya memiliki tampilan memikat, namun juga performa yang teruji, kode yang terstruktur (clean code), dan skalabilitas yang siap menjawab kebutuhan bisnis di masa depan.
              </p>
            </div>

            {/* Core Focus Pillars */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Core Engineering Pillars</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {about.focusAreas.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
