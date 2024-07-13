// src/ServicesSection.js
import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      icon: "📈", // Placeholder for icon, replace with actual icon as needed
      title: "Grow Your Business",
      description: "We help identify the best ways to improve your business",
    },
    {
      icon: "❤️", // Placeholder for icon, replace with actual icon as needed
      title: "Improve Brand Loyalty",
      description: "We help identify the best ways to improve your business",
    },
    {
      icon: "💼", // Placeholder for icon, replace with actual icon as needed
      title: "Improve Business Model",
      description: "We help identify the best ways to improve your business",
    },
  ];

  return (
    <div className='services-section'>
      <div className='topContainer'>
        <h3>What We Do</h3>
        <h2>We provide the Perfect Solution to your business growth</h2>
      </div>

      <div className='services-container'>
        {services.map((service, index) => (
          <div className='service-card' key={index}>
            <div className='service-icon'>{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <a href='#learn-more' className='learn-more'>
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
