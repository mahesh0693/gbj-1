import React, { useState } from "react";
import "./subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., send the email to your server or a service
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className='subscribe'>
      <h2>Subscribe</h2>
      <h3>Subscribe To Get The Latest News About Us</h3>
      <p>Please Drop Your Email Below To Get Daily Updates About What We Do</p>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Enter Your Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit'>Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
