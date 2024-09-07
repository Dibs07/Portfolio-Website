import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";
import Contentwrapper from "../contentWrapper/Contentwrapper";

const FooterNavbar = () => {
  return (
    <Contentwrapper>
      <section className="mt-12 mb-7 flex items-center justify-center gap-7 text-xs font-bold uppercase">
        <Link
          className=" border border-darkGrey bg-[#880ED4] px-7 py-3 flex items-center justify-center gap-2 cursor-pointer  hover:bg-darkGrey hover:border-[#880ED4] duration-200"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Go to Top <FaArrowUp />
        </Link>
      </section>
    </Contentwrapper>
  );
};

export default FooterNavbar;
