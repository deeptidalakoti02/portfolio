import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="experience-content">
        <h2 className="experience-heading">About Me</h2>

        <p className="experience-intro">
          Hi! I'm a passionate product designer with a love for creating intuitive and beautiful digital experiences.
          With over 5 years in the industry, I've worked with startups and established companies to bring their visions to life.
        </p>

        <div className="experience-grid">
          <div className="experience-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="card-title">Experience</h3>
            <p className="card-description">5+ years in product design, working across web and mobile platforms</p>
          </div>

          <div className="experience-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="card-title">Specialization</h3>
            <p className="card-description">UX/UI Design, Design Systems, User Research, Prototyping</p>
          </div>

          <div className="experience-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="card-title">Collaboration</h3>
            <p className="card-description">Strong communicator who loves working with cross-functional teams</p>
          </div>

          <div className="experience-card">
            <div className="card-icon">💡</div>
            <h3 className="card-title">Design Philosophy</h3>
            <p className="card-description">"Great design is invisible. It solves problems elegantly without drawing attention to itself."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
