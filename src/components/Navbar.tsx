import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileNav, setMobileNav] = useState(false);

  const detectWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectWidth);

    if (windowWidth < 640) {
      setMenuIcon(true);
    } else {
      setMenuIcon(false);
    }

    return () => window.removeEventListener("resize", detectWidth);
  }, [windowWidth]);

  return (
    <nav className="flex justify-between py-6 px-6 sticky top-0 z-[2] bg-[#44546F] text-white">
      <Link to="/" className="text-xl ">
        &lt;Jesus Borjas /&gt;
      </Link>
      <ul className="hidden sm:flex sm:gap-5 md:gap-8 lg:gap-10 md:text-lg">
        <li className="cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li className="cursor-pointer">
          <a href="#expertise">Expertise</a>
        </li>
        <li className="cursor-pointer">
          <a href="#work">Work</a>
        </li>
        <li className="cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
        <li className="cursor-pointer bg-white text-[#2C3E5D] px-4 ">
          <a
            href="https://docs.google.com/document/d/1RLLFRV9K7DFOYccXzt544n3SsytSGb-LU4r6qsQvWR0/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      {menuIcon && (
        <AiOutlineMenu
          onClick={() => setMobileNav(!mobileNav)}
          size={30}
          className="cursor-pointer"
        />
      )}
      {mobileNav && (
        <div className="bg-black/80 fixed right-0 w-full h-screen z-10 top-0"></div>
      )}
      <div
        className={
          mobileNav
            ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          className="absolute right-7 top-10 cursor-pointer"
          size={25}
          onClick={() => setMobileNav(!mobileNav)}
        />
        <h2 className="text-2xl font-bold mx-6 mt-10">&lt;Jesus /&gt;</h2>
        <ul className="mx-6 mt-10 flex flex-col justify-evenly gap-5 text-gray-800 text-xl">
          <li>
            <a href="#home" onClick={() => setMobileNav(!mobileNav)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMobileNav(!mobileNav)}>
              About
            </a>
          </li>
          <li>
            <a href="#expertise" onClick={() => setMobileNav(!mobileNav)}>
              Expertise
            </a>
          </li>
          <li>
            <a href="#work" onClick={() => setMobileNav(!mobileNav)}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMobileNav(!mobileNav)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
