import { useState, useEffect } from 'react';
import DynamicIslandNavbar from './components/Navbar/DynamicIslandNavbar';
import MobileDockNavbar from './components/Navbar/MobileDockNavbar';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import HobbiesSection from './components/Hobbies/HobbiesSection';
import HobbyDetailView from './components/Hobbies/HobbyDetailView';
import ProjectsSection from './components/Projects/ProjectsSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import GradientWaves from './components/ReactBits/GradientWaves';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeHobbyDetail, setActiveHobbyDetail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle smooth navigation to section IDs
  const handleNavigate = (sectionId) => {
    if (activeHobbyDetail) {
      setActiveHobbyDetail(null);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -70;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Intersection Observer for updating active nav state on scroll
  useEffect(() => {
    if (activeHobbyDetail) return;

    const sectionIds = ['home', 'about', 'hobbies', 'projects', 'contact'];

    // Direct top & bottom boundary tracking for instantaneous, neat updates
    const handleScroll = () => {
      if (window.scrollY < 90) {
        setActiveSection('home');
      } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -35% 0px',
      threshold: 0.1
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If we are at the very top, let handleScroll prioritize 'home'
          if (window.scrollY < 90 && entry.target.id !== 'home') return;
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [activeHobbyDetail]);

  const navDisabled = isModalOpen || !!activeHobbyDetail;

  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-200">
      
      {/* React Bits GradientWaves Background for Main Web */}
      {!activeHobbyDetail && (
        <div className="fixed inset-0 pointer-events-auto z-0 opacity-60">
          <GradientWaves
            horizonColor="#070b19"
            waveColor="#1e1b4b"
            crestColor="#38bdf8"
            speed={0.25}
            amplitude={2.2}
            waveScale={0.6}
            waveRatio={0.85}
            swell={30}
            turbulence={18}
            tilt={1.11}
            zoom={1.0}
            height={5.2}
            fogDepth={16}
            detail="medium"
            brightness={0.8}
            opacity={0.7}
            mouseInteraction={true}
            parallaxStrength={0.4}
            grain={true}
            grainIntensity={0.03}
          />
        </div>
      )}

      {/* Dark overlay gradient for high text readability */}
      {!activeHobbyDetail && (
        <div className="fixed inset-0 bg-gradient-to-b from-[#060911]/70 via-[#060911]/60 to-[#060911]/85 pointer-events-none z-[1]" />
      )}

      {/* Background Subtle Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-[1]" />

      {/* IF VIEWING HOBBY DETAIL PAGE */}
      {activeHobbyDetail ? (
        <HobbyDetailView 
          hobby={activeHobbyDetail} 
          onBack={() => setActiveHobbyDetail(null)} 
        />
      ) : (
        <>
          {/* Top Floating Dynamic Island Navbar (Desktop Only, hidden when modal open) */}
          <DynamicIslandNavbar 
            activeSection={activeSection} 
            onNavigate={handleNavigate} 
            isHidden={navDisabled}
          />

          {/* Main Content Sections */}
          <main className="relative z-10 pb-20 md:pb-0">
            <HeroSection onNavigate={handleNavigate} />
            <AboutSection />
            <HobbiesSection 
              onOpenHobbyDetail={(hobby) => setActiveHobbyDetail(hobby)} 
              onModalStateChange={setIsModalOpen}
            />
            <ProjectsSection onModalStateChange={setIsModalOpen} />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer onNavigate={handleNavigate} />

          {/* React Bits Dock Floating Bottom Navbar (Mobile Only, hidden when modal open) */}
          <MobileDockNavbar 
            activeSection={activeSection} 
            onNavigate={handleNavigate} 
            isHidden={navDisabled}
          />
        </>
      )}

    </div>
  );
}
