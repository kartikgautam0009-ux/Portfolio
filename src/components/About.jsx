import React from 'react';
import { Cpu, Zap, Layers, Award, Terminal, CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { label: '3D Web Projects', value: '35+', icon: Layers, color: 'var(--accent-cyan)' },
    { label: 'Performance FPS', value: '60 FPS', icon: Zap, color: 'var(--accent-indigo)' },
    { label: 'Client Satisfaction', value: '100%', icon: Award, color: 'var(--accent-violet)' },
    { label: 'Tech Stack Proficiency', value: 'Senior', icon: Cpu, color: 'var(--accent-rose)' }
  ];

  const techStack = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'Three.js / WebGL', category: '3D Graphics' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'GLSL Shaders', category: 'Graphics' },
    { name: 'Framer Motion', category: 'Animations' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'CSS3 / Modern UI', category: 'Design System' }
  ];

  return (
    <section
      id="about"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              marginBottom: '16px'
            }}
          >
            Engineering <span className="gradient-text">Interactive Digital Craft</span>
          </h2>
          <p
            style={{
              maxWidth: '650px',
              margin: '0 auto',
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.6
            }}
          >
            Specializing at the intersection of creative web development, 3D WebGL rendering, and fluid scroll-driven video interactions.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '60px'
          }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="glass-panel"
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: stat.color
                  }}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-heading)',
                      color: '#fff'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Story & Tech Stack Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '32px',
            alignItems: 'stretch'
          }}
        >
          {/* Bio Panel */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Terminal size={22} color="var(--accent-cyan)" />
              <span>Architectural Philosophy</span>
            </h3>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
              Standard portfolio sites display static image grids. My approach transforms web pages into responsive canvas viewports where video motion, camera depth, and user scrolling synchronize cleanly.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Linear Interpolated (Lerp) RAF video frame scrubbing',
                'Shader-assisted video cross-fade transitions',
                'Optimized asset loading & hardware accelerated textures',
                'Accessible interactive overlay UI components'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Matrix */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                marginBottom: '20px'
              }}
            >
              Tech Stack Toolkit
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '25px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-glass)',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-main)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: idx % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-indigo)'
                    }}
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
