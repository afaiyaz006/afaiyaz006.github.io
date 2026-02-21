import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import './App.scss'

function App() {
  return (
    <div className="app-container">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About Me</Link></li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>

      <footer>
        <p>© 2026 Ahmed Faiyaz. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
