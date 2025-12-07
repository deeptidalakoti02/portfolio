import './ProjectCard.css';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="card-content">
        <h3 className="card-heading">{project.title}</h3>
        <p className="card-description">{project.description}</p>
        <a href={project.caseStudyLink} className="case-study-btn">
          View Case Study
        </a>
      </div>
      <div className="card-illustration">
        {/* Placeholder for project illustration */}
        <div className="illustration-placeholder">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="10" fill="rgba(159, 151, 144, 0.1)"/>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="var(--text-muted)" fontSize="16">
              Project {project.id}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
