import React from "react";

import { FaSquareGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const navBar = [
  {
    name: "HOME",
    navLink: "home",
  },
  {
    name: "PROJECT",
    navLink: "project",
  },
  {
    name: "ABOUT ME",
    navLink: "aboutMe",
  },
  {
    name: "CONTACT ME",
    navLink: "contactMe",
  },
];

const frontendSkill = [
  
];

const backendSkill = [
  
];

const techTools = [
  
];

const projectCardInfo = [
  
];

const socials = [
  {
    icon: <FaSquareGithub />,
    link: "https://github.com/Subhrojoti",
    name: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/subhrojoti-nag-459204283/",
    name: "Linkedin",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@tubetalk007",
    name: "YouTube",
  },
];

export { frontendSkill,backendSkill, techTools, projectCardInfo, navBar, socials };
