import './ProjectsSection.css';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  return (
    <section className="second-fold">
      <div className="blue-circle"></div>

      <div className="projects-content">
        <h2 className="featured-heading">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
