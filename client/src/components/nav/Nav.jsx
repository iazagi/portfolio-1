/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css';
import { HiOutlineHome } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsJournalBookmark } from 'react-icons/bs';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <HiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BsJournalBookmark />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <MdOutlineMiscellaneousServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <RiContactsLine />
      </a>
    </nav>
  );
};

export default Nav;
