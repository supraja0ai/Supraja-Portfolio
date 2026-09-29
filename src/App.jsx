import { useEffect, useState } from "react";
import "./App.css";

import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

const sections = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  /* =====================================================
     CUSTOM CURSOR
  ===================================================== */

  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = document.querySelector(".custom-cursor");
      const ring = document.querySelector(".custom-cursor-ring");

      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }

      if (ring) {
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  /* =====================================================
     ACTIVE NAVIGATION ON SCROLL
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      let currentSection = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop;

          if (scrollPosition >= sectionTop) {
            currentSection = sectionId;
          }
        }
      });

      const bottomReached =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (bottomReached) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     NAVIGATION CLICK
  ===================================================== */

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =====================================================
     WEBSITE
  ===================================================== */

  return (
    <>
      {/* =====================================================
          CUSTOM CURSOR
      ===================================================== */}

      <div className="custom-cursor"></div>
      <div className="custom-cursor-ring"></div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">

        <button
          className="nav-logo"
          onClick={() => handleNavigation("home")}
        >
          Supraja<span>.ai</span>
        </button>

        <div className="nav-links">

          <button
            className={`nav-link ${
              activeSection === "home" ? "active" : ""
            }`}
            onClick={() => handleNavigation("home")}
          >
            Home
          </button>

          <button
            className={`nav-link ${
              activeSection === "about" ? "active" : ""
            }`}
            onClick={() => handleNavigation("about")}
          >
            About
          </button>

          <button
            className={`nav-link ${
              activeSection === "skills" ? "active" : ""
            }`}
            onClick={() => handleNavigation("skills")}
          >
            Skills
          </button>

          <button
            className={`nav-link ${
              activeSection === "experience" ? "active" : ""
            }`}
            onClick={() => handleNavigation("experience")}
          >
            Experience
          </button>

          <button
            className={`nav-link ${
              activeSection === "projects" ? "active" : ""
            }`}
            onClick={() => handleNavigation("projects")}
          >
            Projects
          </button>

          <button
            className={`nav-link ${
              activeSection === "education" ? "active" : ""
            }`}
            onClick={() => handleNavigation("education")}
          >
            Education
          </button>

          <button
            className={`nav-link ${
              activeSection === "contact" ? "active" : ""
            }`}
            onClick={() => handleNavigation("contact")}
          >
            Contact
          </button>

        </div>

        <a
          href="/P_Supraja_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn hero-btn-primary resume-nav-button"
        >
          Download Resume
          <span>↗</span>
        </a>

      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <main
        id="home"
        className="hero"
      >

        <div className="hero-glow glow-one"></div>

        <div className="hero-glow glow-two"></div>

        <div className="hero-content">

          <div className="hero-pill">
            <span className="hero-pill-dot"></span>

            Open for AI / ML · NLP · RAG-LLM · GENAI · APPLIED AI · COMPUTER VISION · DATA SCIENCE roles
          </div>

          <h1>
            P{" "}
            <span className="gradient-text">
              Supraja
            </span>
          </h1>

          <div className="hero-role">
            AI / ML ENGINEER
          </div>

          <p className="hero-description">
            I build, experiment, and evolve with AI—turning curiosity into ideas, and ideas into intelligent experiences.
          </p>

          <div className="hero-actions">

            <a
              href="#projects"
              className="hero-btn hero-btn-primary"
              onClick={() => setActiveSection("projects")}
            >
              View My Work
              <span>↗</span>
            </a>

            <a
              href="https://github.com/supraja0ai"
              target="_blank"
              rel="noreferrer"
              className="hero-btn hero-btn-outline"
            >
              GitHub
              <span>↗</span>
            </a>

            <a
              href="#contact"
              className="hero-btn hero-btn-outline accent"
              onClick={() => setActiveSection("contact")}
            >
              Contact Me
              <span>↗</span>
            </a>

          </div>

        </div>

        <div className="hero-bottom">

          <span>
            SCROLL TO EXPLORE
          </span>

          <div className="hero-line"></div>

          <span>
            BENGALURU · INDIA
          </span>

        </div>

      </main>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="about-section"
      >

        <div
          className="about-background-word"
          aria-hidden="true"
        >
          WHO I AM ?
        </div>

        <div className="section-label">
          02 / ABOUT
        </div>

        <h2 className="editorial-heading about-title">
          Building AI systems
          <br />
          <span>from problem to deployment.</span>
        </h2>

        <p className="about-description">
          I design and engineer end-to-end AI/ML solutions across Generative AI, NLP, RAG, Computer Vision, and intelligent automation — transforming complex business problems into production-ready systems through data, models, and scalable AI engineering.
        </p>

        <div className="about-stats">

          <div className="about-stat">
            <strong>3.5+</strong>
            <span>YEARS</span>
          </div>

          <div className="about-stat">
            <strong>AI / ML</strong>
            <span>CORE DOMAIN</span>
          </div>

          <div className="about-stat">
            <strong>GENAI</strong>
            <span>FOCUS</span>
          </div>

          <div className="about-stat">
            <strong>NLP + CV</strong>
            <span>EXPERTISE</span>
          </div>

          <div className="about-stat">
            <strong>RAG-LLM</strong>
            <span>SYSTEMS</span>
          </div>

        </div>

        <div className="about-points">

          <div className="about-point">
            <span>01</span>
            <p>
              Translating complex business requirements into data-driven AI/ML solutions, from experimentation and modeling through production deployment.
            </p>
          </div>

          <div className="about-point">
            <span>02</span>
            <p>
              Building intelligent applications across Generative AI, NLP, Computer Vision, RAG, semantic search, and recommendation systems.
            </p>
          </div>

          <div className="about-point">
            <span>03</span>
            <p>
              Engineering AI workflows that combine models, embeddings, vector search, APIs, cloud services, and automation into scalable solutions.
            </p>
          </div>

          <div className="about-point">
            <span>04</span>
            <p>
              Working across the complete AI lifecycle — data preparation, model development, evaluation, integration, deployment, and continuous improvement.
            </p>
          </div>

        </div>

      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="skills-section"
      >

        <div className="section-label">
          03 / SKILLS
        </div>

        <div
          className="skills-bg-word"
          aria-hidden="true"
        >
          SKILLS
        </div>

        <div className="skills-heading">

          <h2>
            Tools I use to
            <br />
            <span>
              build intelligent systems.
            </span>
          </h2>

        </div>

        <div className="skills-grid">

          <div className="skill-group">
            <span className="skill-number">01</span>
            <h3>Programming & Data</h3>
            <p>
              Python · C++ · SQL · EDA · ETL · Data Modeling
            </p>
          </div>

          <div className="skill-group">
            <span className="skill-number">02</span>
            <h3>Machine Learning</h3>
            <p>
              Statistical Modeling · Deep Learning · Feature Engineering · Model Evaluation
            </p>
          </div>

          <div className="skill-group">
            <span className="skill-number">03</span>
            <h3>Generative AI</h3>
            <p>
              GenAI · LLMs · RAG · Fine-tuning · Prompt Engineering · Hugging Face
            </p>
          </div>

          <div className="skill-group">
            <span className="skill-number">04</span>
            <h3>NLP & Search</h3>
            <p>
              NLP · LangChain · Semantic Search · Vector Search · Information Retrieval
            </p>
          </div>

          <div className="skill-group">
            <span className="skill-number">05</span>
            <h3>Cloud & MLOps</h3>
            <p>
              Azure ML · Azure OpenAI · Azure AI Search · AWS · MLOps · CI/CD
            </p>
          </div>

          <div className="skill-group">
            <span className="skill-number">06</span>
            <h3>Deployment</h3>
            <p>
              FastAPI · REST APIs · Model Serving · AI Integration · Azure App Service
            </p>
          </div>

        </div>

      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <Experience />

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <Projects />

      {/* =====================================================
          EDUCATION
      ===================================================== */}

      <Education />

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="section-label">
          07 / CONTACT
        </div>

        <div className="contact-content">

          <div className="contact-intro">

            <p className="eyebrow">
              HAVE A PROJECT OR OPPORTUNITY?
            </p>

            <h2>
              Let's build
              <br />
              <span>
                something intelligent🙌
              </span>
            </h2>

            <p className="contact-description">
              I'm open to opportunities involving AI, Machine Learning, Generative AI, NLP, Computer Vision and intelligent automation.
            </p>

          </div>

          <div className="contact-links">

            <a
              href="mailto:suppunaidu1999@gmail.com"
              className="contact-link"
            >
              <div>
                <span className="contact-label">
                  📧 EMAIL
                </span>

                <span className="contact-value">
                  suppunaidu1999@gmail.com
                </span>
              </div>

              <span className="contact-arrow">
                ↗
              </span>
            </a>

            <a
              href="tel:+919902168087"
              className="contact-link"
            >
              <div>
                <span className="contact-label">
                  📞 PHONE
                </span>

                <span className="contact-value">
                  +91 9902168087
                </span>
              </div>

              <span className="contact-arrow">
                ↗
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/p-supraja-9a75511a5/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">
                  🔗 LINKEDIN
                </span>

                <span className="contact-value">
                  Connect with me
                </span>
              </div>

              <span className="contact-arrow">
                ↗
              </span>
            </a>

            <a
              href="https://github.com/supraja0ai"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">
                  🐙 GITHUB
                </span>

                <span className="contact-value">
                  Explore my projects
                </span>
              </div>

              <span className="contact-arrow">
                ↗
              </span>
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-left">

          <div className="footer-logo">
            SUPRAJA<span>.AI</span>
          </div>

          <p>
            AI / ML Engineer
          </p>

        </div>

        <div className="footer-center">
          <span>
            Building intelligent systems with AI.
          </span>
        </div>

        <div className="footer-right">

          <a
            href="https://github.com/supraja0ai"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/p-supraja-9a75511a5/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:suppunaidu1999@gmail.com">
            Email ↗
          </a>

          <a href="tel:+919902168087">
            Phone ↗
          </a>

        </div>

      </footer>

    </>
  );
}

export default App;