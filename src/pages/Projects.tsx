import Navbar from "../components/Navbar";
import TopBanner from "../components/general/TopBanner";
import Hero from "../components/home/Hero";
import heroBg from "../../public/asset/image/projects/project-hero.png";
import Brochure from "../components/home/Brochure";
import Footer from "../components/general/Footer";
import Intro from "../components/projects/Intro";
import ProjectDetails from "../components/projects/ProjectDetails";

const Projects = () => {
  return (
    <>
      <div className="">
        <header className="bg-gradient-to-b from-black to-gray-600 relative w-full h-screen z-10 overflow-clip">
          <img
            loading="eager"
            src={heroBg}
            alt="luxuzy house with pool"
            className="w-full h-full object-cover absolute mix-blend-overlay -z-10"
          />
          <div className="container mx-auto px-4 md:px-10 w-ful w-full  -z-20 ">
            <div className=" container grid grid-cols-4  w-full h-full absolute top-28 md:top-14 -z-20 ">
              <div className="border-l border-white/20 border-r"></div>
              <div className="border-r border-white/20"></div>
              <div className="border-r border-white/20"></div>
              <div className="border-r border-white/20"></div>
            </div>
          </div>
          <div className="z-20 ">
            <TopBanner />
            <Navbar />
            <Hero />
          </div>
        </header>
        <Intro />
        <ProjectDetails />
        <Brochure />
        <Footer />
      </div>
    </>
  );
};

export default Projects;
