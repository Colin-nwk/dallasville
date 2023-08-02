// import coreOne from "../../../public/asset/image/about/core1.png";
// import coreTwo from "../../../public/asset/image/about/core2.png";
// import coreThree from "../../../public/asset/image/about/core3.png";
// import coreFour from "../../../public/asset/image/about/core4.png";
// import coreFive from "../../../public/asset/image/about/core5.png";
// import coreSix from "../../../public/asset/image/about/core6.png";
import one from "../../../public/asset/image/about/core/one.jpg";
import two from "../../../public/asset/image/about/core/two.jpg";
import three from "../../../public/asset/image/about/core/three.jpg";
import four from "../../../public/asset/image/about/core/four.jpg";
import five from "../../../public/asset/image/about/core/five.jpg";
import six from "../../../public/asset/image/about/core/six.jpg";
const OurCore = () => {
  return (
    <div>
      {" "}
      <section className="container  mx-auto px-4 md:px-10 w-full py-4 md:py-10">
        <h3 className="text-left font-bold text-xl md:text-3xl py-2 text-main">
          Our Core Values
        </h3>
        {/* one */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4  justify-center items-center md:py-10 py-5">
          <div className="md:col-span-3 grid grid-cols-2 justify-end items-end h-full overflow-hidden gap-4 ">
            <img src={one} alt="dallasvile pics" className="object-contain " />

            <img src={two} alt="dallasvile pics" className="object-contain" />
          </div>
          <div className="md:col-span-2 md:pt-20 ">
            <h3 className="text-left font-bold text-lg md:text-xl py-3 text-main">
              Unparalleled Expertise and Support
            </h3>
            <p className="text-base leading-loose text-ellipsis py-1 ">
              At DallasVille, our experienced team is passionate about finding
              your perfect match. Count on us to handle details, negotiate
              deals, and ensure your satisfaction in buying or selling a home.
              Trust us as your dedicated partner in the exciting journey of real
              estate.
            </p>
          </div>
        </div>
        {/* two */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4  justify-center items-center md:py-10 py-5">
          <div className="md:col-span-2 md:pt-20 order-2 md:order-1">
            <h3 className="text-left font-bold text-lg md:text-xl py-3 text-main">
              SEAMLESS EXPERIENCE
            </h3>
            <p className="text-base leading-loose text-left text-ellipsis py-1 ">
              Refine your living experience by going for our smartly built
              seamless experience homes.
            </p>
            {/* <p className="text-base leading-loose text-left text-ellipsis py-1 ">
              Find your dream home effortlessly with our user-friendly website.
              Refine your search with intuitive filters for location, price
              range, amenities, and more. Say goodbye to endless scrolling and
              hello to personalized results, making your journey seamless and
              efficient.
            </p> */}
          </div>

          <div className="md:col-span-3 grid grid-cols-2 justify-end items-end h-full overflow-hidden gap-4 order-1 md:order-2">
            <img
              src={three}
              alt="dallasvile pics"
              className="object-contain "
            />

            <img src={four} alt="dallasvile pics" className="object-contain" />
          </div>
        </div>
        {/* three */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4  justify-center items-center md:py-10 py-5">
          <div className="md:col-span-3 grid grid-cols-2 justify-end items-end h-full overflow-hidden gap-4 ">
            <img src={five} alt="dallasvile pics" className="object-contain " />

            <img src={six} alt="dallasvile pics" className="object-contain" />
          </div>
          <div className="md:col-span-2 md:pt-14 ">
            <h3 className="text-left font-bold text-lg md:text-xl py-3 text-main">
              A Trustworthy Partner
            </h3>
            <p className="text-base text-left leading-relaxed text-ellipsis py-1 ">
              With DallasVille, you're not just a client, you're part of our
              family. We understand the importance of trust when it comes to
              such a significant investment. That's why we are committed to
              transparency, honesty, and open communication at every stage. Rest
              assured, we will always have your best interests at heart,
              providing you with the guidance you need to make informed
              decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCore;
