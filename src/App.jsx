import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Connect from "./pages/Connect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
