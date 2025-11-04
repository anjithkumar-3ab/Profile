import React, {useEffect, useState} from 'react';
import '../styles/style.css';

export default function Skills(){
  const [skills, setSkills] = useState([]);

  useEffect(()=>{
    const apiUrl = '/portfolio-data.json';
    
    fetch(apiUrl)
      .then(r => r.json())
      .then(d => setSkills(d.skills?.technical || []))
      .catch(err => console.error(err));
  },[]);

  return (
    <section className="page-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((s, idx) => (
            <div className="skill-card" key={idx}>
              <i className={`skill-icon ${s.icon}`}></i>
              <h3>{s.name}</h3>
              <div className="progress-bar" aria-hidden>
                <div className="progress" style={{width: `${s.level}%`}}></div>
              </div>
              <span className="skill-level">{s.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
