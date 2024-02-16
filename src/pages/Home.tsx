import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type HomeProps = {
  setSelectedProject: React.Dispatch<React.SetStateAction<number>>;
};

const Home = ({ setSelectedProject }: HomeProps) => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-[#44546F] pb-20 text-[#f1f1f1]">
        <Skills />
        <Works setSelectedProject={setSelectedProject} />
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
