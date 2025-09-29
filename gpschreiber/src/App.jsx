import React from 'react'
import './App.css'
import ProjectCard from './components/ProjectCard'

const SKILLS = {
  'Programming Languages': ['Python', 'R', 'C++', 'JavaScript', 'Java', 'TypeScript', 'SQL', 'HTML', 'CSS', 'VHDL', 'AVR', 'MATLAB'],
  'Libraries/Frameworks': ['Pandas', 'NumPy', 'Scikit-Learn', 'PyTorch', 'TensorFlow', 'Keras', 'PyGame', 'SFML', 'React', 'TailwindCSS', 'PostgreSQL'],
  'Skills/Technologies': ['Machine Learning', 'Data Science', 'Data Cleaning/Manipulation', 'Feature Engineering', 'Web Scraping', 'Agile Methodologies', 'Object-Oriented Programming', 'Linux', 'Git', 'CUDA', 'Teamwork', 'Leadership', 'Communication', 'Problem Solving', 'Organization', 'Initiative', 'Fast Learner']
}


function App() {
  return (
    <div className='app-root'>
      <header className='site-header'>
        <div className='name'>Gabriel Schreiber</div>
        <nav className='nav-bar' aria-label="Navigation bar">
          <a href='#about'>About Me</a>
          <a href='#projects'>Projects</a>
          <a>Skills</a>
          <a>Contact</a>
        </nav>
      </header>

      <main className='container'>
        <section id='about-me' className='about-me card'>
          <div className='about-me-left'>
            <h1 className='title'>Computer Science Student </h1>
            <p className='subtitle'>
              Passionate about finding data-driven solutions to real-world, complex problems.
            </p>
          </div>
          <div className='education'>
            <p className='education title'>B.S. in Computer Science</p>
            <p className='education subtitle'>Minor in Statistics</p>
            {/* <TextGradient>University of Florida</TextGradient> */}
            <p className='education'>University of Florida</p>
          </div>
        </section>
      </main>

      <section id='projects' className='container'>
        <div className='project-section'>
          <h2 className='title'>Projects</h2>
          <div className='projects-grid'>
            <ProjectCard 
              title="NBA Playoff Predictor" 
              info="Machine learning model using a Random Forest Classifier on historical mid-season NBA data to predict playoff teams (~90% accuracy on 2025 season)" 
              skills={["Python", "Pandas", "Scikit-Learn", "Random Forest Classifier", "Web Scraping", "Data Cleaning", "Feature Engineering", "ML Dev"]}
              link="https://github.com/gabeschreiber/nbaplayoffpredictor"
            />
            <ProjectCard
              title="SwampStudy"
              info="Contributer — Full-stack platform connecting UF students with study partners based on shared classes, locations, and study habits"
              skills={["TypeScript", "React+Vite", "TailwindCSS", "Node.js", "Fastify", "PostgreSQL", "Full-Stack Development"]}
              link="https://github.com/connor-kress/swamp-study"
            />
            <ProjectCard 
              title="CineScope" 
              info="Movie discovery app for browsing popular titles, viewing ratings, and exploring a dynamic “Top 10” based on user activity"
              skills={["JavaScript", "React+Vite", "TailwindCSS", "Appwrite", "Frontend Development"]}
              link="https://github.com/gabeschreiber/CineScope"
            />
            <ProjectCard 
              title="GenreJumper" 
              info="Music discovery app leveraging graph traversal (DFS and Dijkstra’s Algorithm) to recommend songs across genres from a chosen starting track"
              skills={["Python", "SpotiPy"]}
              link="https://github.com/gabeschreiber/GenreJumper"
            />
          </div>
          
        </div>
      </section>

    </div>


    // <div className="root">
    //   <header className="site-header">
    //     <div className="brand">Gabriel Schreiber</div>
    //     <nav className="site-nav" aria-label="Navigate the site">
    //       <a href="#about">About</a>
    //       <a href="#skills">Skills</a>
    //       <a href="#experience">Experience</a>
    //       <a href="#projects">Projects</a>
    //       <a href="#contact">Contact</a>
    //     </nav>
    //   </header>

    //   <main className="container">
    //     <section id="about" className="hero card">
    //       <div className="hero-left">
    //         <h1 className="title">Computer Science • Software Engineer</h1>
    //         <p className="subtitle">Building reliable, maintainable web applications and tooling.</p>
    //         <p className="summary">
    //           I'm a computer science graduate focused on frontend and backend development,
    //           with experience in full-stack JavaScript, data structures & algorithms, and
    //           system design. I enjoy turning fuzzy problems into well-tested, pragmatic
    //           solutions.
    //         </p>
    //         <div className="cta-row">
    //           <a className="btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
    //           <a className="btn ghost" href="#contact">Get in touch</a>
    //         </div>
    //       </div>
    //       <div className="hero-right" aria-hidden>
    //         {/* Placeholder for a profile image or avatar - add your own in src/assets and update */}
    //         <div className="avatar">GS</div>
    //       </div>
    //     </section>

    //     <section id="skills" className="card">
    //       <h2>Skills</h2>
    //       <p className="muted">Technologies and topics I use regularly</p>
    //       <div className="skills">
    //         {SKILLS.map((s) => (
    //           <span className="skill-badge" key={s}>{s}</span>
    //         ))}
    //       </div>
    //     </section>

    //     <section id="experience" className="card">
    //       <h2>Experience & Education</h2>
    //       <ul className="timeline">
    //         <li>
    //           <strong>Software Engineer — Example Company</strong>
    //           <span className="meta"> • 2023 — Present</span>
    //           <p className="muted">Worked on web platform features, API design, and performance improvements.</p>
    //         </li>
    //         <li>
    //           <strong>B.S. Computer Science — Example University</strong>
    //           <span className="meta"> • 2019 — 2023</span>
    //           <p className="muted">Coursework: Algorithms, Operating Systems, Databases, Networking.</p>
    //         </li>
    //       </ul>
    //     </section>

    //     <section id="projects" className="card">
    //       <h2>Selected Projects</h2>
    //       <div className="projects-grid">
    //         <article className="project">
    //           <h3>Project One</h3>
    //           <p className="muted">Brief description of a project. Link to a repo or demo when ready.</p>
    //           <a className="link" href="#">View repository</a>
    //         </article>
    //         <article className="project">
    //           <h3>Project Two</h3>
    //           <p className="muted">Short description describing the problem and your approach.</p>
    //           <a className="link" href="#">View repository</a>
    //         </article>
    //       </div>
    //     </section>
    //   </main>

    //   <footer id="contact" className="site-footer">
    //     <div className="footer-row">
    //       <div>
    //         <strong>Contact</strong>
    //         <p className="muted">Email: <a href="mailto:you@example.com">you@example.com</a></p>
    //         <p className="muted">GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
    //       </div>
    //       <div className="attribution muted">Built with Vite + React</div>
    //     </div>
    //   </footer>
    // </div>
  )
}

export default App
