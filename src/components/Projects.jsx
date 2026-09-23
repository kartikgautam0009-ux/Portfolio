import React, { useState } from 'react';
import { ExternalLink, Eye, Layers, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('All');

  const projectList = [
    {
      id: 'cyber-canvas',
      title: 'CyberCanvas 3D Engine',
      category: '3D WebGL',
      description: 'Interactive WebGL particle viewport with custom GLSL lighting shaders and audio reactive frequency visualizers.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      tags: ['Three.js', 'React', 'GLSL', 'WebAudio'],
      metrics: '60 FPS • Audio-Sync'
    },
    {
      id: 'nexus-portal',
      title: 'Nexus Motion Ecosystem',
      category: 'Motion UI',
      description: 'Frame-by-frame video scrub controller synchronized with user scroll velocity and viewport triggers.',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Framer Motion', 'Canvas', 'RAF Engine'],
      metrics: 'Zero Jitter • Sub-10ms'
    },
    {
      id: 'quantum-dash',
      title: 'Quantum Dashboard AI',
      category: 'Web Apps',
      description: 'Sleek dark glass dashboard monitoring real-time telemetry, 3D data nodes, and predictive metrics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
      metrics: 'Realtime Data'
    },
    {
      id: 'synth-world',
      title: 'SynthWave Spatial Experience',
      category: '3D WebGL',
      description: 'An eighties retro-futuristic spatial grid created using instanced meshes and dynamic bloom shaders.',
      image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
      tags: ['Three.js', 'PostProcessing', 'Bloom'],
      metrics: 'Instanced Mesh'
    }
  ];

  const categories = ['All', '3D WebGL', 'Motion UI', 'Web Apps'];

  const filteredProjects = filter === 'All'
    ? projectList
    : projectList.filter((p) => p.category === filter);

  const handleDemoClick = (e) => {
    e.stopPropagation();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  return (
    <section
      id="projects"
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
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(6, 182, 212, 0.12)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: 'var(--accent-cyan)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            <Layers size={14} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              marginBottom: '16px',
              color: '#ffffff'
            }}
          >
            Featured <span className="gradient-text">Projects & Works</span>
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '1.05rem',
              lineHeight: 1.6
            }}
          >
            Explore interactive applications, 3D WebGL experiences, and high-performance video scroll interfaces.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '50px',
            flexWrap: 'wrap'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 22px',
                borderRadius: '30px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '0.9rem',
                border: filter === cat ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: filter === cat ? 'rgba(6, 182, 212, 0.25)' : 'rgba(15, 20, 32, 0.8)',
                color: filter === cat ? '#ffffff' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: filter === cat ? '0 0 18px rgba(6, 182, 212, 0.4)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              onClick={() => onSelectProject(project)}
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(15, 20, 32, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              {/* Image Preview Container */}
              <div
                style={{
                  position: 'relative',
                  height: '220px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    background: 'rgba(7, 8, 13, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.78rem',
                    fontWeight: 600
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}
              >
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '10px',
                    color: '#ffffff'
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    flexGrow: 1
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    marginBottom: '20px'
                  }}
                >
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <button
                    onClick={() => onSelectProject(project)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-cyan)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <Eye size={16} />
                    <span>View Specs</span>
                  </button>

                  <button
                    onClick={handleDemoClick}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      background: 'rgba(99, 102, 241, 0.25)',
                      border: '1px solid rgba(99, 102, 241, 0.5)',
                      color: '#fff',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>Launch</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
