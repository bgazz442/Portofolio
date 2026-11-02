import React from 'react';
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../UI/Icons';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 group shadow-lg">
      
      {/* Card Header & Thumbnail */}
      <div>
        <div className="relative aspect-video overflow-hidden bg-slate-950">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Role badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-900/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
            {project.role}
          </div>

          {/* Quick View Button overlay on hover */}
          <button
            onClick={() => onSelectProject(project)}
            className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/90 text-white backdrop-blur-md flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Case Study</span>
          </button>
        </div>

        {/* Card Content */}
        <div className="p-5 md:p-6 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 
              onClick={() => onSelectProject(project)}
              className="text-base md:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
          </div>

          <p className="text-xs md:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.slice(0, 4).map((tag, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/80 text-slate-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-cyan-400 bg-cyan-950/40">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 md:px-6 pb-5 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelectProject(project)}
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors cursor-pointer py-1"
        >
          <span>Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="View Repository"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
              title="View Live Demo"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
}
