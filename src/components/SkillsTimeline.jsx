import React from 'react';
import { Briefcase, Calendar, Code, ShieldCheck, Zap } from 'lucide-react';

export default function SkillsTimeline() {
  const experiences = [
    {
      year: '2024 - PRESENT',
      role: 'Lead 3D WebGL Architect',
      company: 'Aetheria Interactive Studios',
      description: 'Pioneered custom scroll-driven canvas video pipelines, WebGL particle systems, and high-performance React frontends.',
      highlights: ['RAF Video Scrub Engine', 'WebGL Cross-Fade Shader', 'React 18 Concurrent Render']
    },
    {
      year: '2022 - 2024',
      role: 'Senior Frontend & Creative Developer',
      company: 'Vanguard Digital Lab',
      description: 'Built interactive 3D web applications, marketing landing pages with custom shaders, and real-time canvas visualizations.',
      highlights: ['Three.js Optimization', 'Framer Motion Design', 'TypeScript Core']
    },
    {
      year: '2020 - 2022',
      role: 'UI/UX & WebGL Developer',
      company: 'Nebula Creative Agency',
      description: 'Designed responsive user interfaces, integrated multimedia WebGL viewports, and delivered client web apps.',
      highlights: ['Responsive CSS', 'Canvas Audio Visualizers', 'Node.js Microservices']
    }
  ];

  const skillBars = [
    { name: 'React.js & State Management', level: 98, color: 'var(--accent-cyan)' },
    { name: 'Three.js & WebGL Rendering', level: 95, color: 'var(--accent-indigo)' },
    { name: 'Scroll Scrub Video Pipelines', level: 92, color: 'var(--accent-violet)' },
    { name: 'GLSL Shaders & Performance', level: 88, color: 'var(--accent-rose)' }
  ];

  return (
    <section
      id="skills"
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
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              marginBottom: '16px'
            }}
          >
            Experience & <span className="gradient-text">Competency Matrix</span>
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '1.05rem'
            }}
          >
            A history of technical milestones and core capabilities in modern WebGL engineering.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Timeline List */}
          <div>
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Briefcase size={20} color="var(--accent-cyan)" />
              <span>Career Milestones</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '24px',
                    position: 'relative',
                    borderLeft: '4px solid var(--accent-cyan)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--accent-cyan)',
                      marginBottom: '8px'
                    }}
                  >
                    <Calendar size={14} />
                    <span>{exp.year}</span>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '4px'
                    }}
                  >
                    {exp.role}
                  </h4>

                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    {exp.company}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {exp.description}
                  </p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {exp.highlights.map((h, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '12px',
                          background: 'rgba(255,255,255,0.05)',
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Proficiency Meters */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Zap size={20} color="var(--accent-indigo)" />
              <span>Skill Mastery Breakdown</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {skillBars.map((skill, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: '8px'
                    }}
                  >
                    <span>{skill.name}</span>
                    <span style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div
                    style={{
                      height: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '6px',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${skill.level}%`,
                        background: skill.color,
                        borderRadius: '6px',
                        boxShadow: `0 0 10px ${skill.color}`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '40px',
                padding: '16px',
                borderRadius: '16px',
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.85rem',
                color: 'var(--text-muted)'
              }}
            >
              <ShieldCheck size={20} color="var(--accent-cyan)" />
              <span>Hardware accelerated WebGL texture blending optimized for desktop and mobile viewports.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
