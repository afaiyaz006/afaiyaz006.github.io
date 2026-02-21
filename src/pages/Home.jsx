import './Home.scss'

export default function Home() {
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
