import './Blogs.scss'

export default function Blogs() {
    const blogs = [
        { 
            title: "Building Minimalist Realtime Chat Applications", 
            date: "Feb 2026", 
            link: "https://github.com/afaiyaz006/Kotha",
            description: "An exploration into building high-performance, real-time communication tools using modern web technologies."
        },
    ];

    return (
        <div className="blogs-container">
            <h2>Notes & Thoughts</h2>
            <div className="blogs-list">
                {blogs.length > 0 ? (
                    blogs.map((blog, index) => (
                        <div key={index} className="blog-card">
                            <div className="blog-info">
                                <span className="blog-date">{blog.date}</span>
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                            </div>
                            <a href={blog.link} className="read-more">Read Article</a>
                        </div>
                    ))
                ) : (
                    <div className="blog-card">
                        <div className="blog-info">
                            <h3>No articles yet</h3>
                            <span className="blog-date">Coming soon...</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
