import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  AOS.init();

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project" data-aos="fade-up">
          <h3>Online Quiz Management System</h3>
          <p>Developed a system supporting multiple roles with AI-generated question papers.</p>
          <p>Technologies: Django, Python, HTML, CSS</p>
        </div>
        <div className="project" data-aos="fade-up">
          <h3>College Website (React, Spring Boot)</h3>
          <p>Created a college management system with user authentication, profile management, and admin views.</p>
          <p>Technologies: React.js, Spring Boot, MySQL/PostgreSQL</p>
        </div>
        <div className="project" data-aos="fade-up">
          <h3>Zoho Workflow Automation</h3>
          <p>Improved Zoho Corp’s development workflow by automating manual processes.</p>
          <p>Technologies: Automation Scripts, DevOps Tools</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
