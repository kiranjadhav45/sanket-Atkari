import React from "react";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";

const Connect = () => {
  return (
    <div className="mx-1 homecontainer">
      <Navbar />
      <About />
      <Contact />
    </div>
  );
};

export default Connect;
