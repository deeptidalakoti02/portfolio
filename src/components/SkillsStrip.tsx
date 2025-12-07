import './SkillsStrip.css';

const SkillsStrip = () => {
  const skills = [
    'User Research',
    'Wireframes',
    'Website Designing',
    'Prototyping',
    'Design System'
  ];

  // Duplicate the skills array to create seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="skills-strip">
      <div className="skills-track">
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-text">{skill}</span>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="star-separator">
              <path d="M17 0L19.3164 14.6836L34 17L19.3164 19.3164L17 34L14.6836 19.3164L0 17L14.6836 14.6836L17 0Z" fill="#FF006E"/>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsStrip;
