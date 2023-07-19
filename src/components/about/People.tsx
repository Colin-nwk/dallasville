import people from "../../../public/asset/image/about/people.svg";
import sitting from "../../../public/asset/image/about/sitting.png";
import AboutCarousel from "./AboutCarousel";
// import {
//   IoMdArrowDroprightCircle,
//   IoMdArrowDropleftCircle,
// } from "react-icons/io";
const People = () => {
  return (
    <>
      <section className="container  mx-auto px-4 md:px-10 w-full py-4 md:py-10 relative">
        {/* <div className="flex justify-start md:justify-between items-center gap-4"> */}
        <h3 className="text-left font-bold text-xl md:text-3xl py-5 text-main ">
          The People
        </h3>
        <img
          src={people}
          alt="The People"
          className="md:block hidden object-contain absolute right-0 w-72 h-72 -top-10 "
        />
        {/* </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-full md:max-h-[500px] overflow-hidden -z-10">
          <div className=" h-fit w-fit -z-50">
            <img src={sitting} alt="The People" className="object-contain   " />
          </div>
          <div className=" flex items-center justify-center w-full bg-white ">
            <AboutCarousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
