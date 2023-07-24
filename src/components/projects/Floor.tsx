import groundplan from "../../../public/asset/image/hackberry/floors/groundfloor.png";
import firstplan from "../../../public/asset/image/hackberry/floors/firstfloor.png";
import secondfloor from "../../../public/asset/image/hackberry/floors/secondfloor.png";
import topview from "../../../public/asset/image/hackberry/floors/skyview.png";

import ground from "../../../public/asset/image/hackberry/floors/ground.jpg";
import groundSvg from "../../../public/asset/image/hackberry/floors/ground.svg";
import firstSvg from "../../../public/asset/image/hackberry/floors/first.svg";
import secondSvg from "../../../public/asset/image/hackberry/floors/second.svg";

const Floor = () => {
  return (
    <>
      <div className="grid md:grid-cols-8 grid-cols-1 gap-2 w-full h-full my-5 place-items-center">
        <div className="w-full h-fit md:col-span-7 ">
          <img src={ground} alt="w-full h-full" />
        </div>
        <div className="w-full h-full md:col-span-1 md:block hidden">
          <img src={groundSvg} alt="" className="w-fit h-fit" />
        </div>
      </div>
      <div className="grid md:grid-cols-8 grid-cols-1 w-full h-full my-10 justify-start items-center">
        <div className="w-full h-full md:col-span-1 md:block hidden">
          <img src={groundSvg} alt="" className="w-fit h-fit" />
        </div>
        <div className="w-full h-full md:col-span-7  justify-center items-center">
          <img src={groundplan} alt="" className="w-fit h-fit object-center" />
        </div>
      </div>
      <div className="grid md:grid-cols-8 grid-cols-1 w-full h-full my-10 justify-start items-center">
        <div className="w-full h-full md:col-span-7 justify-center items-center">
          <img src={firstplan} alt="" className="w-fit h-fit object-center" />
        </div>
        <div className="w-full h-full md:col-span-1 md:block hidden">
          <img src={firstSvg} alt="" className="w-fit h-fit" />
        </div>
      </div>
      <div className="grid md:grid-cols-8 grid-cols-1 w-full h-full my-10 justify-start items-center">
        <div className="w-full h-full md:col-span-1 md:block hidden">
          <img src={secondSvg} alt="" className="w-fit h-fit" />
        </div>
        <div className="w-full h-full md:col-span-7  justify-center items-center">
          <img
            src={secondfloor}
            alt=""
            className="w-fit h-fit object-contain"
          />
        </div>
      </div>
      <div className="flex w-full h-full my-5 justify-center items-center">
        <img src={topview} alt="" className="w-fit h-fit object-contain" />
      </div>
      {/* <div className="grid md:grid-cols-8 grid-cols-1 gap-2 w-full h-full my-5 place-items-center">
        <div className="w-full h-fit md:col-span-7 order-2 ">
          <img src={first} alt="w-full h-full object-cover" />
        </div>
        <div className="w-full h-fit md:col-span-1 md:block hidden self-center  order-1">
          <img src={firstSvg} alt="" className="w-fit h-fit object-contain" />
        </div>
      </div> */}
      {/* <div className="grid md:grid-cols-8 grid-cols-1 gap-2 w-full h-full my-5 place-items-center">
        <div className="w-full h-fit md:col-span-7  ">
          <img src={second} alt="w-full h-full object-cover" />
        </div>
        <div className="w-full h-fit md:col-span-1 md:block hidden self-center ">
          <img src={secondSvg} alt="" className="w-fit h-fit object-contain" />
        </div>
      </div> */}
    </>
  );
};

export default Floor;
