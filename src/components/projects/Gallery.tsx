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

const Gallery = () => {
  const [slidePerView, setSlidePerView] = useState<number>(4);
  console.log(slidePerView);

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

  //   const updateDimension = () => {
  //     if (window.innerWidth > 768) {
  //       setSlidePerView(5);
  //       console.log(6);
  //     } else if (window.innerWidth > 640 && window.innerWidth < 768) {
  //       setSlidePerView(2);
  //       console.log(3);
  //     } else if (window.innerWidth < 640) {
  //       setSlidePerView(1);
  //       console.log(1);
  //     }
  //   };
  //   useEffect(() => {
  //     updateDimension();
  //   }, []);

  //   useEffect(() => {
  //     const updateDimension = () => {
  //       const width = window.innerWidth;
  //       switch (true) {
  //         case width > 1280:
  //           setSlidePerView(7);

  //           break;
  //         case width > 1024 && width < 1280:
  //           setSlidePerView(5);

  //           break;
  //         case width > 768 && width < 1024:
  //           setSlidePerView(3);

  //           break;
  //         case width > 640 && width < 768:
  //           setSlidePerView(2);

  //           break;
  //         case width < 640:
  //           setSlidePerView(1);

  //           break;
  //         default:
  //           // Set a default value here if needed
  //           break;
  //       }
  //     };

  //     window.addEventListener("resize", updateDimension);

  //     return () => {
  //       window.removeEventListener("resize", updateDimension);
  //     };
  //   }, [slidePerView]);

  return (
    <>
      <h3 className="text-left font-bold text-xl  py-10 text-black">
        Explore the Gallery
      </h3>
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
