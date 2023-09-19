import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
