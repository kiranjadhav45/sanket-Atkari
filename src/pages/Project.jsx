import React from "react";
import Navbar from "../components/navbar/Navbar";
import Project from "../components/projects/Project";
import Contact from "../components/contact/Contact";
const ProjectPage = () => {
  return (
    <div className="mx-1 homecontainer">
      <Navbar type="hide" />
      <Project type="togle" />
      <Contact type="hide" />
    </div>
  );
};

export default ProjectPage;
