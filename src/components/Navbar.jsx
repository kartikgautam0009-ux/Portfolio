import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Code2, Layers, Mail, Compass } from 'lucide-react';

export default function Navbar({ activeSection, isMuted, setIsMuted, progressPercentage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero', icon: Compass },
    { name: 'About', href: '#about', icon: Sparkles },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 24px' : '20px 32px',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          borderRadius: '40px',
          background: scrolled ? 'rgba(10, 14, 24, 0.85)' : 'rgba(15, 20, 32, 0.5)',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.2)'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: '#fff',
            fontWeight: 800,
            fontSize: '1.25rem',
            fontFamily: 'var(--font-heading)'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(6, 182, 212, 0.5)'
            }}
          >
            <Sparkles size={18} color="#fff" />
          </div>
          <span>ALEX<span style={{ color: 'var(--accent-cyan)' }}>.3D</span></span>
        </a>

        {/* Center Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: isActive ? '#fff' : 'var(--text-muted)',
                  background: isActive ? 'rgba(99, 102, 241, 0.25)' : 'transparent',
                  border: isActive ? '1px solid rgba(99, 102, 241, 0.5)' : '1px solid transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={14} color={isActive ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Audio Toggle & Quick Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? 'Unmute video audio' : 'Mute video audio'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '8px 14px',
              borderRadius: '20px',
              border: '1px solid var(--border-glass)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: isMuted ? 'var(--text-muted)' : 'var(--accent-cyan)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>
              {isMuted ? 'MUTED' : 'AUDIO ON'}
            </span>
          </button>
        </div>
      </div>

      {/* Top Scroll Progress Line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          width: `${progressPercentage}%`,
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-indigo), var(--accent-violet))',
          boxShadow: '0 0 10px var(--accent-cyan)',
          transition: 'width 0.1s linear'
        }}
      />
    </header>
  );
}
