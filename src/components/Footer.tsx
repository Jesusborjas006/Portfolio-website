import {
  BsLinkedin,
  BsGithub,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-center p-4 mt-32 px-6">
      <div className="md:flex justify-between p-6 items-center">
        <h2 className="text-xl mb-4 md:mb-0">&lt;Jesus Borjas /&gt;</h2>
        <ul className="flex justify-center space-x-14">
          <li>Home</li>
          <li>About</li>
          <li>Expertise</li>
          <li>Work</li>
        </ul>
        <div className="flex justify-center mt-8 md:mt-0 space-x-6">
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
      </div>
      <p className="m-6 text-xl">Email: jesusbor006@gmail.com</p>
      <p>
        &copy; {new Date().getFullYear()}. All rights reserved by Jesus Borjas.
      </p>
    </footer>
  );
};

export default Footer;
