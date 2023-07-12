import grid from "../../../public/asset/image/grid.png";
import grid3 from "../../../public/asset/image/grid3.png";
import grid2 from "../../../public/asset/image/grid2.png";
import Button from "../general/Button";

const HomeValues = () => {
  return (
    <section className="container  mx-auto p-4 md:p-10 w-full h-fit mb-14 md:mb-0">
      <div className="flex md:hidden flex-col justify-between items-start gap-4">
        <h3 className="text-main">Our Core Values</h3>
        <h4 className="text-main text-2xl font-mont font-bold text-ellipsis mb-4">
          Your Ideal Home is Just a Few Clicks
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 justify-start items-start gap-3 overflow-x-scroll md:overflow-x-hidden">
        <div className="col-span-1 relative">
          <img
            src={grid}
            className="w-full h-full"
            alt="Unparalleled Expertise and Support"
          />
          <div className="h-12 w-12 border-2 rounded-full font-bold  flex items-center justify-center bg-transparent backdrop-blur-md border-white absolute right-2 bottom-12 text-white text-xl">
            01
          </div>
          <div className="w-full h-14 px-2 py-1 bg-gray-100 ">
            Unparalleled Expertise and Support
          </div>
        </div>
        <div className="col-span-1 relative">
          <img
            src={grid2}
            className="w-full h-full"
            alt="Intuitive Search and Seamless Experience"
          />
          <div className="h-12 w-12 border-2 rounded-full font-bold  flex items-center justify-center bg-transparent backdrop-blur-md border-white absolute right-2 bottom-12 text-white text-xl">
            02
          </div>
          <div className="w-full h-14 px-2 py-1 bg-gray-100 ">
            Intuitive Search and Seamless Experience
          </div>
        </div>
        <div className="col-span-1 relative">
          <img
            src={grid3}
            className="w-full h-full"
            alt="  A Trustworthy Partner"
          />
          <div className="h-12 w-12 border-2 rounded-full font-bold  flex items-center justify-center bg-transparent backdrop-blur-md border-white absolute right-2 bottom-12 text-white text-xl">
            03
          </div>
          <div className="w-full h-14 px-2 py-1 bg-gray-100 ">
            A Trustworthy Partner
          </div>
        </div>

        <div className="col-span-2 hidden md:inline-block h-full ml-4">
          <div className="flex flex-col justify-between items-start gap-8">
            <h3 className="text-main">Our Core Values</h3>
            <h4 className="text-main text-4xl font-mont font-bold text-ellipsis">
              Your Ideal Home is Just a Few Clicks
            </h4>
            <Button text="Schedule Appointment" />
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
