import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div className='contact-container'>

      <div className='contact-header'>
        <h2 className="contact-title">Contact Me</h2>
      </div>

      <div className="form-container">
        <form className="contact-form">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="form-textarea"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="form-textarea"
          />
          <textarea
            placeholder="Your message"
            name="message"
            rows={4}
            className="form-textarea"
          ></textarea>
          <button className="submit-button">
            SEND MESSAGE
          </button>
        </form>
      </div>

      <div className="social-links">
        <Link
          href="https://github.com/MinalSaleem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={42}
            className='social-icon'
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/minalsaleem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            size={42}
            className='social-icon'
          />
        </Link>
      </div>
    </div>
  );
};

export default Contact;