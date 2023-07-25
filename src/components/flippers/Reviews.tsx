import Heading from "../general/Heading";
import Section from "../general/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";

import reviewer from "../../../public/asset/image/reviews/reviewer.png";
import reviewerTwo from "../../../public/asset/image/reviews/reviewerTwo.png";

import "swiper/css";

const Reviews = () => {
  return (
    <>
      <Section>
        <Heading text="Customer Review" className="text-left md:text-center" />

        <div className=" py-3  mt-10  flex ">
          <Swiper
            spaceBetween={50}
            slidesPerView={"auto"}
            // spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className=" w-full md:w-3/4 h-80 flex rounded-2xl overflow-clip">
                <img
                  src={reviewer}
                  alt="review one"
                  className="hidden md:block w-fit h-fit object-center rounded-l-2xl"
                />
                <div className="p-4 md:p-8 first:flex flex-col gap-5 justify-between items-center bg-gray-100 rounded-l-2xl md:rounded-l-none rounded-r-2xl ">
                  <h4>Great Service</h4>
                  <p className="">
                    The opportunity to invest in the Hackberry Terrace Apartment
                    at an early stage was a game-changer for my portfolio. The
                    team at Dallasville was supportive throughout the process,
                    and I managed to flip my unit for a substantial profit
                    within a short timeframe. I highly recommend Dallasville REP
                    to anyone looking for a lucrative real estate investment.
                  </p>
                  <div className="flex mt-2">
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                  </div>
                  <p className="font-bold mt-2">Johne Doe</p>
                  <p className="">Medical Doctor</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-full md:w-3/4 h-80 flex rounded-2xl overflow-clip">
                <img
                  src={reviewerTwo}
                  alt="review one"
                  className="hidden md:block w-fit h-fit object-center rounded-l-2xl"
                />
                <div className="p-4 md:p-8 first:flex flex-col gap-5 justify-between items-center bg-gray-100 rounded-l-2xl md:rounded-l-none rounded-r-2xl ">
                  <h4>Great Service</h4>
                  <p className="">
                    The opportunity to invest in the Hackberry Terrace Apartment
                    at an early stage was a game-changer for my portfolio. The
                    team at Dallasville was supportive throughout the process,
                    and I managed to flip my unit for a substantial profit
                    within a short timeframe. I highly recommend Dallasville REP
                    to anyone looking for a lucrative real estate investment.
                  </p>
                  <div className="flex mt-2">
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                  </div>
                  <p className="font-bold mt-2">Jane Doe</p>
                  <p className="">Pilot</p>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="w-full md:w-3/4 h-80 flex-none bg-gray-100 rounded-2xl overflow-clip">
                <img
                  src={reviewerTwo}
                  alt="review one"
                  className=" w-fit h-fit object-center rounded-l-2xl"
                />
                <div className=" p-8 first:flex flex-col gap-5 justify-between items-center">
                  <h4>Great Service</h4>
                  <p className="">
                    The opportunity to invest in the Hackberry Terrace Apartment
                    at an early stage was a game-changer for my portfolio. The
                    team at Dallasville was supportive throughout the process,
                    and I managed to flip my unit for a substantial profit
                    within a short timeframe. I highly recommend Dallasville REP
                    to anyone looking for a lucrative real estate investment.
                  </p>
                  <p className="">Jane Doe</p>
                  <p className="">Medical Doctor</p>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </Section>
    </>
  );
};

export default Reviews;
