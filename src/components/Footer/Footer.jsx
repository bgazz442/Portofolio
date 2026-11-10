import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../UI/Icons';
import { personalData } from '../../data/portfolioData';

export default function Footer({ onNavigate }) {
  const { footer, contact } = personalData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-md pt-12 pb-24 md:pb-10 text-slate-400 text-xs">
      <div className="portfolio-container">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand & Role */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]"></span>
              <span className="text-white font-bold text-base tracking-wide">{personalData.fullName}</span>
            </div>
            <p className="text-slate-400 text-xs">{personalData.title}</p>
            <p className="text-slate-500 text-[11px]">{footer.tagline}</p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('about')} 
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => onNavigate('hobbies')} 
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Hobbies
            </button>
            <button 
              onClick={() => onNavigate('projects')} 
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Socials & Back to top button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {contact.github && (
                <a 
                  href={contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-slate-900 border border-white/5 hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              )}
              {contact.linkedin && (
                <a 
                  href={contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-slate-900 border border-white/5 hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              )}
              {contact.instagram && (
                <a 
                  href={contact.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-slate-900 border border-white/5 hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Meta */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {footer.currentYear} {footer.copyrightName}. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono">
            Crafted with React, Modern CSS &amp; Clean Code
          </p>
        </div>

      </div>
    </footer>
  );
}
