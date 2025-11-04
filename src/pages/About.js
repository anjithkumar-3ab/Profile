import React, {useEffect, useState} from 'react';
import '../styles/style.css';

export default function About(){
  const [data, setData] = useState(null);

  useEffect(()=>{
    const apiUrl = '/portfolio-data.json';
    
    fetch(apiUrl)
      .then(r => r.json())
      .then(d => setData(d))
      .catch(err => console.error(err));
  },[]);

  const personal = data?.personal;

  return (
    <section className="about page-section">
      <div className="container about-content">
        <div className="about-image">
          {personal?.profileImage ? (
            <img src={personal.profileImage} alt={personal.fullName} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', aspectRatio: '1/1'}} />
          ) : (
            <div className="image-placeholder">📸</div>
          )}
        </div>
        <div className="about-text">
          <h3>{personal?.displayName ?? 'About Me'}</h3>
          <p>{personal?.bio}</p>
          <div className="about-info">
            <div className="info-item">
              <i className="fas fa-user"></i>
              <div>
                <h4>Name</h4>
                <p>{personal?.fullName}</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>{personal?.location}, {personal?.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
