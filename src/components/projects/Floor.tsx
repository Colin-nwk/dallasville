import ground from "../../../public/asset/image/hackberry/floors/ground.jpg";
import first from "../../../public/asset/image/hackberry/floors/first.jpeg";
import second from "../../../public/asset/image/hackberry/floors/second.jpg";
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
      <div className="grid md:grid-cols-8 grid-cols-1 gap-2 w-full h-full my-5 place-items-center">
        <div className="w-full h-fit md:col-span-7  ">
          <img src={first} alt="w-full h-full object-cover" />
        </div>
        <div className="w-full h-fit md:col-span-1 md:block hidden self-center ">
          <img src={firstSvg} alt="" className="w-fit h-fit object-contain" />
        </div>
      </div>
      <div className="grid md:grid-cols-8 grid-cols-1 gap-2 w-full h-full my-5 place-items-center">
        <div className="w-full h-fit md:col-span-7  ">
          <img src={second} alt="w-full h-full object-cover" />
        </div>
        <div className="w-full h-fit md:col-span-1 md:block hidden self-center ">
          <img src={secondSvg} alt="" className="w-fit h-fit object-contain" />
        </div>
      </div>
    </>
  );
};

export default Floor;
