import right from "../../../public/asset/image/quote-right.png";
import left from "../../../public/asset/image/quote-left.png";
const Banner = () => {
  return (
    <section className="container  mx-auto px-4 md:px-10 w-full py-4 md:py-10">
      <div className="flex justify-center items-center gap-3">
        <img src={left} alt="qoute" className="-mt-20 md:inline-block hidden" />
        <h2 className="text-2xl md:text-3xl  leading-relaxed text-center ">
          Step into the future of real estate, where cutting-edge technology
          merges seamlessly with architectural elegance. Discover a new standard
          of sustainability, smartness, affordable-luxury and convenience
        </h2>{" "}
        <img src={right} alt="qoute" className="mt-20 md:inline-block hidden" />
      </div>
      <h2 className="text-xl text-center font-semibold mt-5">
        -- Samuel McDallas Ojukwu
      </h2>
    </section>
  );
};

export default Banner;
