import React from "react";
import Contentwrapper from "../contentWrapper/Contentwrapper";
import banner from "../assets/Bannerpic1.png";
import { Typewriter } from "react-simple-typewriter";
import Resume from "../assets/Resume.pdf";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <Contentwrapper>
      <div
        id="home"
        className="flex w-full mt-6 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-5"
      >
        <div className="w-2/5 ">
          <img src={banner} className="w-964" />
        </div>
        <div className="flex flex-col  justify-center w-3/5 gap-4 max-lg:w-full max-lg:items-center">
          <p className="text-[#880ED4] font-bold max-lg:text-2xl">
            Hello I'm Dibakar
          </p>
          <h1 className="text-5xl font-bold max-lg:text-4xl">
            <Typewriter
              words={[
                "Flutter Developer",
                "React JS Developer",
                "Freelance Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              cursorColor="#880ED4"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-gray-500 max-lg:text-center">
            I'm Dibakar Banerjee from Kolkata, a frontend app and web developer passionate
            about coding. I've won 1st prize in Education Track in StatusCode 1. My toolkit includes Flutter, Firebase, HTML, CSS,
            JavaScript, React, MongoDB, Node.js and more.I enjoy bringing
            designs to life and creating seamless user experiences. Looking
            forward to collaborating on exciting projects!
          </p>
          <div className="flex gap-5">
            <Link
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="w-32 px-4 py-2 border border-darkGrey bg-[#880ED4] hover:bg-darkGrey hover:border-[#880ED4] text-sm text-center cursor-pointer"
            >
              ABOUT ME
            </Link>
            <a
              href={Resume}
              download
              className="w-32 px-4 py-2  border border-[#880ED4] hover:border hover:border-darkGrey hover:bg-[#880ED4] text-sm text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </Contentwrapper>
  );
};

export default Hero;
