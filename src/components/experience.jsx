function Experience() {
  const experiences = [
    {
      period: "JAN 2026 — PRESENT",
      company: "LTIMINDTREE",
      role: "Senior Software Engineer — AI/ML",
      description:
        "Engineering AI-driven media automation solutions across Generative AI, RAG, semantic search, NLP, Computer Vision and multimodal intelligence, with a focus on intelligent discovery, metadata enrichment and scalable media workflows.",
      skills: [
        "AI / ML",
        "NLP",
        "RAG-LLM",
        "GenAI",
        "Computer Vision",
        "Multimodal AI",
        "Semantic Search",
        "Vector Search",
        "Embeddings"
      ],
    },

    {
      period: "JUL 2023 — NOV 2025",
      company: "AVENTRA GROUP",
      role: "AI ML Engineer",
      description:
        "Designed and developed machine learning solutions for business problems spanning predictive analytics, time-series forecasting, NLP and AI-driven integrations, with solutions deployed through Azure-based environments.",
      skills: [
        "Python",
        "Machine Learning",
        "NLP",
        "Time Series",
        "Microsoft Azure",
        "AI Integration",
        "Model Deployment"
      ],
    },

    {
      period: "SEP 2021 — JUN 2022",
      company: "TECH MAHINDRA",
      role: "Data Analyst",
      description:
        "Worked across data extraction, transformation and process modeling, building analytical workflows, KPI-driven dashboards and reporting solutions using SQL, Python and Excel.",
      skills: [
        "ETL",
        "SQL",
        "Python",
        "Data Modelling",
        "Process Analytics",
        "Excel",
        "Data Analysis",
        "KPI Reporting",
        "Dashboards",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">

      

      {/* Background word */}
      <div
        className="experience-background-word"
        aria-hidden="true"
      >
        EXPERIENCE
      </div>

      {/* Section label */}
      <div className="section-label">
        04 / EXPERIENCE
      </div>

      {/* Section heading */}
      <div className="experience-heading">
        <h2>
          Experience that
          <br />
          <span>shaped my Expertise.</span>
        </h2>
      </div>

      {/* Experience table */}
      <div className="experience-table">

        {/* Table header */}
        <div className="experience-table-header">

          <div className="experience-table-cell">
            PERIOD
          </div>

          <div className="experience-table-cell">
            COMPANY / ROLE
          </div>

          <div className="experience-table-cell">
            WORK / EXPERTISE
          </div>

        </div>

        {/* Experience rows */}
        {experiences.map((experience, index) => (
          <div
            className="experience-table-row"
            key={index}
          >

            {/* Date */}
            <div className="experience-date-cell">
              <span>
                {experience.period}
              </span>
            </div>

            {/* Company + Role */}
            <div className="experience-role-cell">

              <div className="experience-company-name">
                {experience.company}
              </div>

              <h3>
                {experience.role}
              </h3>

            </div>

            {/* Description + Skills */}
            <div className="experience-details-cell">

              <p>
                {experience.description}
              </p>

              <div className="experience-skill-list">
                {experience.skills.map(
                  (skill, skillIndex) => (
                    <span key={skillIndex}>
                      {skill}
                    </span>
                  )
                )}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Experience;