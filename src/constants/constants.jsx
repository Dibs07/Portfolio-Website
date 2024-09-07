import React from "react";

import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
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
    link: "https://github.com/Dibs07",
    name: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/dibakarbanerjee-/",
    name: "Linkedin",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/dibakar_07ff/",
    name: "Instagram",
  },
];

export { frontendSkill,backendSkill, techTools, projectCardInfo, navBar, socials };
