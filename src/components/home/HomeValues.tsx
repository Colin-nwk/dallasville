// import grid from "../../../public/asset/image/grid.png";
// import grid3 from "../../../public/asset/image/grid3.png";
// import grid2 from "../../../public/asset/image/grid2.png";
import Button from "../general/Button";
import ScheduleAppointment from "../general/ScheduleAppointment";

import e from "../../../public/asset/image/home/grid/e.png";
import b from "../../../public/asset/image/home/grid/b.png";
import c from "../../../public/asset/image/home/grid/c.png";

// import newInteriorSix from "../../../public/asset/image/interior/newinteriorSix.jpg";
// import newInteriorEleven from "../../../public/asset/image/interior/newinteriorEleven.jpg";
// import newInteriorEight from "../../../public/asset/image/interior/newinteriorEight.jpg";

const HomeValues = () => {
  return (
    <section className="container  mx-auto p-4 md:p-10 w-full h-fit mb-14 md:mb-0">
      <div className="flex md:hidden flex-col justify-between items-start gap-4">
        <h3 className="text-black">Our Core Values</h3>
        <h4 className="text-black text-2xl font-bold text-ellipsis mb-2">
          Your Ideal Home is Just a Few Clicks
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 justify-start items-start gap-3">
        {/* desktop */}
        <div className="col-span-4 hidden md:flex justify-between items-center gap-4 overflow-x-scroll md:overflow-x-hidden">
          <div className="w-[80%] md:w-1/3  relative">
            <img
              src={e}
              className="w-full h-full object-cover"
              alt="Unparalleled Expertise and Support"
            />
            <div className="h-12 w-12 border-2 rounded-full font-bold  flex items-center justify-center bg-transparent backdrop-blur-md border-white absolute right-2 bottom-12 text-white text-xl">
              01
            </div>
            <h3 className="w-full h-14 px-2 py-1 bg-gray-100 ">
              Unparalleled Expertise and Support
            </h3>
          </div>
          <div className="w-[80%] md:w-1/3 relative">
            <img
              src={b}
              className="w-full h-full object-cover"
              alt="Intuitive Search and Seamless Experience"
            />
            <div className="h-12 w-12 border-2 rounded-full font-bold  flex items-center justify-center bg-transparent backdrop-blur-md border-white absolute right-2 bottom-12 text-white text-xl">
              02
            </div>
            <h3 className="w-full h-14 px-2 py-1 bg-gray-100 ">
              Intuitive Search and Seamless Experience
            </h3>
          </div>
          <div className="w-[80%] md:w-1/3 relative">
            <img
              src={c}
              className="w-full h-full object-cover"
              alt="  A Trustworthy Partner"
            />
            <div className="h-12 w-12 border-2 rounded-full font-bold  flex items-center justify-center bg-transparent backdrop-blur-md border-white absolute right-2 bottom-12 text-white text-xl">
              03
            </div>
            <h3 className="w-full h-14 px-2 py-1 bg-gray-100 ">
              A Trustworthy Partner
            </h3>
          </div>
        </div>
        {/* mobile */}
        <div className="md:col-span-3 md:hidden flex justify-between items-center gap-4 overflow-x-scroll ">
          <div className="min-w-[80%]  relative">
            <img
              src={e}
              className="w-full h-full"
              alt="Unparalleled Expertise and Support"
            />
            <div className="h-12 w-12 border-2 rounded-full font-bold  flex items-center justify-center bg-transparent backdrop-blur-md border-white absolute right-2 bottom-12 text-white text-xl">
              01
            </div>
            <h3 className="w-full h-14 px-2 py-1 bg-gray-100 ">
              Unparalleled Expertise and Support
            </h3>
          </div>
          <div className="min-w-[80%]  relative">
            <img
              src={b}
              className="w-full h-full"
              alt="Intuitive Search and Seamless Experience"
            />
            <div className="h-12 w-12 border-2 rounded-full font-bold  flex items-center justify-center bg-transparent backdrop-blur-md border-white absolute right-2 bottom-12 text-white text-xl">
              02
            </div>
            <h3 className="w-full h-14 px-2 py-1 bg-gray-100 ">
              Intuitive Search and Seamless Experience
            </h3>
          </div>
          <div className="min-w-[80%] relative">
            <img
              src={c}
              className="w-full h-full"
              alt="  A Trustworthy Partner"
            />
            <div className="h-12 w-12 border-2 rounded-full font-bold  flex items-center justify-center bg-transparent backdrop-blur-md border-white absolute right-2 bottom-12 text-white text-xl">
              03
            </div>
            <h3 className="w-full h-14 px-2 py-1 bg-gray-100 ">
              A Trustworthy Partner
            </h3>
          </div>
        </div>

        <div className="col-span-2 hidden md:inline-block h-full ml-4">
          <div className="flex flex-col justify-between items-start gap-8">
            <h3 className="text-black">Our Core Values</h3>
            <h4 className="text-black text-4xl font-mont font-bold text-ellipsis">
              Your Ideal Home is Just a Few Clicks
            </h4>
            {/* <Button text="Schedule Appointment" /> */}
            <ScheduleAppointment type="icon" />
          </div>
        </div>
      </div>
      <div className="mt-4 md:hidden">
        <Button text="Schedule Appointment" />
      </div>
    </section>
  );
};

export default HomeValues;
