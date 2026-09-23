import React, { useState, useEffect, useRef } from 'react';
import VideoCanvas from './components/VideoCanvas';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';

export default function App() {
  const scrollProgress = useRef(0);
  const [scrollRatioVal, setScrollRatioVal] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollTop / (docHeight || 1)));

      scrollProgress.current = progress;
      setScrollRatioVal(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map progress to video scrub window:
  // From 0.0 to 0.86, full Video 1 -> Cross-Fade -> Video 2 playback occurs.
  // After 0.86, Video 2 is 100% finished and the dark projects overlay section appears.
  const videoScrubProgress = useRef(0);
  videoScrubProgress.current = Math.min(1, scrollRatioVal / 0.86);

  return (
    <div style={{ position: 'relative', background: '#000000', color: '#ffffff' }}>
      {/* Fullscreen Three.js WebGL Video Canvas Background */}
      <VideoCanvas
        scrollProgress={videoScrubProgress}
        isMuted={isMuted}
      />

      {/* Top Scroll Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollRatioVal * 100}%`,
          background: 'linear-gradient(90deg, #06b6d4, #6366f1, #a855f7)',
          boxShadow: '0 0 12px #06b6d4',
          zIndex: 100,
          transition: 'width 0.05s linear'
        }}
      />

      {/* Minimal Top Controls */}
      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '24px',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <button
          onClick={() => setIsMuted(!isMuted)}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '30px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            background: 'rgba(10, 14, 26, 0.65)',
            backdropFilter: 'blur(10px)',
            color: isMuted ? '#94a3b8' : '#06b6d4',
            cursor: 'pointer',
            fontSize: '0.82rem',
            fontWeight: 600,
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
          }}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          <span>{isMuted ? 'MUTED' : 'AUDIO ON'}</span>
        </button>
      </div>

      {/* Video Scroll Prompt Cue */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          pointerEvents: 'none',
          opacity: scrollRatioVal > 0.82 ? 0 : 0.85,
          transition: 'opacity 0.4s ease'
        }}
      >
        <span
          style={{
            fontSize: '0.78rem',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.75)',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}
        >
          {scrollRatioVal < 0.40
            ? 'Scroll to Scrub Video 1'
            : scrollRatioVal < 0.80
            ? 'Video 2 Playing • Keep Scrolling'
            : 'Video Finished • Scroll for Projects'}
        </span>
        <ChevronDown
          size={18}
          color="#06b6d4"
          style={{
            animation: 'float 2s ease-in-out infinite'
          }}
        />
      </div>

      {/* Extended Video Scroll Window (Video 2 finishes completely before overlay arrives) */}
      <div style={{ height: '420vh' }} />

      {/* End Section: Solid Dark Background Overlay containing Projects & Contact */}
      <div
        id="projects-section"
        style={{
          position: 'relative',
          zIndex: 20,
          background: '#07080d',
          boxShadow: '0 -40px 80px rgba(0, 0, 0, 0.95)',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          minHeight: '100vh'
        }}
      >
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Contact />
      </div>

      {/* Project Detail Drawer Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
