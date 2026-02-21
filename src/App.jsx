import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import './App.scss'

function App() {
  return (
    <div className="app-layout">
      <header className="navbar-wrapper">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Ahmed Faiyaz. Built with passion.</p>
      </footer>
    </div>
  )
}

export default App
