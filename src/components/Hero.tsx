import {
  BsLinkedin,
  BsGithub,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

const Hero = () => {
  return (
    <section className="text-center px-6 mx-auto mt-24">
      <img
        className="mx-auto w-[320px] md:w-[380px] mb-4"
        src="../images/undraw-2.svg"
        alt="programming svg"
      />
      <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
        Hi! I'm Jesus Borjas.
      </h2>
      <h2 className="text-3xl font-semibold mb-4 md:text-4xl lg:text-5xl xl:text-6xl">
        A Front-End Developer
      </h2>
      <p className="max-w-[600px] mx-auto md:text-lg ">
        I have a strong passion for building a responsive and performant web
        application with great user experiences that positively impacts the
        world. I am always striving to learn and develop new skills and become a
        better developer.
      </p>
      <div className="flex justify-center mt-4 space-x-6">
        <a href="http://www.google.com" target="_blank" rel="noreferrer">
          <BsLinkedin size={30} />
        </a>
        <a href="http://www.google.com" target="_blank" rel="noreferrer">
          <BsGithub size={30} />
        </a>
        <a href="http://www.google.com" target="_blank" rel="noreferrer">
          <BsFillFileEarmarkTextFill size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
