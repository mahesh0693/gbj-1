import React, { useState } from "react";
import img from "../assets/img/profile.png";
import "./testimonials.css";

const testimonials = [
  {
    text: "Thank you for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.",
    name: "Emily Stones",
    title: "CEO, Marketing Guru",
    image: img,
  },
  {
    text: "Thank you for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.",
    name: "Emily Stones",
    title: "CEO, Marketing Guru",
    image: img,
  },
  {
    text: "Thank you for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.",
    name: "Emily Stones",
    title: "CEO, Marketing Guru",
    image: img,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='testimonials'>
      <h2>Testimonials</h2>
      <h3>See What Our Customers Say About Us</h3>
      <div className='testimonial-container'>
        <button className='prev' onClick={prevTestimonial}>
          ‹
        </button>
        <div className='testimonial'>
          <p>{testimonials[current].text}</p>
          <div className='testimonial-info'>
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
            />
            <div>
              <h4>{testimonials[current].name}</h4>
              <p>{testimonials[current].title}</p>
            </div>
          </div>
        </div>
        <button className='next' onClick={nextTestimonial}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
