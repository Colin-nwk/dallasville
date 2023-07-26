import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import Navbar from "../general/Navbar";
// import PopUp from "../general/PopUp";
import TopBanner from "../general/TopBanner";
import Hero from "../general/Hero";

import home from "../../../public/asset/image/herocarousel/home-hero.jpg";
import about from "../../../public/asset/image/herocarousel/about-hero.jpg";
import project from "../../../public/asset/image/herocarousel/project-hero.jpg";
type Props = {
  // text?: string;
  headingOne: string;
  headingTwo?: string;
  sideCarousel: boolean;
};
const Header = ({ sideCarousel, headingOne, headingTwo }: Props) => {
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
              src={home}
              alt="luxuzy house with pool"
              className="w-full h-full object-cover "
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full  ">
            <img
              loading="eager"
              src={about}
              alt="luxuzy house with pool"
              className="w-full h-full object-cover "
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full ">
            <img
              loading="eager"
              src={project}
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

          <Hero
            sideCarousel={sideCarousel}
            headingOne={headingOne}
            headingTwo={headingTwo}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
