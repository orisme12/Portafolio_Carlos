import Logo from "../assets/logo.svg";
import { Link, animate as scroll } from "react-scroll";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsLightbulb, BsWrenchAdjustableCircle } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

const links = [
  {
    id: "about",
    text: "About me",
    icon: <AiOutlineInfoCircle />,
  },

  {
    id: "work",
    text: "My Work",
    icon: <BsWrenchAdjustableCircle />,
  },
  {
    id: "contact",
    text: "Get in touch",
    icon: <IoIosContact />,
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      // console.log(event.deltaY);

      if (event.deltaY > 0) {
        if (!open) {
          setScrollingUp(false);
        }
      } else {
        setScrollingUp(true);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [open]);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav
        className={` sticky w-full z-10 top-0 left-0 right-0 md:flex items-center justify-center gap-36 h-14   ${
          scrollingUp
            ? " md:backdrop-blur-[2px] translate-y-0 md:translate-y-0 md:shadow-lg transition duration-800 ease-in-out"
            : "-translate-y-[100%] md:-translate-y-0 "
        } `}
      >
        
        {/* Dispositibos moviles */}

        <div className=" top-0 right-0 left-0 bottom-0  md:hidden ">
        
          <ul
            className={`${
              open
                ? "translate-y-0 fixed top-0 transition-opacity duration-300 opacity-100"
                : "translate-y-full opacity-0 hidden"
            } transform md:hidden right-0 py-5 h-[100vh] rounded-l-[10px] bg-[#142845] z-20 w-[300px] transition-transform duration-300 ease-in-out`}
          >
            
            <div
              className="absolute right-3 top-2 mb-2 cursor-pointer hover:bg-[#00acb5] shadow-md-[#00ADB5] text-white hover:rounded-[50%] hover:shadow-[#00ADB5] hover:rotate-3 p-2"
              onClick={toggleMenu}
            >
              <AiOutlineClose />
            </div>

            {links.map(({ id, text, icon }, index) => (
              <Link
                key={index}
                to={id}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-48}
                className="mt-5 px-6 py-2 text-white hover:bg-[#00ADB5]  transition-colors flex cursor-pointer items-center gap-2"
                onClick={closeMenu}
              >
                <div>{icon}</div>
                {text}
              </Link>
            ))}
          </ul>

          <button
            className="flex absolute top-4 right-3 md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            {open ? (
              <AiOutlineClose className=" hidden" />
            ) : (
              <AiOutlineMenu className="text-[25px] text-white " />
            )}
          </button>
        </div>

        {/* Menú de navegación para pantallas más grandes */}
        <ul
          className={`justify-start items-center gap-20 font-bold md:flex transition-opacity duration-300 ${
            scrollingUp
              ? "hidden  md:text-opacity-100 "
              : " md:opacity-0 pointer-events-none"
          }`}
        >
          <Link to="/" className="hidden md:flex md:absolute left-0 cursor-pointer"><img src={Logo} alt="LogoCarlos" className=" w-20 " /></Link>
          {links.map(({ id, text }, index) => (
            <Link
              key={index}
              to={id}
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
              offset={-48}
              className="cambioColor text-white font-customTwo hover:border-b hover:border-b-white hover:text-[#00ADB5] cursor-pointer transition duration-600 border-b-0"
            >
              {text}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
