import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";

import interior from "../../../public/asset/image/hackberry/gallery/interior.jpg";
import interiorTwo from "../../../public/asset/image/hackberry/gallery/interiorTwo.jpg";
import interiorThree from "../../../public/asset/image/hackberry/gallery/interiorThree.jpg";
import interiorFour from "../../../public/asset/image/hackberry/gallery/interiorFour.jpg";
import interiorFive from "../../../public/asset/image/hackberry/gallery/interiorFive.jpg";
import interiorSix from "../../../public/asset/image/hackberry/gallery/interiorSix.jpg";
import interiorSeven from "../../../public/asset/image/hackberry/gallery/interiorSeven.jpg";
import interiorEight from "../../../public/asset/image/hackberry/gallery/interiorEight.png";
import interiorNine from "../../../public/asset/image/hackberry/gallery/interiornNine.png";
import interiorTen from "../../../public/asset/image/hackberry/gallery/interiorTen.png";
import interiorEleven from "../../../public/asset/image/hackberry/gallery/interiorEleven.png";

import { Pagination, Autoplay } from "swiper/modules";
type Props = {
  text: string;
  options?: string;
};
const Gallery = ({ text, options = "" }: Props) => {
  const [slidePerView, setSlidePerView] = useState<number>(4);

  const updateDimension = () => {
    const width = window.innerWidth;
    switch (true) {
      case width > 1280:
        setSlidePerView(5);

        break;
      case width > 1024 && width < 1280:
        setSlidePerView(4);

        break;
      case width > 768 && width < 1024:
        setSlidePerView(3);

        break;
      case width > 640 && width < 768:
        setSlidePerView(2);

        break;
      case width < 640:
        setSlidePerView(1);

        break;
      default:
        // Set a default value here if needed
        break;
    }
  };
  useEffect(() => {
    updateDimension();
  }, []);

  return (
    <>
      <h3 className={options}>{text}</h3>
      {/* <SubHeading text=" Explore the Gallery" className=" py-10" /> */}
      {/* <Heading text=" Explore the Gallery" className={options} /> */}
      <div className=" py-3 gap-4 md:gap-1 overflow-x-auto  flex justify-start items-start ">
        <Swiper
          spaceBetween={10}
          slidesPerView={slidePerView}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div className=" w-full h-56 md:w-56 flex-none">
              <img
                src={interiorTwo}
                alt="hackberry image"
                className=" w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full h-56 md:w-56 flex-none">
              <img
                src={interiorTen}
                alt="hackberry image"
                className=" w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full h-56 md:w-56 flex-none">
              <img
                src={interiorEleven}
                alt="hackberry image"
                className=" w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full h-56 md:w-56 flex-none">
              <img
                src={interiorNine}
                alt="hackberry image"
                className=" w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full h-56 md:w-56 flex-none">
              <img
                src={interiorThree}
                alt="hackberry image"
                className=" w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full h-56 md:w-56 flex-none">
              <img
                src={interiorFour}
                alt="hackberry image"
                className=" w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full h-56 md:w-56 flex-none">
              <img
                src={interior}
                alt="hackberry image"
                className=" w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full h-56 md:w-56 flex-none">
              <img
                src={interiorFive}
                alt="hackberry image"
                className=" w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full h-56 md:w-56 flex-none">
              <img
                src={interiorSix}
                alt="hackberry image"
                className=" w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full h-56 md:w-56 flex-none">
              <img
                src={interiorSeven}
                alt="hackberry image"
                className=" w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full h-56 md:w-56 flex-none">
              <img
                src={interiorEight}
                alt="hackberry image"
                className=" w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;
