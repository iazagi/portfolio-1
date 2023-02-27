import React from 'react';
import ME from '../../assets/me-about.jpg';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>ABOUT ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={ME} alt="img" />
          </div>
        </div>

        <div className="about__content"></div>
      </div>
    </section>
  );
};

export default About;
