import React, { useState } from "react";
import Contentwrapper from "../contentWrapper/Contentwrapper";
import logo from "../assets/image.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { navBar } from "../constants/constants";
import { Link } from "react-scroll";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg text-white font-bold ">
      <Contentwrapper>
        <div className="container  mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-20 w-20" src={logo} alt="logo" />
              <span className="text-xl tracking-tight">
                Dibakar<span className="text-[#880ED4] font-extrabold">Banerjee</span>
              </span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12 ">
              {navBar.map((item, k) => (
                <li className="hover:text-[#880ED4] cursor-pointer" key={k}>
                  <Link
                    to={item.navLink}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggle}>
                {open ? <RxCross2 size={20} /> : <GiHamburgerMenu size={20} />}
              </button>
            </div>
          </div>
          {open && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden ">
              <ul>
                {navBar.map((item, k) => (
                  <li key={k} className="py-4 text-center cursor-pointer">
                    <Link
                      to={item.navLink}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Contentwrapper>
    </header>
  );
};

export default Navbar;
