import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section about'>
          <h1>WEB LOGO</h1>
          <p>
            Some footer text about the Agency. Just a little description to help
            people understand you better.
          </p>
          <div className='social-icons'>
            <a href='#'>
              <FaFacebookF />
            </a>
            <a href='#'>
              <FaTwitter />
            </a>
            <a href='#'>
              <FaLinkedinIn />
            </a>
            <a href='#'>
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className='footer-section links'>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Portfolio</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className='footer-section contact'>
          <h2>Address</h2>
          <p>Design Agency Head Office,</p>
          <p>Airport Road</p>
          <p>United Arab Emirate</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>Copyright Design Agency 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
