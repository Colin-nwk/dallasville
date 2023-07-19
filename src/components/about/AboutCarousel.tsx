import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

const AboutCarousel = () => {
  const swiper = useSwiper();

  const handlePrevClick = () => {
    setTimeout(() => {
      swiper && swiper.slidePrev();
    }, 0);
  };

  const handleNextClick = () => {
    setTimeout(() => {
      swiper && swiper.slideNext();
    }, 0);
  };
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
        //   pagination={{
        //     clickable: true,
        //   }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className="">
          <div className=" flex flex-col gap-4 w-fit h-fit ">
            <h4 className="text-left font-bold text-xl">
              Community Commitment
            </h4>
            <p className="">
              We are more than just a real estate company; we are an active
              member of the communities we serve. We understand the importance
              of giving back and making a positive impact. That's why we
              actively engage in local initiatives and support charitable
              organizations to contribute to the betterment of our community.
              When you work with us, you're not just supporting your real estate
              dreams; you're also supporting the growth and well-being of the
              community we all call home.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" flex flex-col gap-4 w-full">
            <h4 className="text-left font-bold text-xl">
              Comprehensive Services
            </h4>
            <p className="">
              Whether you're buying, selling, or investing, our comprehensive
              range of services is designed to support you every step of the
              way. From conducting thorough market research and property
              evaluations to providing expert guidance on pricing and
              negotiations, we offer a complete suite of solutions to meet your
              real estate requirements. Our goal is to simplify the process and
              alleviate any stress, allowing you to focus on your goals.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" flex flex-col gap-4">
            <h4 className="text-left font-bold text-xl">
              Client-Centric Approach
            </h4>
            <p className="">
              At Dallasville, you are at the heart of everything we do. We
              believe in building long-lasting relationships based on trust,
              integrity, and open communication. We take the time to understand
              your individual preferences, priorities, and goals, tailoring our
              services to meet your unique needs. Our client-centric approach
              means that your satisfaction is our top priority, and we go above
              and beyond to exceed your expectations.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" flex flex-col gap-4">
            <h4 className="text-left font-bold text-xl">
              Expertise and Experience
            </h4>
            <p className="">
              {" "}
              With years of experience in the real estate industry, our team of
              professionals brings a wealth of knowledge and expertise to the
              table. From our skilled agents to our dedicated support staff, we
              are committed to staying ahead of market trends, understanding
              local nuances, and providing you with comprehensive insights. We
              leverage our expertise to help you make informed decisions and
              ensure a smooth transaction process.
            </p>
          </div>
        </SwiperSlide>
        <div className="w-40 mx-auto md:mx-0 md:ml-auto mt-5 lg:mt-20 ">
          <div className="flex justify-between gap-8 items-start z-30">
            <IoMdArrowDropleftCircle
              className="w-10 h-10  text-main cursor-pointer swiper-button-prev hover:text-main/90"
              onClick={handlePrevClick}
            />
            <IoMdArrowDroprightCircle
              className="w-10 h-10 text-main cursor-pointer swiper-button-next hover:text-main/90"
              onClick={handleNextClick}
            />
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutCarousel;
