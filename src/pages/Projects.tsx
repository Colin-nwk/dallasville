import Navbar from "../components/general/Navbar";
import TopBanner from "../components/general/TopBanner";
// import heroBg from "../../public/asset/image/projects/project-hero.png";
import Brochure from "../components/general/Brochure";
import Footer from "../components/general/Footer";
import Intro from "../components/projects/Intro";
import ProjectDetails from "../components/projects/ProjectDetails";
import Herodesk from "../../public/asset/image/hackberry/herodesk.png";
// import Heromobile from "../../public/asset/image/hackberry/heromobile.png";

const Projects = () => {
  return (
    <>
      <div className="">
        <header className="bg-gradient-to-b from-black to-gray-600 relative w-full h-screen z-10 overflow-clip">
          <img
            loading="eager"
            src={Herodesk}
            alt="luxuzy house with pool"
            className="block w-full h-full object-cover absolute mix-blend-overlay -z-10"
          />
          {/* <img
            loading="eager"
            src={Heromobile}
            alt=" luxuzy house with pool"
            className=" block md:hidden w-full h-full object-cover absolute mix-blend-overlay -z-10"
          /> */}
          <div className=" container mx-auto px-4 md:px-10 grid grid-cols-3  w-full h-full absolute top-28 md:top-14 -z-20 inset-x-0">
            <div className="border-l border-white/20 "></div>
            <div className="border-l border-white/20 "></div>
            <div className="border-l border-white/20  border-r"></div>
          </div>
          <div className="z-20 ">
            <TopBanner />
            <Navbar />

            {/* <div className="container  mx-auto px-4 md:px-10 w-full h-full bg-blue-900 ">
              <div className=" flex items-center justify-center">
                <div className="bg-red-500 p-4 w-full"></div>
                <div className="bg-yellow-500 p-4 w-full"></div>
              </div>
            </div> */}
            {/* <Hero primary={false} /> */}
          </div>
        </header>
        <Intro />
        <ProjectDetails />
        <Brochure bg="bg-[#FFF1F8]" />
        <Footer />
      </div>
    </>
  );
};

export default Projects;
