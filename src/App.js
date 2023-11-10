import "./App.css";
import Hero from "./Components/Hero";
import HeaderNav from "./Components/Navbar";
import React from "react";
import Services from "./Components/Services";
import ImageGallery from "./Components/Gallery";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Hero />
      <Services />
      <ImageGallery />
      <Testimonial />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
