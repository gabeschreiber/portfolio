import React from 'react'
import './App.css'
import { useRef, useEffect, useState } from 'react';
import ProjectCard from './components/ProjectCard'
import TypeWriter from './effects/TypeWriter.jsx'


const SKILLS = {
  'Programming Languages': ['Python', 'R', 'C++', 'JavaScript', 'Java', 'TypeScript', 'SQL', 'HTML', 'CSS', 'VHDL', 'AVR', 'MATLAB'],
  'Libraries/Frameworks': ['Pandas', 'NumPy', 'Scikit-Learn', 'PyTorch', 'TensorFlow', 'Keras', 'PyGame', 'SFML', 'React', 'TailwindCSS', 'PostgreSQL'],
  'Skills/Technologies': ['Machine Learning', 'Data Science', 'Data Cleaning/Manipulation', 'Feature Engineering', 'Web Scraping', 'Agile Methodologies', 'Object-Oriented Programming', 'Linux', 'Git', 'CUDA', 'Teamwork', 'Leadership', 'Communication', 'Problem Solving', 'Organization', 'Initiative', 'Fast Learner']
}


function App() {
  const ref = useRef();
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    // useEffect for TypeWriter effect to re-render when user scrolls out of view then back
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') return;

    let wasVisible = false;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !wasVisible) {
          wasVisible = true;
          setResetKey(Date.now());
        } else if (!e.isIntersecting) {
          wasVisible = false;
        }
      });
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div className='app-root'>
      <header className='site-header'>
        <div className='name'>Gabriel Schreiber</div>
        <nav className='nav-bar' aria-label="Navigation bar">
          <a href='#about'>About Me</a>
          <a href='#projects'>Projects</a>
          <a href='#skills'>Skills</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      <section className='introduction'>
        <div ref={ref}>
          <TypeWriter text="Hi, I'm Gabe!" delay={50} resetKey={resetKey}/>
        </div>
      </section>

      <main className='container'>
        <section id='about-me' className='about-me card'>
          <div className='profile-pic-container'>
            <img className='profile-pic' src="/private/professional_gabe.JPEG" alt="Profile picture of Gabriel Schreiber"/>
          </div>
          <div className='about-me-left'>
            <h1 className='title'>Gabriel Schreiber</h1>
            <h2 className='subtitle'>Computer Science Student</h2>
            <p className='subtitle'>
              Passionate about finding data-driven solutions to real-world, complex problems.
            </p>
          </div>
          <div className='education'>
            <h3 className='title'>B.S. in Computer Science</h3>
            <p className='subtitle'>Minor in Statistics</p>
            {/* <TextGradient>University of Florida</TextGradient> */}
            <p className='education'>University of Florida</p>
          </div>
        </section>

        <section id='projects' className='projects card'>
          <div className='project-section'>
            <h2 className='title'>Projects</h2>
            <div className='projects-grid'>
              <ProjectCard 
                title="NBA Playoff Predictor" 
                info="Machine learning model using a Random Forest Classifier on historical mid-season NBA data to predict playoff teams (~90% accuracy on 2025 season)" 
                tech={["Python", "Pandas", "Scikit-Learn", "Random Forest Classifier", "ML Dev"]}
                link="https://github.com/gabeschreiber/nbaplayoffpredictor"
              />
              <ProjectCard
                title="SwampStudy"
                info="Contributer — Full-stack platform connecting UF students with study partners based on shared classes, locations, and study habits"
                tech={["TypeScript", "React+Vite", "TailwindCSS", "Node.js", "Fastify", "PostgreSQL", "Full-Stack Development"]}
                link="https://github.com/connor-kress/swamp-study"
              />
              <ProjectCard 
                title="CineScope" 
                info="Movie discovery app for browsing popular titles, viewing ratings, and exploring a dynamic “Top 10” based on user activity"
                tech={["JavaScript", "React+Vite", "TailwindCSS", "Appwrite", "Frontend Development"]}
                link="https://github.com/gabeschreiber/CineScope"
              />
              <ProjectCard 
                title="GenreJumper" 
                info="Music discovery app leveraging graph traversal (DFS and Dijkstra’s Algorithm) to recommend songs across genres from a chosen starting track"
                tech={["Python", "SpotiPy", "Backend Development"]}
                link="https://github.com/gabeschreiber/GenreJumper"
              />
            </div>   
          </div>
        </section>

        <section id='skills' className='container'>
          <div className='skills-section card'>
            <h2 className='title'>Skills</h2>
            <div className='skills-grid'>
              {Object.entries(SKILLS).map(([category, skills]) => (
                <div key={category} className='skill-category'>
                  <h3 className='skill-category-title'>{category}</h3>
                  <div className='skill-list'>
                    {skills.map((skill) => (
                      <p key={skill} className='skill-badge'>{skill}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      

      <footer id="contact" className="site-footer">
        <div className="footer-row">
          <div>
            <strong>Contact</strong>
              <p className="muted">Email: <a href="mailto:schreiberg@ufl.edu">schreiberg@ufl.edu</a></p>
              <p className="muted">GitHub: <a href="https://github.com/gabeschreiber" target="_blank" rel="noopener noreferrer">github.com/gabeschreiber</a></p>
          </div>
          <div className="attribution muted">Last Updated: Sept. 29, 2025</div>
        </div>
      </footer>

    </div>
  )
}

export default App
