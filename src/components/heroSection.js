import React from "react";
import googleLogo from "../assets/img/goog.png"; // Make sure to replace with actual path
import trelloLogo from "../assets/img/trello.png";
import mondayLogo from "../assets/img/mon.jpeg";
import notionLogo from "../assets/img/not.jpeg";
import slackLogo from "../assets/img/slack.jpg";
import heroImage from "../assets/img/hero.jpg"; // Make sure to replace with actual path

const HeroSection = () => {
  return (
    <section className='hero'>
      <div className='top-content'>
        <div className='hero-content'>
          <h1>Increase Your Customers Loyalty and Satisfaction</h1>
          <p>
            We help businesses like yours earn more customers, stand out from
            competitors, make more money.
          </p>
          <button>Get Started</button>
        </div>
        <div className='hero-image'>
          <img src={heroImage} alt='hero' />
        </div>
      </div>

      <section className='partners'>
        <div className='partner-logos'>
          <img
            src={googleLogo}
            alt='Google'
            style={{
              width: "88.71px",
              height: "29.11px",
            }}
          />
          <img
            src={trelloLogo}
            alt='Trello'
            style={{
              width: "88.71px",
              height: "29.11px",
            }}
          />
          <img
            src={mondayLogo}
            alt='Monday.com'
            style={{
              width: "88.71px",
              height: "29.11px",
            }}
          />
          <img
            src={notionLogo}
            alt='Notion'
            style={{
              width: "88.71px",
              height: "29.11px",
            }}
          />
          <img
            src={slackLogo}
            alt='Slack'
            style={{
              width: "88.71px",
              height: "29.11px",
            }}
          />
          <span
            style={{ paddingBottom: "70px", backgroundColor: "#D7F5DC" }}
          ></span>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
