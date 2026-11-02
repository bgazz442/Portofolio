import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../UI/Icons';
import { personalData } from '../../data/portfolioData';
import Lanyard from '../ReactBits/Lanyard';

export default function HeroSection({ onNavigate }) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 md:pt-28 pb-16 overflow-hidden"
    >
      {/* Background Subtle Ambient Glows */}
      <div
        className="ambient-glow-circle w-96 h-96 bg-cyan-500/15 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="ambient-glow-circle w-80 h-80 bg-indigo-500/10 top-1/3 right-10"
        aria-hidden="true"
      />

      <div className="portfolio-container relative z-10 w-full">
        {/*
         * DESKTOP: two-column flex (text left, Lanyard 3D card right)
         * MOBILE:  single column, centered with optimized mobile Lanyard 3D card
         */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12">

          {/* ── LEFT COLUMN: Text Content ── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 max-w-3xl mx-auto md:mx-0">

            {/* Availability Status Badge */}
            {personalData.availability.isAvailable && (
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] mb-6 md:mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personalData.availability.status}</span>
              </div>
            )}

            {/* 3D Lanyard ID Badge — shown on mobile only */}
            {isMobile && (
              <div className="relative mb-6 w-full flex flex-col items-center md:hidden">
                <div className="relative w-full max-w-[310px] h-[350px]">
                  <div className="absolute inset-4 rounded-full bg-cyan-500/15 blur-2xl pointer-events-none" aria-hidden="true" />
                  <Lanyard
                    frontImage="/assets/profile-photo.jpg"
                    backImage="/assets/profile-photo.jpg"
                    cardColor="#090e1c"
                    finish="matte"
                    metal="silver"
                    orientation="portrait"
                    size={0.68}
                    strapLength={0.42}
                    strapImage="/assets/spiderman-strap.png"
                    strapColor="#b3001b"
                    strapWidth={0.72}
                    gravity={1}
                    damping={0.55}
                    elasticity={0.5}
                    breeze={0.35}
                    interactive={true}
                    intro={true}
                  />
                </div>
              </div>
            )}

            {/* Salutation & Name */}
            <div className="space-y-1 mb-4">
              <p className="text-cyan-400 font-mono text-sm md:text-base font-medium tracking-wide">
                Hi, I'm <span className="text-white font-bold">{personalData.name}</span>
              </p>

              <h1 className="text-white font-black tracking-[-0.04em] leading-[1.02] text-[clamp(2.3rem,5vw,4.8rem)] md:text-[clamp(2.8rem,4vw,5.2rem)] max-w-[14ch]">
                {personalData.title}
              </h1>
            </div>

            {/* Punchy Tagline & Short Bio */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium mb-3 max-w-xl">
              &ldquo;{personalData.tagline}&rdquo;
            </p>
            <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mb-8 leading-relaxed">
              {personalData.heroSummary}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('projects')}
                className="btn-primary group w-full sm:w-auto cursor-pointer"
                id="cta-view-projects"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="btn-secondary group w-full sm:w-auto cursor-pointer"
                id="cta-contact-me"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Social Quick Links */}
            <div className="flex items-center gap-3 text-slate-400 mb-10 md:mb-12">
              {personalData.contact.github && (
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
              {personalData.contact.linkedin && (
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}
              {personalData.contact.instagram && (
                <a
                  href={personalData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 hover:text-rose-400 hover:scale-110 active:scale-95 transition-all"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-5 h-5 text-rose-400" />
                </a>
              )}
              <a
                href={`mailto:${personalData.contact.email}`}
                className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Highlights / Quick Metrics Bar */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-3xl">
              {personalData.about.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="glass-card p-3.5 sm:p-4 rounded-xl text-center border border-white/10 bg-slate-900/50"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Desktop 3D Lanyard ID Badge ── */}
          {!isMobile && (
            <div
              className="hidden md:flex flex-col items-center justify-center relative flex-shrink-0"
              style={{ width: '400px', height: '560px' }}
              aria-label="3D ID Badge"
            >
              <div className="absolute inset-4 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" aria-hidden="true" />
              
              <div className="w-full h-full relative z-10">
                <Lanyard
                  frontImage="/assets/profile-photo.jpg"
                  backImage="/assets/profile-photo.jpg"
                  cardColor="#090e1c"
                  finish="matte"
                  metal="silver"
                  orientation="portrait"
                  size={0.65}
                  strapLength={0.46}
                  strapImage="/assets/spiderman-strap.png"
                  strapColor="#b3001b"
                  strapWidth={0.72}
                  gravity={1}
                  damping={0.55}
                  elasticity={0.5}
                  breeze={0.4}
                  interactive={true}
                  intro={true}
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
