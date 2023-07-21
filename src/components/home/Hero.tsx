import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";

import SwiperCarousel from "../general/SwiperCarousel";
type Props = {
  primary: boolean;
};
const Hero = ({ primary = true }: Props) => {
  return (
    <div className="container  mx-auto px-4 md:px-10 w-full h-full">
      {/* <div className="grid grid-cols-1 md:grid-cols-3"> */}
      <div className="mt-10">
        <h1 className="text-white font-sangblue font-bold text-3xl md:text-5xl">
          Discover Your Dream
          <span className="block mt-4"> Home with Ease</span>
        </h1>
      </div>

      <div className="my-5 md:mt-20">
        <div className="flex h-14 w-full md:w-1/3   cursor-pointer">
          <span className="h-full w-1 bg-white"></span>
          <span className="h-full w-full backdrop-blur-md  flex justify-center -z-10 items-center">
            <span className="text-white opacity-100 text-center z-10">
              See our Projects
            </span>
          </span>
          <span className="h-full w-20 bg-white flex justify-center items-center">
            {primary ? (
              <AiOutlineArrowRight className="text-black h-8 w-8" />
            ) : (
              <AiOutlineArrowDown className="text-black h-8 w-8" />
            )}
          </span>
        </div>
      </div>
      <div className="flex-col md:absolute md:right-20 md:bottom-4 flex justify-center items-start gap-4 ">
        <h3 className="text-white text-sm hidden md:block">Feature Estate</h3>
        <div className="w-full h-full md:h-full md:w-96 border-l-4 border-white">
          {/* <HeroCarousel /> */}
          {/* <Carousel /> */}
          <SwiperCarousel />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
