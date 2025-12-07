import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="bg-gradient-1"></div>
      <div className="bg-gradient-2"></div>

      <div className="hero-content">
        {/* Intro Card */}
        <div className="intro-card">
          <div className="intro-image">
            <img src="https://via.placeholder.com/56" alt="Deepti Dalakoti" />
          </div>
          <div className="intro-text">
            <p className="intro-greeting">Hello, I'm</p>
            <h1 className="intro-name">Deepti Dalakoti</h1>
          </div>
        </div>

        {/* Hero Body Text */}
        <div className="hero-body-text">
          <p className="hero-line1">
            <span className="a-letter">A </span>
            <span className="product-designer">Product Designer</span>
          </p>
          <p className="hero-line2">
            who designs for <span className="clarity">clarity</span> not just clicks
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <a href="#work" className="cta-primary">View My Work</a>
          <a href="#contact" className="cta-secondary">Get In Touch</a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
