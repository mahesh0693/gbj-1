import React from "react";
import "./portfolio.css";
import First from "../assets/img/p1.png";
import img2 from "../assets/img/p2.png";
import img3 from "../assets/img/p3.png";
import img4 from "../assets/img/p4.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      image: img4,
      title: "Digital Marketing Agency Website",
      description:
        "This is a website for a client who wants to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand.",
      width: "Hug (561px)px",
      height: "Hug (496.36px)px",
      top: "279px",
      left: "113px",
      gap: "42.79px",
      opacity: "0px",
    },
    {
      image: img3,
      title: "Digital Marketing Agency Website",
      description:
        "This is a website for a client who wants to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand.",
      width: "Hug (561.15px)px",
      height: "Hug (675.07px)px",
      top: "279px",
      left: "769px",
      gap: "42.64px",
      opacity: "0px",
    },
    {
      image: img2,
      title: "Digital Marketing Agency Website",
      description:
        "This is a website for a client who wants to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand.",
      width: "Hug (561px)",
      height: "Hug (677.02px)",
      top: "874px",
      left: "113px",
      gap: "42.79px",
      opacity: "0px",
    },
    {
      image: First,
      title: "Digital Marketing Agency Website",
      description:
        "This is a website for a client who wants to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand.",
      width: "Hug (554px)px",
      height: "Hug (504.52px)px",
      top: "1050px",
      left: "769px",
      gap: "55.4px",
      opacity: " 0px",
    },
  ];

  return (
    <div className='portfolio'>
      <h2>Our Portfolio</h2>
      <h3>We provide the Perfect Solution to your business growth</h3>
      <div className='portfolio-grid'>
        {portfolioItems.map((item, index) => (
          <div className='portfolio-item' key={index}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: item.width,
                height: item.height,
                top: item.top,
                left: item.left,
                gap: item.gap,
                opacity: item.opacity,
              }}
            />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
