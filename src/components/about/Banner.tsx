import banner from "../../../public/asset/image/about/banner.png";
import bannerTwo from "../../../public/asset/image/about/banner2.png";
import wifi from "../../../public/asset/image/about/wifi-square.svg";
import home from "../../../public/asset/image/about/home-wifi.svg";
import lock from "../../../public/asset/image/about/lock.svg";
import alarm from "../../../public/asset/image/about/alarm.svg";
import music from "../../../public/asset/image/about/music-play.svg";
import Button from "../general/Button";
const Banner = () => {
  return (
    <>
      {" "}
      <section className="container  mx-auto px-4 md:px-10 w-full py-4 md:py-10">
        <div className=" relative">
          <img
            loading="eager"
            src={banner}
            alt="luxuzy house"
            className="hidden md:block w-full h-fit object-cover mix-blend-overlay -z-10"
          />
          <img
            loading="eager"
            src={bannerTwo}
            alt="luxuzy house"
            className="block md:hidden w-full h-fit object-cover mix-blend-overlay -z-10"
          />
          <div className="z-30 absolute inset-0 flex flex-col justify-center items-center gap-4">
            <h3 className="text-center text-white font-bold text-xl md:text-3xl py-5 mt-5 ">
              Explore your smart home choices with us
            </h3>
            <div className="flex justify-center items-center  flex-wrap gap-4">
              <div className="flex flex-col justify-between items-center">
                <img
                  src={wifi}
                  alt=" Advanced Home Network"
                  className="h-10 w-10 p-2 rounded-full bg-transparent backdrop-blur ring-[1px] ring-white mb-2"
                />
                <span className="text-xs text-white ">
                  Advanced Home Network
                </span>
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
            <div className=" mt-10 flex justify-center items-center">
              <Button text="Schedule Appointment" />
            </div>
          </div>
          <div className="absolute bg-gradient-to-b from-black to-gray-600 w-full h-full   -z-20 top-0 left-0 transparent"></div>
        </div>
      </section>
    </>
  );
};

export default Banner;
