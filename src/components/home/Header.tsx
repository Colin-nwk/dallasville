import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import Navbar from "../general/Navbar";
// import PopUp from "../general/PopUp";
import TopBanner from "../general/TopBanner";
import Hero from "./Hero";
import Img from "../../../public/asset/image/header.png";
import ImgTwo from "../../../public/asset/image/about/about-hero.png";
import ImgThree from "../../../public/asset/image/projects/project-hero.png";
const Header = () => {
  return (
    <>
      {/* {" "}
      <PopUp /> */}

      <header className="bg-gradient-to-b from-black to-gray-600 relative w-full h-screen z-10 overflow-clip ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-full h-full object-cover absolute mix-blend-overlay -z-10"
        >
          <SwiperSlide className="">
            <img
              loading="eager"
              src={Img}
              alt="luxuzy house with pool"
              className="w-full h-full object-cover "
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full  ">
            <img
              loading="eager"
              src={ImgTwo}
              alt="luxuzy house with pool"
              className="w-full h-full object-cover "
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full ">
            <img
              loading="eager"
              src={ImgThree}
              alt="luxuzy house with pool"
              className="w-full h-full object-cover "
            />
          </SwiperSlide>
        </Swiper>

        <div className=" container mx-auto px-4 md:px-10 grid grid-cols-3  w-full h-full absolute top-28 md:top-14 -z-20 inset-x-0">
          <div className="border-l border-white/20 "></div>
          <div className="border-l border-white/20 "></div>
          <div className="border-l border-white/20  border-r"></div>
        </div>

        <div className="z-20 ">
          <TopBanner />
          <Navbar />
          <Hero primary={true} />
        </div>
      </header>
    </>
  );
};

export default Header;
