import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Imran J.</h1>
        <p>Creative Developer | Passionate about AI-driven Solutions</p>
        <nav>
          <ul>
            <li><Link to="about" smooth={true}>About</Link></li>
            <li><Link to="projects" smooth={true}>Projects</Link></li>
            <li><Link to="achievements" smooth={true}>Achievements</Link></li>
            <li><Link to="skills" smooth={true}>Skills</Link></li>
            <li><Link to="contact" smooth={true}>Contact</Link></li>
          </ul>
        </nav>
        <div className="socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
