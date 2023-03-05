import React from 'react';
import './contact.css';
import { TfiEmail } from 'react-icons/tfi';
import { RiMessengerLine } from 'react-icons/ri';
import { ImWhatsapp } from 'react-icons/im';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>israel.azagi@gmail.com</h5>
            <a href="mailto:israel.azagi@gmail.com" target="_blanks">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Massenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/iazagi" target="_blanks">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+9725036555995</h5>
            <a
              href="https://app.whatsapp.com/send?phone=+972506555995"
              target="_blanks"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form action="submit">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Massage
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
