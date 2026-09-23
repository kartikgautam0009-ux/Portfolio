import React from 'react';
import { ArrowDownRight, Play, Film, Sparkles } from 'lucide-react';

export default function Hero({ scrollRatio }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 24px 60px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }}
      >
        {/* Left Text Content */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: 'var(--accent-cyan)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '24px'
            }}
          >
            <Sparkles size={14} />
            <span>INTERACTIVE THREE.JS & REACT PORTFOLIO</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              fontFamily: 'var(--font-heading)',
              marginBottom: '20px'
            }}
          >
            Visual Motion <br />
            <span className="gradient-text">Canvas & 3D Reality</span>
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '540px',
              marginBottom: '36px'
            }}
          >
            An immersive digital portfolio where scrolling controls real-time 3D canvas video scrubbing, seamlessly transitioning between motion chapters.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#projects" className="glow-button">
              <span>View Projects</span>
              <ArrowDownRight size={18} />
            </a>
            <a href="#about" className="glow-button-secondary">
              <span>About Experience</span>
            </a>
          </div>
        </div>

        {/* Right Dynamic Scrub Monitor Card */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div
            className="glass-panel"
            style={{
              padding: '28px',
              maxWidth: '380px',
              width: '100%',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Film size={20} color="var(--accent-cyan)" />
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>VIDEO 1 ENGINE</span>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  background: scrollRatio <= 0.48 ? 'rgba(6, 182, 212, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                  color: scrollRatio <= 0.48 ? 'var(--accent-cyan)' : 'var(--accent-indigo)',
                  fontWeight: 600
                }}
              >
                {scrollRatio <= 0.45 ? 'ACTIVE STAGE 1' : scrollRatio <= 0.55 ? 'TRANSITIONING' : 'STAGE 2 READY'}
              </span>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  marginBottom: '6px'
                }}
              >
                <span>Scrub Frame Sync</span>
                <span>{Math.round(Math.min(100, Math.max(0, (scrollRatio / 0.48) * 100)))}%</span>
              </div>
              <div
                style={{
                  height: '6px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${Math.min(100, Math.max(0, (scrollRatio / 0.48) * 100))}%`,
                    background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-indigo))',
                    transition: 'width 0.1s ease'
                  }}
                />
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
              Scroll down to scrub Video 1. Reaching mid-page initiates smooth WebGL texture cross-fading into Video 2.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
