import "./App.scss";
import Nav from "./container/Nav/Nav";
import Home from "./container/Home/Home";
import TechSkills from "./container/TechSkills/TechSkills";
import Projects from "./container/Projects/Projects";
import About from "./container/About/About";
import Footer from "./container/Footer/Footer";
import { useState } from "react";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="app">
      <Nav handleMenuToggle={handleMenuToggle} toggleMenu={toggleMenu} />
      <Home />
      <TechSkills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
