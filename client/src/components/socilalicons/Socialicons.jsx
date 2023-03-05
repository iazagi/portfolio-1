import React from 'react';
import './socialicons.css';
import { AiFillFacebook } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Socialicons = (props) => {
  return (
    <div className={props.position}>
      <a
        href="https://www.facebook.com/iazagi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillFacebook className="footer__socials-icons" />
      </a>
      <a
        href="https://https://www.instagram.com/iazagi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiInstagram className="footer__socials-icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/yisrael-azagi-267258216/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/iazagi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default Socialicons;
