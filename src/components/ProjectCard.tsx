import './ProjectCard.css';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const imageWidth = project.imageWidth || 206;
  const imageHeight = project.imageHeight || 206;

  return (
    <div className="project-card">
      <h3 className="card-heading">{project.title}</h3>

      <div className="card-body">
        <div className="card-content">
          <p className="card-description">{project.description}</p>
          <a href={project.caseStudyLink} className="case-study-btn">
            View Case Study
          </a>
        </div>

        <div
          className="card-illustration"
          style={{
            width: `${imageWidth}px`,
            height: `${imageHeight}px`
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              style={{
                width: `${imageWidth}px`,
                height: `${imageHeight}px`
              }}
            />
          ) : (
            <div className="illustration-placeholder">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" rx="10" fill="rgba(159, 151, 144, 0.1)"/>
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="var(--text-muted)" fontSize="16">
                  Project {project.id}
                </text>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
