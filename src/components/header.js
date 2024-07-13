import React from "react";
import "../assets/styles/main.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className='logo'>
          Design<span style={{ color: "orange" }}>AGENCY</span>
        </div>
        <ul>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#about'>About Us</a>
          </li>
          <li>
            <a href='#contact'>Contact Us</a>
          </li>
          <li>
            <a href='#login' style={{ border: "1px" }}>
              Login
            </a>
          </li>
          <li>
            <a href='#register' className='register'>
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
