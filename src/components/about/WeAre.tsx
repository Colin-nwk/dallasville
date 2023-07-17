import frameOne from "../../../public/asset/image/about/we1.png";
import frameTwo from "../../../public/asset/image/about/we2.png";
import frameThree from "../../../public/asset/image/about/we3.png";
import frameFour from "../../../public/asset/image/about/we4.png";

const WeAre = () => {
  return (
    <section className="container  mx-auto px-4 md:px-10 w-full py-4 md:py-10">
      <h3 className="text-center font-bold text-xl md:text-3xl py-10 text-main">
        Who We Are
      </h3>
      <p className="text-lg leading-loose text-center text-ellipsis py-5">
        With over 20 years of operation, we have become a trusted name in real
        estate, blending unique simplicity and fulfilling our vision to be the
        number one trusted real estate partner locally and internationally. At
        DallasVille, we go beyond being a real estate company. We are your
        dedicated partner, committed to providing exceptional service and
        guiding you through the exciting world of real estate with a focus on
        smart homes and connected living.Through our extensive knowledge,
        unwavering commitment, and personalized approach, we have created a
        success story of delivering over 15 smart homes to satisfied homeowners
      </p>
      <div className="grid gap-4 grid-cols-4 py-5">
        <div className="">
          <img
            src={frameOne}
            alt="dallasville frame"
            className="h-fit w-fit aspect-auto"
          />
        </div>
        <div className="">
          <img
            src={frameTwo}
            alt="dallasville frame"
            className="h-fit w-fit aspect-auto"
          />
        </div>
        <div className="">
          <img
            src={frameThree}
            alt="dallasville frame"
            className="h-fit w-fit aspect-auto"
          />
        </div>
        <div className="">
          <img
            src={frameFour}
            alt="dallasville frame"
            className="h-fit w-fit aspect-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WeAre;
