import React, {useEffect, useState} from 'react';
import '../styles/style.css';

export default function Projects(){
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    fetch('/api/portfolio/data')
      .then(r => r.json())
      .then(d => setProjects(d.projects || []))
      .catch(err => console.error(err));
  },[]);

  return (
    <section className="projects page-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.length === 0 && <p className="text-center">No projects configured yet. Edit <code>data/portfolio-data.json</code>.</p>}
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-image">
                <div className="image-placeholder">{p.image ? <img src={p.image} alt={p.title} /> : '📦'}</div>
                <div className="project-overlay">
                  {p.live && <a className="project-link" href={p.live} target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>}
                  {p.repo && <a className="project-link" href={p.repo} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>}
                </div>
              </div>
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-tags">
                  {(p.tags || []).map((t, idx) => <span className="tag" key={idx}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
