import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward, FaUsers, FaFolder } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>ABOUT ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year </small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0 </small>
            </article>

            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10 complited</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            saepe animi aut exercitationem, harum aspernatur nulla ipsam nobis
            pariatur dicta culpa similique, vel porro illum inventore amet earum
            accusantium eaque.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
