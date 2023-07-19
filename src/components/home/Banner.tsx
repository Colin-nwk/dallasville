import right from "../../../public/asset/image/quote-right.png";
import left from "../../../public/asset/image/quote-left.png";
const Banner = () => {
  return (
    <section className="container  mx-auto px-4 md:px-10 w-full py-4 md:py-10">
      <div className="flex justify-center items-center gap-3">
        <img src={left} alt="qoute" className="-mt-20 md:inline-block hidden" />
        <p className="text-2xl  leading-loose text-center text-black font-sangmedium">
          Step into the future of real estate, where cutting-edge technology
          merges seamlessly with architectural elegance. Discover a new standard
          of sustainability, smartness, affordable-luxury and convenience
        </p>{" "}
        <img src={right} alt="qoute" className="mt-20 md:inline-block hidden" />
      </div>
      <p className="text-xl  font-sangmedium text-center font-semibold mt-5">
        -- Samuel McDallas Ojukwu
      </p>
    </section>
  );
};

export default Banner;
