import { Swiper, SwiperSlide } from "swiper/react";
import hackbery from "../../../public/asset/image/hackberry.png";
import { BsArrowRight } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const SwiperCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide className="">
          <div className="w-full h-full backdrop-blur-md overflow-y-hidden">
            <div className="flex flex-col justify-between items-start gap-4 ml-4 p-1">
              <div className="group cursor-pointer">
                <h3 className="text-white text-2xl ">
                  {/* La’Vogue Apartments{" "} */} Hackberry Apartments
                  <BsArrowRight className="text-white  inline-flex group-hover:translate-x-2 duration-300 ease-out transition-all translate-x-0" />
                </h3>
              </div>
              <p className="text-white text-sm opacity-70 ">
                This stunning building offers 3-bedroom apartments, a master
                bedroom and two other bedrooms all en-suite.
              </p>
            </div>
            <div className="h-full w-full">
              <img
                src={hackbery}
                alt="hackberry projects"
                className="object-center md:object-contain w-full h-full"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full h-full backdrop-blur-md  overflow-y-hidden">
            <div className="flex flex-col justify-between items-start gap-4 ml-4 p-1">
              <div className="group cursor-pointer">
                <h3 className="text-white text-2xl ">
                  La’Vogue Apartments
                  <BsArrowRight className="text-white  inline-flex group-hover:translate-x-2 duration-300 ease-out transition-all translate-x-0" />
                </h3>
              </div>
              <p className="text-white text-sm opacity-70 ">
                This stunning building offers 3-bedroom apartments, a master
                bedroom and two other bedrooms all en-suite.
              </p>
            </div>
            <div className="h-full w-full">
              <img
                src={hackbery}
                alt="hackberry projects"
                className="object-center md:object-contain w-full h-full"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
