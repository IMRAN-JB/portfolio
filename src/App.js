import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // Import all styles in App.css

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
};

const Header = () => (
  <header className="header" data-aos="fade-down">
    <h1>IMRAN J.</h1>
    <p>Passionate Web Developer</p>
  </header>
);

const About = () => (
  <section className="about" data-aos="fade-up">
    <h2>About Me</h2>
    <p>
      I'm Imran J., a passionate web developer with expertise in React, creating dynamic and responsive applications.
    </p>
  </section>
);

const Skills = () => (
  <section className="skills" data-aos="fade-right">
    <h2>Skills</h2>
    <div className="icons">
      <i className="fab fa-react"></i>
      <i className="fab fa-node-js"></i>
      <i className="fab fa-css3-alt"></i>
    </div>
  </section>
);

const Projects = () => (
  <section className="projects" data-aos="fade-left">
    <h2>Projects</h2>
    <p>Here are some of my recent works...</p>
  </section>
);

const Achievements = () => (
  <section className="achievements" data-aos="zoom-in">
    <h2>Achievements</h2>
    <p>Recognized for outstanding performance in web development and UI/UX design.</p>
  </section>
);

const Contact = () => (
  <section className="contact" data-aos="flip-up">
    <h2>Contact Me</h2>
    <p>Feel free to reach out via email or phone.</p>
  </section>
);

export default App;
