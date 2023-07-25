import Navbar from "../components/general/Navbar";
import TopBanner from "../components/general/TopBanner";
// import heroBg from "../../public/asset/image/projects/project-hero.png";
import Brochure from "../components/general/Brochure";
import Footer from "../components/general/Footer";

import Herodesk from "../../public/asset/image/hackberry/herodesk.png";
// import name from "../../public/asset/image/hackberry/icons/hackberry.svg";

import Heromobile from "../../public/asset/image/hackberry/heromobile.png";

const Flippers = () => {
  return (
    <>
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

          <div className="container  mx-auto px-4 md:px-10 w-full h-full">
            <div className="flex flex-col justify-center items-center gap-4 w-full h-full  md:mt-28 sm:mt-14 mt-10">
              <div className="  flex flex-col justify-center items-center mt-20">
                <h2 className=" text-2xl sm:text-4xl md:text-6xl font-semibold  text-white text-ellipsis">
                  Dallasville Real Estate Flippers (REP)
                </h2>
              </div>
            </div>
          </div>
          {/* end new  */}
        </div>
      </header>

      <Brochure bg="bg-[#FFF1F8]" />
      <Footer />
    </>
  );
};

export default Flippers;
