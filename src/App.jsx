import Header from "./header/Header";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import FooterNavbar from "./footerNavbar/FooterNavbar";
import Hero from "./hero/Hero";
import Project from "./projectSection/Project";
import Skills from "./skill/Skills";

function App() {
  return (
    <>
      <div className="bg-darkGrey text-white">
        <Header />
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
