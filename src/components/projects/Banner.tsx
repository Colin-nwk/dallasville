// import banner from "../../../public/asset/image/about/banner.png";
import banner from "../../../public/asset/image/interior/newinteriorTwelve.jpg";
// import bannerTwo from "../../../public/asset/image/about/banner2.png";
import wifi from "../../../public/asset/image/about/wifi-square.svg";
import home from "../../../public/asset/image/about/home-wifi.svg";
import lock from "../../../public/asset/image/about/lock.svg";
import alarm from "../../../public/asset/image/about/alarm.svg";
import music from "../../../public/asset/image/about/music-play.svg";

const Banner = () => {
  return (
    <>
      <div className=" relative">
        <img
          loading="eager"
          src={banner}
          alt="luxuzy house"
          className=" w-full h-80 object-cover mix-blend-overlay -z-10"
        />
        {/* <img
          loading="eager"
          src={bannerTwo}
          alt="luxuzy house"
          className="block lg:hidden w-full h-fit object-cover mix-blend-overlay -z-10"
        /> */}
        <div className="z-30 absolute inset-0 flex flex-col justify-center items-center gap-4">
          <h3 className="text-center text-white font-bold text-xl md:text-3xl py-5 xl:mt-5 ">
            Estate Amenities
          </h3>
          <div className="flex justify-center items-center  flex-wrap gap-4">
            <div className="flex flex-col justify-between items-center">
              <img
                src={wifi}
                alt=" Advanced Home Network"
                className="h-10 w-10 p-2 rounded-full bg-transparent backdrop-blur ring-[1px] ring-white mb-2"
              />
              <span className="text-xs text-white ">Advanced Home Network</span>
            </div>
            <div className="flex flex-col justify-between items-center">
              <img
                src={home}
                alt="Remote Access"
                className="h-10 w-10 p-2 rounded-full bg-transparent backdrop-blur ring-[1px] ring-white mb-2"
              />
              <span className="text-xs text-white ">Remote Access</span>
            </div>
            <div className="flex flex-col justify-between items-center">
              <img
                src={lock}
                alt="Advanced Security"
                className="h-10 w-10 p-2 rounded-full bg-transparent backdrop-blur ring-[1px] ring-white mb-2"
              />
              <span className="text-xs text-white ">Advanced Security</span>
            </div>
            <div className="flex flex-col justify-between items-center">
              <img
                src={alarm}
                alt="Lightening Control"
                className="h-10 w-10 p-2 rounded-full bg-transparent backdrop-blur ring-[1px] ring-white mb-2"
              />
              <span className="text-xs text-white ">Lightening Control</span>
            </div>
            <div className="flex flex-col justify-between items-center">
              <img
                src={music}
                alt="Distributed Audio"
                className="h-10 w-10 p-2 rounded-full bg-transparent backdrop-blur ring-[1px] ring-white mb-2"
              />
              <span className="text-xs text-white ">Distributed Audio</span>
            </div>
          </div>
        </div>
        <div className="absolute bg-gradient-to-b from-black to-gray-600 w-full h-full   -z-20 top-0 left-0 transparent"></div>
      </div>
    </>
  );
};

export default Banner;
