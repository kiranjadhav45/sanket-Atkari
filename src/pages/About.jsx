import "./Page.css";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";

const AboutPage = () => {
  return (
    <div className="mx-1 homecontainer">
      <Navbar />
      <About />
      <Contact type="hide" />
    </div>
  );
};

export default AboutPage;
