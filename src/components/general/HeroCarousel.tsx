import hackbery from "../../../public/asset/image/hackberry.png";
import { BsArrowRight } from "react-icons/bs";

const HeroCarousel = () => {
  return (
    <>
      <div className="w-full h-full backdrop-blur-md border-l-4 border-white overflow-y-hidden">
        <div className="flex flex-col justify-between items-start gap-4 ml-4 p-1">
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-center items-center gap-2 p-1">
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <div className="h-2 w-2 rounded-full bg-white opacity-50"></div>
              <div className="h-2 w-2 rounded-full bg-white opacity-50"></div>
            </div>
            <div className="group cursor-pointer">
              <h3 className="text-white text-2xl ">
                La’Vogue Apartments{" "}
                <BsArrowRight className="text-white  inline-flex group-hover:translate-x-2 duration-300 ease-out transition-all translate-x-0" />
              </h3>
            </div>
            <p className="text-white text-sm opacity-70 ">
              This stunning building offers 3-bedroom apartments, a master
              bedroom and two other bedrooms all en-suite.
            </p>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            src={hackbery}
            alt="hackberry projects"
            className="object-center md:object-contain w-full h-full md:w-fit md:h-fit"
          />
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
