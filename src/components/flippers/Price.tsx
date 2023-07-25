import Section from "../general/Section";
import Heading from "../general/Heading";
import priceImg from "../../../public/asset/image/flippers/price.png";
import pricemobileImg from "../../../public/asset/image/flippers/pricemobile.png";

const Price = () => {
  return (
    <>
      <Section>
        <Heading
          text="Real Estate Flippers"
          className="text-left md:text-center mb-8"
        />
        <img
          src={priceImg}
          alt=""
          className="w-full h-full object-cover hidden md:block"
        />
        <img
          src={pricemobileImg}
          alt=""
          className="w-full h-full object-cover md:hidden block"
        />
      </Section>
    </>
  );
};

export default Price;
