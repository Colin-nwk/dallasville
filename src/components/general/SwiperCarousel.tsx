import { Swiper, SwiperSlide } from "swiper/react";
// import hackbery from "../../../public/asset/image/hackberry.png";
import hackberyOne from "../../../public/asset/image/hackberry/lugbe/hackberry_1.jpg";
import hackberyTwo from "../../../public/asset/image/hackberry/lugbe/hackberry_2.jpg";
import hackberyThree from "../../../public/asset/image/hackberry/lugbe/hackberry_3.jpg";
import hackberyFour from "../../../public/asset/image/hackberry/lugbe/hackberry_4.jpg";
import hackberyFive from "../../../public/asset/image/hackberry/lugbe/hackberry_5.jpg";
import { BsArrowRight } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const SwiperCarousel = () => {
  return (
    <>
      <div className="w-full h-full backdrop-blur-md overflow-y-hidden">
        <div className="flex flex-col justify-between items-start gap-4 ml-4 p-1">
          <div className="group cursor-pointer">
            <Link to="/projects">
              <h3 className="text-white text-lg md:text-2xl ">
                {/* La’Vogue Apartments{" "} */} Hackberry Apartments
                <BsArrowRight className="text-white  inline-flex group-hover:translate-x-4 duration-300 ease-out transition-all translate-x-2" />
              </h3>
            </Link>
          </div>
          <p className="text-white text-sm opacity-70 ">
            This stunning building offers 3-bedroom apartments, a master bedroom
            and two other bedrooms all en-suite.
          </p>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide className="">
            <div className="h-full w-full relative">
              <img
                src={hackberyOne}
                alt="hackberry lugbe day"
                className="object-center md:object-contain w-full h-full"
              />
              <div className="bg-black opacity-20 absolute inset-0 h-full w-full "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-full w-full relative">
              <img
                src={hackberyTwo}
                alt="hackberry lugbe day"
                className="object-center md:object-contain w-full h-full"
              />
              <div className="bg-black opacity-20 absolute inset-0 h-full w-full "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-full w-full relative">
              <img
                src={hackberyTwo}
                alt="hackberry lugbe day"
                className="object-center md:object-contain w-full h-full"
              />
              <div className="bg-black opacity-20 absolute inset-0 h-full w-full "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-full w-full relative">
              <img
                src={hackberyThree}
                alt="hackberry lugbe day"
                className="object-center md:object-contain w-full h-full"
              />
              <div className="bg-black opacity-20 absolute inset-0 h-full w-full "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-full w-full relative">
              <img
                src={hackberyFour}
                alt="hackberry lugbe day"
                className="object-center md:object-contain w-full h-full"
              />
              <div className="bg-black opacity-20 absolute inset-0 h-full w-full "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-full w-full relative">
              <img
                src={hackberyFive}
                alt="hackberry lugbe day"
                className="object-center md:object-contain w-full h-full"
              />
              <div className="bg-black opacity-20 absolute inset-0 h-full w-full "></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperCarousel;
