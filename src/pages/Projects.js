import React, {useEffect, useState} from 'react';
import '../styles/style.css';

export default function Projects(){
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const apiUrl = process.env.NODE_ENV === 'production' 
      ? '/api/portfolio/data' 
      : 'http://localhost:5000/api/portfolio/data';
    
    fetch(apiUrl)
      .then(r => {
        if (!r.ok) {
          throw new Error(`HTTP error! status: ${r.status}`);
        }
        return r.json();
      })
      .then(d => {
        setProjects(d.projects || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading data:', err);
        setError(err.message);
        setLoading(false);
      });
  },[]);

  return (
    <section className="projects page-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        {loading && <p className="text-center">Loading projects...</p>}
        {error && <p className="text-center error-message">Error loading data: {error}</p>}
        <div className="projects-grid">
          {!loading && !error && projects.length === 0 && <p className="text-center">No projects configured yet. Edit <code>data/portfolio-data.json</code>.</p>}
          {!loading && !error && projects.map((p, i) => (
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
