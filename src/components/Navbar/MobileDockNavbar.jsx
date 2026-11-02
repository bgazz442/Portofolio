import React from 'react';
import { 
  Home, 
  User, 
  Sparkles, 
  Code2, 
  Layers, 
  Mail 
} from 'lucide-react';
import Dock from '../ReactBits/Dock';

export default function MobileDockNavbar({ activeSection, onNavigate, isHidden = false }) {
  if (isHidden) return null;

  const items = [
    {
      icon: <Home className={`w-5 h-5 transition-colors ${activeSection === 'home' ? 'text-cyan-400' : 'text-slate-300'}`} />,
      label: 'Home',
      onClick: () => onNavigate('home'),
      className: activeSection === 'home' ? 'active-dock-item' : ''
    },
    {
      icon: <User className={`w-5 h-5 transition-colors ${activeSection === 'about' ? 'text-cyan-400' : 'text-slate-300'}`} />,
      label: 'About',
      onClick: () => onNavigate('about'),
      className: activeSection === 'about' ? 'active-dock-item' : ''
    },
    {
      icon: <Sparkles className={`w-5 h-5 transition-colors ${activeSection === 'hobbies' ? 'text-cyan-400' : 'text-slate-300'}`} />,
      label: 'Hobbies',
      onClick: () => onNavigate('hobbies'),
      className: activeSection === 'hobbies' ? 'active-dock-item' : ''
    },
    {
      icon: <Code2 className={`w-5 h-5 transition-colors ${activeSection === 'skills' ? 'text-cyan-400' : 'text-slate-300'}`} />,
      label: 'Skills',
      onClick: () => onNavigate('skills'),
      className: activeSection === 'skills' ? 'active-dock-item' : ''
    },
    {
      icon: <Layers className={`w-5 h-5 transition-colors ${activeSection === 'projects' ? 'text-cyan-400' : 'text-slate-300'}`} />,
      label: 'Projects',
      onClick: () => onNavigate('projects'),
      className: activeSection === 'projects' ? 'active-dock-item' : ''
    },
    {
      icon: <Mail className={`w-5 h-5 transition-colors ${activeSection === 'contact' ? 'text-cyan-400' : 'text-slate-300'}`} />,
      label: 'Contact',
      onClick: () => onNavigate('contact'),
      className: activeSection === 'contact' ? 'active-dock-item' : ''
    }
  ];

  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 md:hidden flex justify-center pointer-events-none px-2 select-none animate-fade-in">
      <div className="pointer-events-auto">
        <Dock
          items={items}
          panelHeight={56}
          baseItemSize={42}
          magnification={58}
          distance={140}
          dockHeight={180}
          spring={{ mass: 0.1, stiffness: 180, damping: 14 }}
          className="shadow-2xl border-cyan-500/30"
        />
      </div>
    </div>
  );
}
