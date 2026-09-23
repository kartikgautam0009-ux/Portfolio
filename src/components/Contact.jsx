import React, { useState } from 'react';
import { Send, Copy, Check, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const directEmail = 'alex.creator.3d@example.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      style={{
        padding: '100px 24px 40px',
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
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              marginBottom: '16px'
            }}
          >
            Let's Build <span className="gradient-text">Something Extraordinary</span>
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              maxWidth: '550px',
              margin: '0 auto',
              fontSize: '1.05rem'
            }}
          >
            Have a project vision, 3D web application, or collaboration in mind? Get in touch today.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '80px'
          }}
        >
          {/* Direct Info Card */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                marginBottom: '20px'
              }}
            >
              Direct Connection
            </h3>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              Feel free to reach out directly via email or connect through social channels. I am available for freelance contracts & full-time roles.
            </p>

            {/* Copy Email Box */}
            <div
              style={{
                padding: '14px 20px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '32px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="var(--accent-cyan)" />
                <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 500 }}>{directEmail}</span>
              </div>

              <button
                onClick={handleCopyEmail}
                style={{
                  background: 'none',
                  border: 'none',
                  color: copied ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Social Icons */}
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '14px', fontWeight: 600 }}>
                SOCIAL NETWORK
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { name: 'GitHub', icon: Github, href: 'https://github.com' },
                  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
                  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' }
                ].map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-glass)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-main)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                        e.currentTarget.style.color = 'var(--accent-cyan)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-glass)';
                        e.currentTarget.style.color = 'var(--text-main)';
                      }}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                marginBottom: '24px'
              }}
            >
              Send a Message
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: '30px',
                  borderRadius: '16px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  textAlign: 'center',
                  color: '#fff'
                }}
              >
                <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>
                  Message Sent Successfully!
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Thank you for reaching out. I will respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      marginBottom: '8px',
                      fontWeight: 500
                    }}
                  >
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '14px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-glass)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      marginBottom: '8px',
                      fontWeight: 500
                    }}
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '14px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-glass)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      marginBottom: '8px',
                      fontWeight: 500
                    }}
                  >
                    PROJECT DETAILS / MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timelines, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '14px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-glass)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="glow-button" style={{ width: '100%', marginTop: '10px' }}>
                  <span>Send Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer
          style={{
            paddingTop: '40px',
            borderTop: '1px solid var(--border-glass)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Alex.3D • Built with React & Three.js. Smooth Video Scrubbing.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              padding: '10px 18px',
              borderRadius: '25px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </footer>
      </div>
    </section>
  );
}
