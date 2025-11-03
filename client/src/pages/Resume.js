import React, { useState, useEffect } from 'react';

function Resume() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/portfolio/data' 
        : 'http://localhost:5000/api/portfolio/data';
      
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPortfolioData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
      setLoading(false);
    }
  };

  const generatePDF = () => {
    window.print();
  };

  const downloadJSON = () => {
    const dataStr = JSON.stringify(portfolioData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'resume-data.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  if (loading) {
    return (
      <div className="page-section resume">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <div className="loader"></div>
            <p style={{ marginTop: '20px' }}>Loading resume data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="page-section resume">
        <div className="container">
          <h2 className="section-title">Resume</h2>
          <p style={{ textAlign: 'center' }}>Unable to load resume data.</p>
        </div>
      </div>
    );
  }

  const { personal, education, social, skills } = portfolioData;

  return (
    <div className="page-section resume">
      <div className="container">
        <h2 className="section-title">My Resume</h2>
        <p className="section-subtitle">Auto-generated from portfolio data</p>

        <div className="resume-actions no-print">
          <button onClick={generatePDF} className="btn btn-primary">
            <i className="fas fa-download"></i> Download as PDF
          </button>
          <button onClick={downloadJSON} className="btn btn-secondary">
            <i className="fas fa-file-code"></i> Download Data (JSON)
          </button>
        </div>

        <div className="resume-container">
          {/* Header */}
          <div className="resume-header">
            <h1>{personal.fullName}</h1>
            <p className="resume-tagline">{personal.tagline}</p>
            <div className="resume-contact-info">
              <span><i className="fas fa-envelope"></i> {personal.email}</span>
              <span><i className="fas fa-phone"></i> {personal.phone}</span>
              <span><i className="fas fa-map-marker-alt"></i> {personal.location}, {personal.country}</span>
            </div>
            <div className="resume-social-links">
              {social.github && (
                <a href={social.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-section">
            <h3 className="resume-section-title">Professional Summary</h3>
            <p>{personal.bio}</p>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="resume-item">
              <div className="resume-item-header">
                <h4>{education.degree} - {education.branch}</h4>
                <span className="resume-date">{education.startYear} - {education.endYear}</span>
              </div>
              <p className="resume-institution">{education.college}</p>
              <p className="resume-location">{education.location}</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h3 className="resume-section-title">Technical Skills</h3>
            <div className="resume-skills-grid">
              {skills.technical && skills.technical.map((skill, index) => (
                <div key={index} className="resume-skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-level-bar">
                    <div 
                      className="skill-level-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          {skills.soft && skills.soft.length > 0 && (
            <div className="resume-section">
              <h3 className="resume-section-title">Soft Skills</h3>
              <ul className="resume-soft-skills">
                {skills.soft.map((skill, index) => (
                  <li key={index}>
                    <strong>{skill.name}:</strong> {skill.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Projects */}
          {portfolioData.projects && portfolioData.projects.length > 0 && (
            <div className="resume-section">
              <h3 className="resume-section-title">Projects</h3>
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="resume-item">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  {project.technologies && (
                    <p className="project-tech">
                      <strong>Technologies:</strong> {project.technologies.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Experience */}
          {portfolioData.experience && portfolioData.experience.length > 0 && (
            <div className="resume-section">
              <h3 className="resume-section-title">Experience</h3>
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="resume-item">
                  <div className="resume-item-header">
                    <h4>{exp.position}</h4>
                    <span className="resume-date">{exp.duration}</span>
                  </div>
                  <p className="resume-institution">{exp.company}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {portfolioData.certifications && portfolioData.certifications.length > 0 && (
            <div className="resume-section">
              <h3 className="resume-section-title">Certifications</h3>
              <ul className="resume-certifications">
                {portfolioData.certifications.map((cert, index) => (
                  <li key={index}>
                    <strong>{cert.name}</strong> - {cert.issuer} ({cert.year})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resume;
