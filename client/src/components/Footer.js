import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {currentYear} <strong>Bathala Anjith Kumar</strong>. All Rights Reserved.
        </p>
        
        <div className="footer-social">
          <a href="https://github.com/anjithkumar-3ab" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/anjithkumarbathala" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:anjithkumars143@gmail.com" className="social-icon">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
