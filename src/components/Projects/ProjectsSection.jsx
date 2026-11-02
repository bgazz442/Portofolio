import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  Eye
} from 'lucide-react';
import { GithubIcon } from '../UI/Icons';
import SectionHeading from '../UI/SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { personalData } from '../../data/portfolioData';

export default function ProjectsSection({ onModalStateChange }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = personalData;

  const featuredProject = projects.find(p => p.isFeatured) || projects[0];
  const secondaryProjects = projects.filter(p => p.id !== featuredProject?.id);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    if (onModalStateChange) onModalStateChange(true);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (onModalStateChange) onModalStateChange(false);
  };

  return (
    <section id="projects" className="section-padding relative">
      <div 
        className="ambient-glow-circle w-96 h-96 bg-indigo-500/10 -top-10 left-1/3" 
        aria-hidden="true" 
      />

      <div className="portfolio-container relative z-10">
        <SectionHeading 
          badge="Selected Works"
          title="Featured Projects"
          subtitle="Koleksi proyek perangkat lunak pilihan yang mencerminkan kapabilitas arsitektur sistem, desain antarmuka, dan penyelesaian masalah teknis."
        />

        {/* HERO FEATURED PROJECT BANNER */}
        {featuredProject && (
          <div className="mb-14">
            <div className="glass-panel p-6 md:p-8 lg:p-10 rounded-3xl border border-cyan-500/30 relative overflow-hidden group shadow-2xl">
              
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Info Column */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.25)]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Featured Flagship
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {featuredProject.year} • {featuredProject.role}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm md:text-base text-cyan-300 font-medium">
                    {featuredProject.tagline}
                  </p>

                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {featuredProject.shortDescription}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {featuredProject.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => handleOpenProject(featuredProject)}
                      className="btn-primary text-xs md:text-sm py-2.5 cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Deep Dive Case Study</span>
                    </button>
                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs md:text-sm py-2.5"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Preview</span>
                      </a>
                    )}
                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-all text-slate-300"
                        title="View Source Code"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Visual Column */}
                <div className="lg:col-span-6">
                  <div 
                    onClick={() => handleOpenProject(featuredProject)}
                    className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 aspect-video group/img cursor-pointer shadow-2xl"
                  >
                    <img 
                      src={featuredProject.thumbnail} 
                      alt={featuredProject.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-between p-4">
                      <span className="text-xs font-mono text-cyan-300 bg-slate-900/90 px-3 py-1 rounded-full border border-cyan-500/30">
                        Click to view full architecture
                      </span>
                      <div className="p-2 rounded-full bg-cyan-500 text-white shadow-lg group-hover/img:scale-110 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* SECONDARY PROJECTS GRID */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Other Notable Projects
            </h4>
            <span className="text-xs text-slate-500 font-mono">
              {secondaryProjects.length} projects documented
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onSelectProject={handleOpenProject}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseProject} 
        />
      )}
    </section>
  );
}
