import Section from "../general/Section";
import Heading from "../general/Heading";
import SubHeading from "../general/SubHeading";

const WhyUs = () => {
  return (
    <>
      <Section>
        <Heading text="Why Choose Dallasville REP?" className="text-center" />
        <div className="grid md:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-8 mt-4 md:mt-8">
          <div className=" flex flex-col gap-4">
            <SubHeading
              text="Secure & Profitable Investment"
              className="text-center"
            />
            <p className="text-left">
              With Dallasville REP, your investment is secured by the property
              itself. As we develop the Hackberry Terrace Apartment, you can
              rest assured that your funds are backed by a tangible asset,
              mitigating risks and ensuring a solid investment foundation.
            </p>
          </div>
          <div className=" flex flex-col gap-4">
            <SubHeading text="Flexible Entry Points" className="text-center" />
            <p className="text-left">
              We understand that every investor has different risk appetites and
              financial capabilities. With Dallasville REP, you can enter the
              project at various stages, aligning with your preferences and
              budget.
            </p>
          </div>
          <div className=" flex flex-col gap-4">
            <SubHeading text="High Return Potential" className="text-center" />
            <p className="text-left">
              The Hackberry Terrace Apartment offers exceptional potential for
              lucrative returns. As a real estate flipper, you can purchase
              units at a discounted price and sell at a profit of N5m to N15m,
              depending on the timing of your flip.
            </p>
          </div>
          <div className=" flex flex-col gap-4">
            <SubHeading text="Short Project Duration" className="text-center" />
            <p className="text-left">
              Dallasville aims to complete the Hackberry Terrace Apartment
              within 3 to 24 months, maximizing efficiency and ensuring quick
              returns for investors.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WhyUs;
