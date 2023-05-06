import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import "./Home.css";
import Project from "../components/projects/Project";
import Quotes from "../components/quotes/Quotes";
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <div className="mx-1 homecontainer">
      <Navbar />
      <About />
      <Project />
      <Quotes />
      <Contact />
    </div>
  );
};

export default Home;
