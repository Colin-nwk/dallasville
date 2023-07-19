import { AiOutlineArrowRight } from "react-icons/ai";
// import HeroCarousel from "../general/HeroCarousel";
import Carousel from "../general/Carousel";

const Hero = () => {
  return (
    <div className="container  mx-auto px-4 md:px-10 w-full h-full">
      {/* <div className="grid grid-cols-1 md:grid-cols-3"> */}
      <div className="mt-10 md:mt-20">
        <h1 className="text-white font-sangblue font-bold text-3xl md:text-6xl">
          Discover Your Dream
          <span className="block mt-4"> Home with Ease</span>
        </h1>
      </div>

      <div className="mt-14 md:mt-20">
        <div className="flex h-14 w-full md:w-1/3   cursor-pointer">
          <span className="h-full w-1 bg-white"></span>
          <span className="h-full w-full bg-black opacity-50 flex justify-center -z-10 items-center">
            <span className="text-white opacity-100 text-center z-10">
              See our Projects
            </span>
          </span>
          <span className="h-full w-20 bg-white flex justify-center items-center">
            <AiOutlineArrowRight className="text-black h-8 w-8" />
          </span>
        </div>
      </div>
      <div className="flex-col md:absolute md:right-24 md:bottom-4 mt-28 sm:mt-24 md:mt-0 flex justify-center items-start gap-4">
        <h3 className="text-white text-sm">Feature Estate</h3>
        <div className="w-full h-full md:h-full md:w-96">
          {/* <HeroCarousel /> */}
          <Carousel />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
