import './AboutSection.css';
import pangongLakeImage from '../assets/images/pangong-lake.jpg';
import shojaImage from '../assets/images/shoja.jpeg';
import mahabalipuramImage from '../assets/images/mahabalipuram.png';
import varkalaImage from '../assets/images/varkala.jpeg';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text-column">
          <p className="about-text">
            Beside designing, I love <span className="highlight-text">travelling</span> and exploring new <span className="highlight-text">food joints</span> nearby
          </p>
        </div>
        <div className="about-image-column">
          <div className="photo-grid">
            <div className="photo-card photo-card-1">
              <img src={pangongLakeImage} alt="Pangong Lake" />
              <div className="photo-label">Pangong lake</div>
            </div>
            <div className="photo-card photo-card-2">
              <img src={shojaImage} alt="Shoja" />
              <div className="photo-label">Shoja, HP</div>
            </div>
            <div className="photo-card photo-card-3">
              <img src={mahabalipuramImage} alt="Mahabalipuram" />
              <div className="photo-label">Mahabalipuram</div>
            </div>
            <div className="photo-card photo-card-4">
              <img src={varkalaImage} alt="Varkala" />
              <div className="photo-label">Varkala</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
