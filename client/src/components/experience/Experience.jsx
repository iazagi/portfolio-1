import React from 'react';
import './experience.css';
import { GrHtml5 } from 'react-icons/gr';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiMongodb, SiPostgresql } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { GrReactjs } from 'react-icons/gr';
import { TbBrandTailwind } from 'react-icons/tb';
import { BsBootstrapFill } from 'react-icons/bs';
import { FaNodeJs } from 'react-icons/fa';

const experience = () => {
  return (
    <section className="" id="experience">
      <h5>what skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GrHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <h4>JAVASCRIPT</h4>
            </article>
            <article className="experience__details">
              <GrReactjs className="experience__details-icon" />
              <h4>REACT</h4>
            </article>
            <article className="experience__details">
              <TbBrandReactNative className="experience__details-icon" />
              <h4>REACT NATIVE</h4>
            </article>
            <article className="experience__details">
              <TbBrandTailwind className="experience__details-icon" />
              <h4>TAILWIND</h4>
            </article>
            <article className="experience__details">
              <BsBootstrapFill className="experience__details-icon" />
              <h4>BOOTSTRAP</h4>
            </article>
          </div>
        </div>
        {/*end of frontend */}
        <div className="experience__backend">
          <h3>backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <h4>NODE-JS</h4>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <h4>MANGODB</h4>
            </article>
            <article className="experience__details">
              <SiPostgresql className="experience__details-icon" />
              <h4>POSTGRESQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
