import './Projects.scss'

export default function Projects() {
    const projects = [
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

    return (
        <div className="projects-container">
            <h2>Selected Work</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
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
        </div>
    );
}
