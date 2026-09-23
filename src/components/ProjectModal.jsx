import React from 'react';
import { X, ExternalLink, Cpu, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleLaunch = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 200,
        background: 'rgba(7, 8, 13, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '750px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '28px',
          position: 'relative',
          padding: '36px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--border-glass)',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <span
            style={{
              padding: '4px 12px',
              borderRadius: '16px',
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: 'var(--accent-cyan)',
              fontSize: '0.8rem',
              fontWeight: 600
            }}
          >
            {project.category}
          </span>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              marginTop: '12px'
            }}
          >
            {project.title}
          </h2>
        </div>

        {/* Image Preview */}
        <div
          style={{
            borderRadius: '18px',
            overflow: 'hidden',
            marginBottom: '24px',
            maxHeight: '320px'
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Technical Description */}
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '24px' }}>
          {project.description} This application utilizes real-time WebGL buffer rendering, interactive controls, and hardware accelerated texture mapping for maximum visual performance.
        </p>

        {/* Key Features List */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1rem', color: '#fff', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={18} color="var(--accent-cyan)" />
            <span>Technical Highlights</span>
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              'Linear scroll interpolation engine',
              'Adaptive 60fps WebGL canvas',
              'Custom GLSL fragment shaders',
              'Fully responsive layout'
            ].map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                <CheckCircle size={16} color="var(--accent-cyan)" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                fontSize: '0.82rem',
                color: 'var(--accent-cyan)',
                fontWeight: 600
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <button onClick={handleLaunch} className="glow-button" style={{ flexGrow: 1 }}>
            <span>Launch Live Preview</span>
            <ExternalLink size={18} />
          </button>
          <button onClick={onClose} className="glow-button-secondary">
            <span>Close Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}
