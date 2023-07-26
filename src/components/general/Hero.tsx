import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import SwiperCarousel from "./SwiperCarousel";
type Props = {
  sideCarousel: boolean;
  headingOne: string;
  headingTwo?: string;
};
const Hero = ({
  // primary = true,
  sideCarousel,
  headingOne,
  headingTwo,
}: Props) => {
  return (
    <div className="container  mx-auto px-4 md:px-10 w-full h-full">
      <div className={`${sideCarousel ? "mt-8 md:mt-16" : "mt-20 md:mt-16"}`}>
        <h1 className="text-white font-sangblue font-bold text-3xl md:text-5xl">
          {headingOne}
          <span className="block mt-4"> {headingTwo}</span>
        </h1>
      </div>

      <div className={`${sideCarousel ? "my-5 md:mt-20" : "mt-40 md:mt-20"}`}>
        <Link
          to="/projects"
          className="flex h-14 w-full md:w-1/3   cursor-pointer"
        >
          <span className="h-full w-1 bg-white"></span>
          <span className="h-full w-full backdrop-blur-md  flex justify-center -z-10 items-center">
            <span className="text-white opacity-100 text-center z-10">
              See our Projects
            </span>
          </span>
          <span className="h-full w-20 bg-white flex justify-center items-center">
            <AiOutlineArrowRight className="text-black h-8 w-8" />
          </span>
        </Link>
      </div>
      {sideCarousel ? (
        <div className="flex-col absolute right-5 left-4 md:left-auto bottom-2 md:right-20 md:bottom-4 flex justify-center items-start gap-4 ">
          <h3 className="text-white text-sm hidden md:block">Feature Estate</h3>
          <div className="w-full h-full md:h-full md:w-96 border-l-4 border-white">
            <SwiperCarousel />
          </div>
        </div>
      ) : // <div className="flex-col md:absolute md:right-20 md:bottom-4 flex justify-center items-start gap-4 ">
      //   <h3 className="text-white text-sm hidden md:block">Feature Estate</h3>
      //   <div className="w-full h-full md:h-full md:w-96 border-l-4 border-white">
      //     <SwiperCarousel />
      //   </div>
      // </div>
      null}
      {/* </div> */}
    </div>
  );
};

export default Hero;
