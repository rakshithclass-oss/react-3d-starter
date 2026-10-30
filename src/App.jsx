import { useState } from 'react';
import OrbScene from './components/OrbScene.jsx';

const features = [
  {
    number: '01',
    title: 'A little depth',
    description: 'Bring a flat screen to life with a real-time 3D object you can explore.',
    icon: '✳',
  },
  {
    number: '02',
    title: 'Made to move',
    description: 'Subtle motion and soft lighting add energy without getting in the way.',
    icon: '↗',
  },
  {
    number: '03',
    title: 'Built with React',
    description: 'A clean component setup that is easy to customise and make your own.',
    icon: '⌘',
  },
];

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

export default function App() {
  const [paused, setPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Forma home">
          <span className="brand-mark">f.</span>
          <span>forma<span className="brand-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#details" onClick={closeMenu}>Details</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="mailto:hello@example.com" onClick={closeMenu}>Say hello <ArrowIcon /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" id="experience">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> DIGITAL PLAYGROUND <span className="eyebrow-index"> / 001</span></div>
            <h1>Make it<br /><span className="title-gradient">feel real.</span></h1>
            <p className="hero-description">
              A small experiment in space, shape and motion. Move around the object, find your angle, and enjoy the details.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#details">Explore the page <ArrowIcon /></a>
              <button className="motion-toggle" type="button" onClick={() => setPaused((value) => !value)}>
                <span className={paused ? 'motion-dot is-paused' : 'motion-dot'} />
                Motion {paused ? 'paused' : 'on'}
              </button>
            </div>
            <div className="hero-footnote"><span>INTERACTIVE 3D</span><span>SCROLL TO DISCOVER ↓</span></div>
          </div>

          <div className="hero-visual" aria-label="Interactive purple 3D orb. Drag to rotate it.">
            <div className="visual-glow" />
            <div className="visual-grid" />
            <div className="visual-label label-top"><span className="label-dot" /> LIVE OBJECT <span>001 / 003</span></div>
            <div className="orb-canvas"><OrbScene paused={paused} /></div>
            <div className="visual-caption"><span>FIG. 01</span><span>FORM STUDY — A</span></div>
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
          </div>

          <div className="hero-side-note">DESIGNED TO BE<br />EXPERIENCED <span>✳</span></div>
        </section>

        <section className="intro-strip" id="about">
          <p>NOT JUST ANOTHER LANDING PAGE</p>
          <h2>Digital experiences can be <span>playful.</span></h2>
          <span className="strip-mark">✳</span>
        </section>

        <section className="details-section" id="details">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> THE DETAILS <span className="eyebrow-index"> / 002</span></div>
              <h2>Simple things.<br /><span className="muted-heading">Better dimension.</span></h2>
            </div>
            <p>A starter canvas for your next idea. Swap the colours, change the shape, and make it yours.</p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-card-top"><span>{feature.number} / 03</span><span className="feature-icon">{feature.icon}</span></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="card-line" />
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark">f.</span><span>forma<span className="brand-dot">.</span></span></a>
        <span>AN EXPERIMENT IN DIGITAL SPACE</span>
        <a href="#top" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}
