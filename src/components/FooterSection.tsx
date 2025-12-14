import './FooterSection.css';

const FooterSection = () => {
  return (
    <section className="footer-section">
      {/* Decorative blur circles */}
      <div className="blur-circle-left"></div>
      <div className="blur-circle-right"></div>

      <div className="footer-content">
        <div className="footer-text">
          <h2 className="footer-heading">Would like to know more about my journey?</h2>
          <p className="footer-subtext">
            Feel free to reach out to me at <a href="mailto:mail@deeptidalakoti.me" className="email-link">mail@deeptidalakoti.me</a> to discuss an opportunity, work, life or in general :)
          </p>
        </div>

        <div className="footer-cta">
          <a href="#resume" className="footer-tertiary-link">Resume</a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="footer-tertiary-link">Behance</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-tertiary-link">LinkedIn</a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="footer-tertiary-link">Dribbble</a>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 Deepti Dalakoti. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
