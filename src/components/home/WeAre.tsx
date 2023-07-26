import { Link } from "react-router-dom";
// import stairs from "../../../public/asset/image/home/stairs.png";
import newInterior from "../../../public/asset/image/interior/newinterior.jpg";
import Button from "../general/Button";

const WeAre = () => {
  return (
    <section className="container  mx-auto p-4 md:p-10 w-full h-full">
      <h3 className="font-mont font-bold text-xl md:text-3xl py-10 text-black">
        Who We Are
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-around items-start gap-y-4">
          <p className="text-base leading-loose">
            Dallasville is a leading real estate company dedicated to helping
            individuals and families find their perfect homes. At Dallasville,
            we believe in the power of smart homes and connected living. Our
            smart real estate solutions integrate home automation technology,
            offering a seamless and intelligent living experience. With a focus
            on smart homes, we help you discover properties equipped with
            cutting-edge features that enhance convenience, efficiency, and
            security
          </p>
          <Link to="/about">
            <Button text="Learn More" />
          </Link>
        </div>
        <div className="relative">
          <img
            src={newInterior}
            alt="room with stairs"
            className="w-full h-full md:h-full object-cover"
          />
          <div className="backdrop-blur-sm w-full h-20 md:h-28 absolute bottom-0 right-0 left-0 p-4">
            <div className="flex justify-around items-start md:items-center gap-2 md:gap-4">
              <div className="flex flex-col items-center gap-1 md:gap-0.5">
                <span className="bg-white w-6 h-6 md:w-16 md:h-16 rounded-full font-bold flex justify-center items-center text-black md:text-lg text-sm">
                  24
                </span>
                <span className="text-xs md:text-base text-white text-center">
                  Completed Projects
                </span>
              </div>
              <div className="flex flex-col items-center  gap-1 md:gap-0.5">
                <span className="bg-white w-6 h-6 md:w-16 md:h-16 rounded-full font-bold flex justify-center items-center text-black md:text-lg text-sm">
                  10
                </span>
                <span className="text-xs md:text-base  text-white text-center">
                  Number of Estates
                </span>
              </div>
              <div className="flex flex-col justify-start  items-center  gap-1 md:gap-0.5">
                <span className="bg-white w-6 h-6 md:w-16 md:h-16 rounded-full font-bold flex  justify-center items-center text-black md:text-lg text-sm">
                  6
                </span>
                <span className="text-xs md:text-base text-white text-center">
                  Years of Operation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;
