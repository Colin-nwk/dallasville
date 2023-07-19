import projects from "../../../public/asset/image/our-projects.svg";
import didi from "../../../public/asset/image/didi_1.png";
import chairs from "../../../public/asset/image/chairs.png";
import Button from "../general/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
const Projects = () => {
  return (
    <section className="container  mx-auto p-4 md:p-10 w-full h-fit">
      <div className="relative">
        <img
          src={projects}
          alt="our projects"
          className="absolute -top-36 md:top-10 left-0 object-contain "
        />
        <div className="w-36 h-96 bg-main p-6 absolute left-0 top-40 hidden md:block ">
          <div className="-rotate-90 text-white font-mont flex flex-col items-end">
            <h3 className="text-7xl tracking-wide mr-44">Our </h3>
            <h3 className="text-7xl w-auto tracking-wide mr-4">Projects</h3>
          </div>
        </div>
        <div className=" ml-10 hidden md:grid grid-cols-1 md:grid-cols-5  gap-4 justify-end items-start">
          <div className="col-span-1"></div>
          <div className="col-span-2">
            Step into a world of endless possibilities as you explore our
            extensive range of properties. From charming apartments in bustling
            city centers to serene suburban retreats, we have something for
            every lifestyle and budget.
          </div>
          <div className="col-span-2 flex flex-col gap-5 justify-end items-end">
            <p>
              Our carefully curated collection of homes encompasses a variety of
              architectural styles, sizes, and locations to cater to your unique
              preferences.
            </p>
            <a
              href=""
              className="underline text-lg flex  items-center text-black gap-3 group"
            >
              <span> view all projects</span>{" "}
              <AiOutlineArrowRight className="group-hover:translate-x-3  ease-in-out duration-300 transition-all translate-x-0" />
            </a>
          </div>
        </div>
        <div className="grid-cols-1 md:grid-cols-5 grid mt-20 gap-10">
          <div className="col-span-1"></div>
          <div className="col-span-2 mdt-0 md:mt-24">
            <img src={didi} alt="" className="w-fit h-fit object-contain" />

            <div className="flex justify-between items-center gap-4 mt-5">
              <h4 className="text-lg  font-bold">HackBerry Jahi District</h4>
              <p className="text-gray-600">COMMERCIAL</p>
            </div>
          </div>
          <div className="col-span-2 gap-4 justify-end items-center mt-0 md:mb-24">
            <img src={chairs} alt="" className="w-fit h-fit object-contain" />

            <div className="flex justify-between items-center gap-4 mt-5">
              <h4 className="text-lg  font-bold">Dewberry Terrance Gwarimpa</h4>
              <p className="text-gray-600">COMMERCIAL</p>
            </div>
            <div className="pt-5 md:pt-10 hidden md:flex justify-start md:justify-end">
              <Button text="Schedule Appointment" />
            </div>
          </div>
          {/* MOBILE */}

          <div className="  md:hidden grid grid-cols-1  gap-4 justify-end items-center">
            <div className="">
              Step into a world of endless possibilities as you explore our
              extensive range of properties. From charming apartments in
              bustling city centers to serene suburban retreats, we have
              something for every lifestyle and budget.
            </div>
            <div className="">
              <p>
                Our carefully curated collection of homes encompasses a variety
                of architectural styles, sizes, and locations to cater to your
                unique preferences.
              </p>
              <div className="mt-5">
                <Button text="Schedule Appointment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
