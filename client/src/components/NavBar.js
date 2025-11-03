import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h2>Anjith Kumar<span>.</span></h2>
        </div>
        <ul className="nav-menu">
          <li><NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
          <li><NavLink to="/skills" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Skills</NavLink></li>
          <li><NavLink to="/projects" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink></li>
          <li><NavLink to="/resume" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Resume</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
