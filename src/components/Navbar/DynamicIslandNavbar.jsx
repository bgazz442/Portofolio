import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  User, 
  Sparkles, 
  Code2, 
  Layers, 
  Mail 
} from 'lucide-react';
import { personalData } from '../../data/portfolioData';
import GlassSurface from '../ReactBits/GlassSurface';
import ElasticMesh from '../ReactBits/ElasticMesh';

export default function DynamicIslandNavbar({ activeSection, onNavigate, isHidden = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [meshVisible, setMeshVisible] = useState(false);
  const [meshOpacity, setMeshOpacity] = useState(0);
  const fadeTimerRef = useRef(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'hobbies', label: 'Hobbies', icon: Sparkles },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Smooth hysteresis prevents jitter during rapid scroll
          if (scrollY > 80) {
            setScrolled(true);
          } else if (scrollY < 25) {
            setScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavMouseEnter = () => {
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    setMeshVisible(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMeshOpacity(1));
    });
  };

  const handleNavMouseLeave = () => {
    setMeshOpacity(0);
    fadeTimerRef.current = setTimeout(() => {
      setMeshVisible(false);
    }, 600);
  };

  useEffect(() => {
    return () => {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    };
  }, []);

  if (isHidden) return null;

  return (
    <header className={`dynamic-island-wrapper hidden md:flex ${scrolled ? 'scrolled' : ''}`}>
      {/* Outer hover-sensing wrapper — positions mesh + glass together */}
      <div
        className="dynamic-island-hover-root"
        onMouseEnter={handleNavMouseEnter}
        onMouseLeave={handleNavMouseLeave}
      >
        {/* ElasticMesh hover effect — mounts/unmounts to free WebGL context when hidden */}
        {meshVisible && (
          <div
            className="elastic-mesh-nav-overlay"
            style={{
              opacity: meshOpacity,
              transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'opacity, transform'
            }}
            aria-hidden="true"
          >
            <ElasticMesh
              className="elastic-mesh-nav"
              color1="#072034"
              color2="#0f1540"
              showGrid={true}
              gridOpacity={0.12}
              gridDensity={20}
              gridColor="#06b6d4"
              borderRadius={9999}
              tilt={6}
              shading={0.48}
              stiffness={0.045}
              damping={0.28}
              wobble={2.8}
              pull={0.28}
              grabRadius={0.65}
              resolution={26}
              interaction="hover"
            />
          </div>
        )}

        <GlassSurface
          borderRadius={9999}
          brightness={55}
          opacity={0.92}
          blur={12}
          backgroundOpacity={0.1}
          saturation={1.3}
          distortionScale={-120}
          className="dynamic-island-glass-wrapper"
        >
          <nav
            className={`dynamic-island ${scrolled ? 'scrolled-down' : ''}`}
            aria-label="Main Navigation Desktop"
          >
            {/* Brand Logo / Monogram */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-white font-bold text-sm tracking-wide bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              title="Go to Home"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] animate-pulse"></span>
              <span>{personalData.name}</span>
            </button>

            <div className="h-4 w-[1px] bg-white/10 mx-1" />

            {/* Desktop Nav Items */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`nav-pill-item ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && <div className="nav-pill-active-bg" />}
                    <Icon className={`w-3.5 h-3.5 transition-colors duration-200 ${isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-white'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </GlassSurface>
      </div>
    </header>
  );
}
