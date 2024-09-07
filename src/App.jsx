import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import FooterNavbar from "./footerNavbar/FooterNavbar";
import Hero from "./hero/Hero";
import Project from "./projectSection/Project";
import Skills from "./skill/Skills";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <div className="bg-darkGrey text-white">
        <Navbar />
        <Hero />
        <Skills />
        <div className="relative">
          <Project />
          <div className="absolute bg-[#181818] h-[32rem] w-full z-0 top-[84rem] max-lg:hidden"></div>
          <Contact />
        </div>
        <FooterNavbar />
        <Footer />
      </div>
    </>
  );
}

export default App;
