import React from "react";
// import "./assets/styles/main.css";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import ServicesSection from "./components/ServicesSection";
import Partners from "./components/partner";
import Work from "./components/work";
import Portfolio from "./components/portfolio";
import Testimonial from "./components/testimonials";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* <Partners /> */}
      <ServicesSection />
      <Work />
      <Portfolio />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
