import {
  BsLinkedin,
  BsGithub,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-center p-4 mt-32 px-6 bg-[#44546F] text-white">
      <div className="md:flex justify-between p-6 items-center">
        <h2 className="text-xl mb-4 md:mb-0">&lt;Jesus Borjas /&gt;</h2>
        <ul className="flex justify-center space-x-14 text-lg">
          <li className="cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer">
            <a href="#expertise">Expertise</a>
          </li>
          <li className="cursor-pointer">
            <a href="#work">Work</a>
          </li>
        </ul>
        <div className="flex justify-center mt-8 md:mt-0 space-x-6">
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
      </div>
      <a href="mailto:jesusbor006@gmail.com">
        <span className=" inline-block m-6 text-xl ">
          Email: jesusbor006@gmail.com
        </span>
      </a>
      <p>
        &copy; {new Date().getFullYear()}. All rights reserved by Jesus Borjas.
      </p>
    </footer>
  );
};

export default Footer;
