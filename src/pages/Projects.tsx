import Navbar from "../components/general/Navbar";
import TopBanner from "../components/general/TopBanner";
// import heroBg from "../../public/asset/image/projects/project-hero.png";
import Brochure from "../components/general/Brochure";
import Footer from "../components/general/Footer";
import Intro from "../components/projects/Intro";
import ProjectDetails from "../components/projects/ProjectDetails";
import Herodesk from "../../public/asset/image/hackberry/herodesk.png";
import name from "../../public/asset/image/hackberry/icons/hackberry.svg";
import car from "../../public/asset/image/hackberry/icons/car.svg";
import flash from "../../public/asset/image/hackberry/icons/flash.svg";
import bed from "../../public/asset/image/hackberry/icons/bed.svg";
import lock from "../../public/asset/image/hackberry/icons/lock.svg";
import wifi from "../../public/asset/image/hackberry/icons/wifi.svg";
import Heromobile from "../../public/asset/image/hackberry/heromobile.png";

const Projects = () => {
  return (
    <>
      <div className="">
        <header className="bg-gradient-to-b from-black to-gray-600 relative w-full h-screen z-10 overflow-clip">
          <img
            loading="eager"
            src={Herodesk}
            alt="luxuzy house with pool"
            className="hidden md:block w-full h-full object-center absolute mix-blend-overlay -z-10 mb-20 overflox-x-hidden"
          />
          <img
            loading="eager"
            src={Heromobile}
            alt=" luxuzy house with pool"
            className=" block md:hidden w-full h-full object-cover absolute mix-blend-overlay -z-10"
          />
          <div className=" container mx-auto px-4 md:px-10 grid grid-cols-3  w-full h-full absolute top-28 md:top-14 -z-20 inset-x-0">
            <div className="border-l border-white/20 "></div>
            <div className="border-l border-white/20 "></div>
            <div className="border-l border-white/20  border-r"></div>
          </div>
          <div className="z-20 ">
            <TopBanner />
            <Navbar />

            {/* <div className="container  mx-auto px-4 md:px-10 w-full h-full">
              <div className="flex flex-col justify-center items-center gap-4 w-full h-full  md:mt-28 sm:mt-14 mt-10">
                <div className="  flex flex-col justify-center items-center">
                  <p className="text-2xl font-semibold my-2 md:my-5 text-white">
                    Projects
                  </p>
                  <img
                    src={name}
                    alt="hackberry"
                    className="w-full md:h-28 h-20 "
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  backdrop-blur-sm px-14 py-10 md:py-4 w-full rounded-xl justify-between items-center gap-4 flex-wrap">
                  <div className="flex flex-col gap-3 justify-start md:items-center items-start  ">
                    <span className="rounded-full  backdrop-blur-xl border border-white/30 p-2">
                      <img
                        src={bed}
                        alt="hackberry estate rooms"
                        className="w-6 h-6 text-white "
                      />
                    </span>
                    <p className="text-white text-ellipsis">3 Bedrooms</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-start md:items-center items-start  ">
                    <span className="rounded-full backdrop-blur-xl border border-white/30 p-2">
                      <img
                        src={car}
                        alt="hackberry estate rooms"
                        className="w-6 h-6 text-white "
                      />
                    </span>
                    <p className="text-white text-ellipsis">Car Parking</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-start md:items-center items-start  ">
                    <span className="rounded-full backdrop-blur-xl border border-white/30 p-2">
                      <img
                        src={wifi}
                        alt="hackberry estate rooms"
                        className="w-6 h-6 text-white "
                      />
                    </span>
                    <p className="text-white text-ellipsis">Smart Automation</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-start md:items-center items-start  ">
                    <span className="rounded-full backdrop-blur-xl border border-white/30 p-2">
                      <img
                        src={flash}
                        alt="hackberry estate rooms"
                        className="w-6 h-6 text-white "
                      />
                    </span>
                    <p className="text-white text-ellipsis">
                      Uninterrupted Power supply
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 justify-start md:items-center items-start  ">
                    <span className="rounded-full backdrop-blur-xl border border-white/30 p-2">
                      <img
                        src={lock}
                        alt="hackberry estate rooms"
                        className="w-6 h-6 text-white "
                      />
                    </span>
                    <p className="text-white text-ellipsis">
                      Security & Surveillance
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* new grid */}
            <div className="container  mx-auto px-4 md:px-10 w-full h-full">
              <div className="flex flex-col justify-center items-center gap-4 w-full h-full  md:mt-28 sm:mt-14 mt-10">
                <div className="  flex flex-col justify-center items-center">
                  <p className="text-2xl font-semibold my-2 md:my-5 text-white">
                    Projects
                  </p>
                  <img
                    src={name}
                    alt="hackberry"
                    className="w-full md:h-28 h-20 "
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  backdrop-blur-sm px-14 py-10 md:py-4 w-full rounded-xl justify-between items-center gap-4 flex-wrap">
                  <div className="flex flex-col gap-3 justify-start  w-full h-full items-center  ">
                    <span className="rounded-full  backdrop-blur-xl border border-white/30 p-2">
                      <img
                        src={bed}
                        alt="hackberry estate rooms"
                        className="w-6 h-6 text-white "
                      />
                    </span>
                    <p className="text-white text-center text-sm md:text-base text-ellipsis">
                      3 Bedrooms
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 justify-start items-center  w-full h-full  ">
                    <span className="rounded-full backdrop-blur-xl border border-white/30 p-2">
                      <img
                        src={car}
                        alt="hackberry estate rooms"
                        className="w-6 h-6 text-white "
                      />
                    </span>
                    <p className="text-white text-center text-sm md:text-base text-ellipsis">
                      Car Parking
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 justify-start items-center  w-full h-full  ">
                    <span className="rounded-full backdrop-blur-xl border border-white/30 p-2">
                      <img
                        src={wifi}
                        alt="hackberry estate rooms"
                        className="w-6 h-6 text-white "
                      />
                    </span>
                    <p className="text-white text-center text-sm md:text-base text-ellipsis">
                      Smart Automation
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 justify-start items-center  w-full h-full  ">
                    <span className="rounded-full backdrop-blur-xl border border-white/30 p-2">
                      <img
                        src={flash}
                        alt="hackberry estate rooms"
                        className="w-6 h-6 text-white "
                      />
                    </span>
                    <p className="text-white text-center text-sm md:text-base text-ellipsis">
                      Uninterrupted Power supply
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 justify-start items-center  w-full h-full ">
                    <span className="rounded-full backdrop-blur-xl border border-white/30 p-2">
                      <img
                        src={lock}
                        alt="hackberry estate rooms"
                        className="w-6 h-6 text-white "
                      />
                    </span>
                    <p className="text-white text-center text-sm md:text-base text-ellipsis">
                      Security & Surveillance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end new  */}
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
