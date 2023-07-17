import Navbar from "../components/Navbar";
import TopBanner from "../components/general/TopBanner";
import Hero from "../components/home/Hero";
import heroBg from "../../public/asset/image/projects/project-hero.png";

const Projects = () => {
  return (
    <>
      <div className="">
        <header className="bg-gradient-to-b from-black to-gray-600 relative w-full h-screen z-10">
          <img
            loading="eager"
            src={heroBg}
            alt="luxuzy house with pool"
            className="w-full h-full object-cover absolute mix-blend-overlay -z-10"
          />
          <div className="z-20 ">
            <TopBanner />
            <Navbar />
            <Hero />
          </div>
        </header>
      </div>
    </>
  );
};

export default Projects;
