import { useState, useEffect, useCallback } from "react";
import hackberyOne from "../../../public/asset/image/hackberry.png";
import hackberyTwo from "../../../public/asset/image/hackberry.png";
import hackberyThree from "../../../public/asset/image/hackberry.png";
import { BsArrowRight } from "react-icons/bs";

const Carousel = () => {
  const slideshow: string[] = [hackberyOne, hackberyTwo, hackberyThree];
  const [current, setCurrent] = useState<number>(0);

  //   const prev = (): void =>
  //     setCurrent((current) =>
  //       current === 0 ? slideshow.length - 1 : current - 1
  //     );

  const next = useCallback(
    (): void =>
      setCurrent((current) =>
        current === slideshow.length - 1 ? 0 : current + 1
      ),
    [slideshow.length]
  );

  useEffect(() => {
    const slideInterval = setInterval(next, 7000);
    return () => clearInterval(slideInterval);
  }, [next]);

  return (
    <>
      <div className="w-full h-full backdrop-blur-md border-l-4 border-white overflow-hidden">
        <div className="flex flex-col justify-between items-start gap-4 ml-4 p-1">
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-center items-center gap-2 p-1">
              {slideshow.map((item, i) => (
                <div
                  key={`${item}.${i.toString()}`}
                  className={`h-2 w-2 rounded-full  ${
                    current == i ? "bg-white" : "bg-white/50"
                  }`}
                ></div>
              ))}
            </div>
            <div className="group cursor-pointer">
              <h3 className="text-white text-2xl ">
                La’Vogue Apartments{" "}
                <BsArrowRight className="text-white  inline-flex group-hover:translate-x-2 duration-300 ease-out transition-all translate-x-0" />
              </h3>
            </div>
            <p className="text-white text-sm opacity-70 ">
              This stunning building offers 3-bedroom apartments, a master
              bedroom and two other bedrooms all en-suite.
            </p>
          </div>
        </div>
        <div
          className="h-full w-full flex   transition-transform duration-500 ease-in-out  "
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slideshow.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="hackberry projects"
              className="object-fill w-full h-full md:w-fit md:h-fit no-scroll"
            />
          ))}
          {/* <img
            src={hackberyOne}
            alt="hackberry projects"
            className="object-center md:object-contain w-full h-full md:w-fit md:h-fit"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Carousel;
