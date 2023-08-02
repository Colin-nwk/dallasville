import projects from "../../../public/asset/image/our-projects.svg";
// import didi from "../../../public/asset/image/didi_1.png";
// import chairs from "../../../public/asset/image/chairs.png";

// import slideA from "../../../public/asset/image/home/slide/slide.png";
// import slideATwo from "../../../public/asset/image/home/slide/slideOne.png";
// import slideAThree from "../../../public/asset/image/home/slide/slideTwo.png";

// import slideB from "../../../public/asset/image/home/slidetwo/slide_b.png";
// import slideBTwo from "../../../public/asset/image/home/slidetwo/slide_bTwo.png";
// import slideBThree from "../../../public/asset/image/home/slidetwo/slide_bThree.png";
// import Button from "../general/Button";

import slideA from "../../../public/asset/image/home/sliders/slide.png";
import slideATwo from "../../../public/asset/image/home/sliders/slideTwo.png";
import slideAThree from "../../../public/asset/image/home/sliders/slideThree.png";

import slideB from "../../../public/asset/image/home/sliders/slideFour.png";
import slideBTwo from "../../../public/asset/image/home/sliders/slideFive.png";
import slideBThree from "../../../public/asset/image/home/sliders/slideSix.png";

// import slideA from "../../../public/asset/image/interior/newinterior.jpg";
// import slideATwo from "../../../public/asset/image/interior/newinteriorTwo.jpg";
// import slideAThree from "../../../public/asset/image/interior/newinteriorThree.jpg";

// import slideB from "../../../public/asset/image/interior/newinteriorFour.jpg";
// import slideBTwo from "../../../public/asset/image/interior/newinteriorFive.jpg";
// import slideBThree from "../../../public/asset/image/interior/newinteriorSix.jpg";

import { AiOutlineArrowRight } from "react-icons/ai";
import ScheduleAppointment from "../general/ScheduleAppointment";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

const Projects = () => {
  return (
    <section className="container  mx-auto p-4 md:p-10 w-full h-fit">
      <div className="relative">
        <img
          src={projects}
          alt="our projects"
          className="absolute -top-36 md:top-10 left-0 object-contain "
        />
        <div className="w-36 h-96 bg-main p-6 absolute left-0 top-40 hidden md:block ">
          <div className="-rotate-90 text-white font-mont flex flex-col items-end">
            <h3 className="text-7xl tracking-wide mr-44">Our </h3>
            <h3 className="text-7xl w-auto tracking-wide mr-4">Projects</h3>
          </div>
        </div>
        <div className=" ml-10 hidden md:grid grid-cols-1 md:grid-cols-5  gap-4 justify-end items-start">
          <div className="col-span-1"></div>
          <div className="col-span-2">
            Step into a world of endless possibilities as you explore our
            extensive range of properties. From charming apartments in bustling
            city centers to serene suburban retreats, we have something for
            every lifestyle and budget.
          </div>
          <div className="col-span-2 flex flex-col gap-5 justify-end items-end">
            <p>
              Our carefully curated collection of homes encompasses a variety of
              architectural styles, sizes, and locations to cater to your unique
              preferences.
            </p>
            <Link
              to="/projects"
              className="underline text-lg flex  items-center text-black gap-3 group"
            >
              <span> view all projects</span>
              <AiOutlineArrowRight className="group-hover:translate-x-3  ease-in-out duration-300 transition-all translate-x-0" />
            </Link>
          </div>
        </div>
        <div className="grid-cols-1 md:grid-cols-5 grid mt-20 gap-10">
          <div className="col-span-1"></div>
          <div className="col-span-2 mdt-0 md:mt-24">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide className="w-full h-full ">
                <img
                  src={slideA}
                  alt="HackBerry Jahi District"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src={slideATwo}
                  alt="HackBerry Jahi District"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src={slideAThree}
                  alt="HackBerry Jahi District"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>

            <div className="flex justify-between items-center gap-4 mt-5">
              <h4 className="text-lg  font-bold">HackBerry Jahi District</h4>
              <p className="text-gray-600 uppercase">COMMERCIAL</p>
            </div>
          </div>
          <div className="col-span-2 gap-4 justify-end items-center mt-0 md:mb-24">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide className="w-full h-full">
                <img
                  src={slideB}
                  alt="Dewberry Terrance Gwarimpa"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src={slideBTwo}
                  alt="Dewberry Terrance Gwarimpa"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <img
                  src={slideBThree}
                  alt="Dewberry Terrance Gwarimpa"
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-between items-center gap-4 mt-5">
              <h4 className="text-lg  font-bold">
                Dewberry Fully Detached and Semi Detached Gwarinpa
              </h4>
              <p className="text-gray-600 uppercase">Residential</p>
            </div>
            <div className="pt-5 md:pt-10 hidden md:flex justify-start md:justify-end">
              {/* <Button text="Schedule Appointment" /> */}
              <ScheduleAppointment type="icon" />
            </div>
          </div>
          {/* MOBILE */}

          <div className="  md:hidden grid grid-cols-1  gap-4 justify-end items-center">
            <div className="">
              Step into a world of endless possibilities as you explore our
              extensive range of properties. From charming apartments in
              bustling city centers to serene suburban retreats, we have
              something for every lifestyle and budget.
            </div>
            <div className="">
              <p>
                Our carefully curated collection of homes encompasses a variety
                of architectural styles, sizes, and locations to cater to your
                unique preferences.
              </p>
              <div className="mt-5">
                {/* <Button text="Schedule Appointment" /> */}
                <ScheduleAppointment type="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
