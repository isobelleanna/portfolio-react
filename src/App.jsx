import "./App.scss";
import Home from "./container/Home/Home";
import TechSkills from "./container/TechSkills/TechSkills";
import About from "./container/About/About";
import Footer from "./container/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Home />
      <TechSkills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
