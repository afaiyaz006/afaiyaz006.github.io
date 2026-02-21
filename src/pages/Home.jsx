import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  const featuredProjects = [
    {
      title: "Kotha",
      tag: "Realtime Chat",
      description:
        "Lightweight realtime anonymous chat application built with modern web technologies.",
      github: "https://github.com/afaiyaz006/Kotha",
      live: "https://kotha-kappa.vercel.app",
    },
    {
      title: "Mangomedia",
      tag: "Social Platform",
      description:
        "Lightweight microblogging platform designed for simplicity and speed.",
      github: "https://github.com/afaiyaz006/Mangomedia",
      live: "https://mangomedia.vercel.app",
    },
  ];

  const featuredBlogs = [];

  return (
    <div className="home-container">
      <section className="intro">
        <div className="intro-content">
          <div className="intro-image">
            <img
              src="https://avatars.githubusercontent.com/u/69722755?s=400&u=40231cbede32b8e972ecb2c72d9ddd66c69617a6&v=4"
              alt="Ahmed Faiyaz"
            />
          </div>
          <div className="intro-text">
            <span className="intro-subtitle">Software Engineer</span>
            <h1 className="intro-title">Ahmed Faiyaz</h1>
            <div className="intro-description">
              <p>
                I build thoughtful digital experiences that bridge the gap
                between people and technology. Currently focused on building
                scalable web applications and exploring the potential of
                AI-driven systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Core Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>SCSS</span>
              <span>Tailwind</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>FastAPI</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <div className="skill-tags">
              <span>Git</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>Vercel</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Selected Projects</h2>
          <Link to="/projects" className="view-all">
            View all projects
          </Link>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Latest Note</h2>
          <Link to="/blogs" className="view-all">
            Read more articles
          </Link>
        </div>
        {featuredBlogs.length > 0 ? (
          <div className="blog-feature-card">
            <div className="blog-info">
              <span className="blog-date">{featuredBlogs[0].date}</span>
              <h3>{featuredBlogs[0].title}</h3>
              <p>{featuredBlogs[0].description}</p>
              <Link to="/blogs" className="read-article">
                Read Article
              </Link>
            </div>
          </div>
        ) : (
          <div className="blog-feature-card">
            <div className="blog-info">
              <h3>No featured articles yet</h3>
            </div>
          </div>
        )}
      </section>

      <section className="contact">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-card">
          <p className="section-subtitle">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
          {/* <a href="mailto:hello@ahmedfaiyaz.com" className="contact-link">
            hello@ahmedfaiyaz.com
          </a> */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ahmed-faiyaz-951797197/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
