import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  AlertCircle, 
  Lightbulb, 
  UserCheck 
} from 'lucide-react';
import { GithubIcon } from '../UI/Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 modal-overlay">
      {/* Dark Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card Container */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl modal-content text-slate-200 z-10 custom-scrollbar"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-lg border-b border-white/10 px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Project Case Study</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6">
          
          {/* Thumbnail Preview */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-slate-950">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
              {project.role}
            </div>
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 id="modal-title" className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-cyan-400 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-1 pb-3 border-b border-white/10">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Section: Overview */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Project Overview</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          {/* Section: Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-red-400 mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {project.details.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-400 mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Section: Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Key Features &amp; Deliverables</span>
            </h4>
            <ul className="space-y-2">
              {project.details.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Personal Contribution */}
          <div className="p-4 rounded-xl bg-slate-800/40 border border-white/5 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-cyan-400">
              <UserCheck className="w-4 h-4" />
              <span>My Role &amp; Contribution</span>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {project.details.contribution}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center py-2.5 text-xs md:text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Live Application</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 justify-center py-2.5 text-xs md:text-sm"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>Source Repository</span>
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
