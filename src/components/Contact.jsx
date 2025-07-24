import React from "react";
import "./Contact.css";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">CONTACT</h2>
        <p className="contact-subheading">Let's Connect.</p>

        <div className="social-links">
          <a
            href="https://linkedin.com/in/amiteshkar"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
            <FiArrowUpRight />
          </a>
          <a
            href="https://github.com/amykrrrr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
            <span>GitHub</span>
            <FiArrowUpRight />
          </a>
          <a
            href="https://x.com/StraightNoodle_"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaTwitter />
            <span>Twitter</span>
            <FiArrowUpRight />
          </a>
          <a
            href="https://instagram.com/amykrrrr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
            <span>Instagram</span>
            <FiArrowUpRight />
          </a>
        </div>

        <p className="email-prompt">or drop a mail at</p>
        <a href="mailto:amiteshkar@gmail.com" className="email-link">
          amiteshkar@gmail.com
        </a>
      </div>

      <footer className="footer-credit">
        <p>
          Designed & Developed by{" "}
          <a
            href="https://x.com/StraightNoodle_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amitesh Kar
          </a>
        </p>
      </footer>
    </section>
  );
};

export default Contact;
