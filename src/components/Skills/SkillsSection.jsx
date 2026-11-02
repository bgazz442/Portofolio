import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Wrench, 
  Sparkles
} from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';
import { personalData } from '../../data/portfolioData';

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  tools: Wrench
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const { skillCategories } = personalData;

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="section-padding relative">
      <div 
        className="ambient-glow-circle w-96 h-96 bg-cyan-500/10 -top-20 right-10" 
        aria-hidden="true" 
      />

      <div className="portfolio-container relative z-10">
        <SectionHeading 
          badge="Technical Competence"
          title="Skills &amp; Technologies"
          subtitle="Teknologi dan perangkat standar industri yang saya gunakan dalam membangun ekosistem perangkat lunak yang andal."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white hover:border-white/20'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                    : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;

            return (
              <div 
                key={cat.id}
                className="glass-panel p-6 md:p-7 rounded-2xl border border-white/10 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{cat.name}</h3>
                      <p className="text-xs text-slate-400">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skill Items List */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-200 flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform"></span>
                          <span className="text-xs md:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-white/5">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{cat.skills.length} core stacks</span>
                  <span className="text-cyan-400/80">⚡ Verified</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
