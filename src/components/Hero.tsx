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
      <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-[#091E42]">
        Hi! I'm Jesus Borjas.
      </h2>
      <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl text-[#091E42]">
        A Front-End Developer
      </h2>
      <p className="max-w-[600px] mx-auto md:text-lg ">
        At Turing School of Software and Design, I spent 8 months diving deep
        into front-end development and unit testing, mastering JavaScript and
        React along the way. Collaborating with peers, I built applications
        using Git/GitHub for code management. After graduating, I focused on
        advancing my CSS skills with Tailwind, enabling me to seamlessly
        translate Figma designs into code.
      </p>
      <div className="flex justify-center mt-4 space-x-6">
        <a
          href="https://www.linkedin.com/in/jesus-borjas-6589b920a/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Jesusborjas006"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={30} />
        </a>
        <a
          href="https://docs.google.com/document/d/1RLLFRV9K7DFOYccXzt544n3SsytSGb-LU4r6qsQvWR0/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <BsFillFileEarmarkTextFill size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
