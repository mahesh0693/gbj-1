// src/components/MetricsSection.js
import React from "react";
import CountUp from "react-countup";
import "./work.css";
import Raise from "../assets/img/raise.png";
import Rating from "../assets/img/rating.png";
import Timeline from "../assets/img/timeline.png";
import Plan from "../assets/img/plan.png";

const Work = () => {
  const metrics = [
    {
      icon: <img src={Plan} alt='' style={{ width: "70px", height: "70px" }} />, // Placeholder for icon, replace with actual icon as needed
      title: "Completed Projects",
      value: 100, // Change to a numeric value
      suffix: " +",
    },
    {
      icon: (
        <img src={Rating} alt='' style={{ width: "70px", height: "70px" }} />
      ), // Placeholder for icon, replace with actual icon as needed
      title: "Customer Satisfaction",
      value: 20, // Change to a numeric value
      suffix: " %",
    },
    {
      icon: (
        <img src={Raise} alt='' style={{ width: "70px", height: "70px" }} />
      ), // Placeholder for icon, replace with actual icon as needed
      title: "Raised by Clients",
      value: 10, // Change to a numeric value
      prefix: "$",
      suffix: "M",
    },
    {
      icon: (
        <img src={Timeline} alt='' style={{ width: "70px", height: "70px" }} />
      ), // Placeholder for icon, replace with actual icon as needed
      title: "Years in Business",
      value: 2, // Change to a numeric value
      suffix: " yrs",
    },
  ];

  return (
    <div className='metrics-section'>
      <div className='metrics-container'>
        {metrics.map((metric, index) => (
          <div className='metric-card' key={index}>
            <div className='metric-icon'>{metric.icon}</div>
            <h4>{metric.title}</h4>
            <p>
              <CountUp
                end={metric.value}
                duration={2}
                prefix={metric.prefix}
                suffix={metric.suffix}
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
