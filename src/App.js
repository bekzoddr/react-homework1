import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutSection from "./components/about-section/AboutSection";
import Service from "./components/serviceSection/Service";
import Covid from "./components/covid/Covid";
import Article from "./components/article/Article";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutSection />
      <Service />
      <Covid />
      <Article />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
