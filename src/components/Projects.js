import data from '../data/projects.json'
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="projects" id="project">
      <h3>Projects</h3>
      {data.map((project) => (
        <div className="proj-wrapper">
          <div className="proj-info">
            <div className="proj-title">{project.name}</div>
            <div className="proj-description">{project.description}</div>
            <div className="proj-chips">
              {project.tech.map((item) => (
                <span className="proj-chip">{item}</span>
              ))}
            </div>
            <div className="proj-links">
              {project.github &&
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FiGithub />
                </a>
              }
              {project.url &&
                <a href={project.url} target="_blank" rel="noreferrer">
                  <FiExternalLink />
                </a>
              }
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects