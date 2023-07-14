import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="">
      <div className="mt-5 md:mt-20">
        <h1 className="text-white font-sangblue font-bold text-4xl md:text-6xl">
          Discover Your Dream
          <span className="block mt-4"> Home with Ease</span>
        </h1>
      </div>

      <div className="mt-10">
        <div className="flex h-14 w-56 md:w-72 cursor-pointer">
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
      <div className="md:absolute md:right-10 md:bottom-4 mt-4 md:mt-0 flex justify-center items-center">
        <div className=" w-48 h-48 md:h-64 md:w-80 bg-white"></div>
      </div>
    </div>
  );
};

export default Hero;
