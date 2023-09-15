import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
    <nav className="flex border justify-between p-4 px-6">
      <h1 className="text-xl ">&lt;Jesus Borjas /&gt;</h1>
      <ul className="hidden sm:flex sm:gap-5 md:gap-8 lg:gap-14">
        <li>Home</li>
        <li>About</li>
        <li>Expertise</li>
        <li>Work</li>
        <li>Contact</li>
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
        <ul className="mx-6 mt-10 flex flex-col justify-evenly gap-5 text-gray-800">
          <li className="text-xl">Home</li>
          <li className="text-xl">About</li>
          <li className="text-xl">Expertise</li>
          <li className="text-xl">Work</li>
          <li className="text-xl">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
