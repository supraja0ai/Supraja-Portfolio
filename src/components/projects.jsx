import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      
      <div className="projects-bg-number" aria-hidden="true">
        PROJECTS
      </div>

      <div className="section-label">05 / PROJECTS</div>

      <div className="projects-intro">
        <h2>
          What I built
          <br />
          <span>along the way</span>
        </h2>

        <p>
          A selection of AI and machine learning solutions spanning Generative
          AI, NLP, Computer Vision, forecasting and intelligent automation.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article key={project.number || index} className="project-card">

            {/* LEFT PROJECT NUMBER */}
            <div className="project-index">
              <div className="project-number">
                PROJECT {String(index + 1).padStart(2, "0")}
              </div>

              {/* ONLY PROJECT 01 GETS THIS */}
              {index === 0 && (
                <span className="project-built-pill">
                  SELF-BUILT
                </span>
              )}
            </div>

            {/* PROJECT CONTENT */}
            <div className="project-content">

              <div className="project-top">
                <div className="project-category">
                  {project.category}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github"
                  >
                    VIEW ON GITHUB <span>↗</span>
                  </a>
                )}
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-meta">

                <div className="project-highlight">
                  <span>FOCUS</span>
                  <p>{project.highlight}</p>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;