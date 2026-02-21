import { Routes, Route, NavLink } from 'react-router-dom'
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
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/blogs">Blogs</NavLink></li>
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
