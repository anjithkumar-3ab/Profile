import React, {useEffect, useState} from 'react';
import '../styles/style.css';

export default function Home(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        console.log('Portfolio data loaded:', d);
        setData(d);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading portfolio data:', err);
        setError(err.message);
        setLoading(false);
      });
  },[]);

  const personal = data?.personal;

  // Show loading state
  if (loading) {
    return (
      <section id="home" className="hero">
        <div className="container" style={{textAlign: 'center', paddingTop: '200px'}}>
          <div className="loader" style={{margin: '0 auto'}}></div>
          <p style={{color: 'var(--text-color)', marginTop: '20px'}}>Loading portfolio data...</p>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section id="home" className="hero">
        <div className="container" style={{textAlign: 'center', paddingTop: '200px'}}>
          <p style={{color: '#ff4757'}}>Error loading data: {error}</p>
          <button onClick={() => window.location.reload()} className="btn btn-primary" style={{marginTop: '20px'}}>
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="home" className="hero">
        <div id="particles-js"></div>
        <div className="space-animation">
          <div className="moon"></div>
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h3 className="greeting">Hi There! <span className="wave">👋</span></h3>
            <h1 className="hero-title">I'M <br/><span className="main-name">{personal ? personal.fullName : 'Loading...'}</span></h1>
            <h2 className="hero-subtitle"><span className="typewriter-text">{data?.typewriterTexts?.[0] ?? ''}</span></h2>
            <p className="hero-description">{personal?.tagline}</p>
            <div className="hero-buttons">
              <a href="/projects" className="btn btn-primary">View My Work</a>
              <a href="/contact" className="btn btn-secondary">Contact Me</a>
            </div>
            
            <div className="social-links">
              {data?.social?.github && (
                <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {data?.social?.linkedin && (
                <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              )}
              <a href={`mailto:${personal?.email}`} className="social-icon">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="/resume" className="social-icon">
                <i className="fas fa-file-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
