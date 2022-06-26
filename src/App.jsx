import "./App.scss";
import Nav from "./container/Nav/Nav";
import Home from "./container/Home/Home";
import TechSkills from "./container/TechSkills/TechSkills";
import Projects from "./container/Projects/Projects";
import About from "./container/About/About";
import Footer from "./container/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <TechSkills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
