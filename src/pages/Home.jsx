import './Home.scss'
import { Link } from 'react-router-dom'

export default function Home() {
    const featuredProjects = [
        {
            title: "Kotha",
            tag: "Realtime Chat",
            description: "Lightweight realtime anonymous chat application built with modern web technologies.",
            github: "https://github.com/afaiyaz006/Kotha",
            live: "https://kotha-kappa.vercel.app"
        },
        {
            title: "Mangomedia",
            tag: "Social Platform",
            description: "Lightweight microblogging platform designed for simplicity and speed.",
            github: "https://github.com/afaiyaz006/Mangomedia",
            live: "https://mangomedia.vercel.app"
        }
    ];

    const featuredBlog = {
        title: "Building Minimalist Realtime Chat Applications",
        date: "Feb 2026",
        description: "An exploration into building high-performance, real-time communication tools using modern web technologies."
    };

    return (
        <div className="home-container">
            <section className="intro">
                <span className="intro-subtitle">Software Engineer</span>
                <h1 className="intro-title">Ahmed Faiyaz</h1>
                <div className="intro-description">
                    <p>
                        I build thoughtful digital experiences that bridge the gap between people and technology. 
                        Currently focused on building scalable web applications and exploring the potential of AI-driven systems.
                    </p>
                </div>
            </section>

            <section className="featured-section">
                <div className="section-header">
                    <h2 className="section-title">Selected Projects</h2>
                    <Link to="/projects" className="view-all">View all projects</Link>
                </div>
                <div className="projects-grid">
                    {featuredProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <span className="project-tag">{project.tag}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="featured-section">
                <div className="section-header">
                    <h2 className="section-title">Latest Note</h2>
                    <Link to="/blogs" className="view-all">Read more articles</Link>
                </div>
                <div className="blog-feature-card">
                    <div className="blog-info">
                        <span className="blog-date">{featuredBlog.date}</span>
                        <h3>{featuredBlog.title}</h3>
                        <p>{featuredBlog.description}</p>
                        <Link to="/blogs" className="read-article">Read Article</Link>
                    </div>
                </div>
            </section>

            <section className="contact">
                <h2 className="section-title">Get in Touch</h2>
                <div className="contact-card">
                    <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly hello.</p>
                    <a href="mailto:hello@ahmedfaiyaz.com" className="contact-link">hello@ahmedfaiyaz.com</a>
                    <div className="social-links">
                        <a href="https://github.com/afaiyaz006" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/afaiyaz006" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com/afaiyaz006" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
