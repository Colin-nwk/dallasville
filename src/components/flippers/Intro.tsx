import Section from "../general/Section";
import Heading from "../general/Heading";
import herodesk from "../../../public/asset/image/hackberry/herodesk.png";

const Intro = () => {
  return (
    <>
      <Section>
        <div className="grid md:grid-cols-2 grid-col-1 gap-4 mt-5">
          <div className="w-full h-full  object-cover ">
            <div className="flex flex-col gap-y-4">
              <Heading text=" Dallasville REP: Your Path to Lucrative Real Estate Flipping" />

              <p className="text-base text-ellipsis leading-relaxed">
                Dallasville is proud to launch its groundbreaking Real Estate
                Flippers (REP) program, revolutionizing the real estate
                investment landscape in Abuja. With REP, investors have a unique
                opportunity to fund the early stages of the prestigious
                Hackberry Terrace Apartment development, located in the heart of
                Airport Road, Lugbe. Be a part of transforming this area into a
                thriving community reminiscent of the highly sought-after Ikeja
                GRA.
              </p>
            </div>
          </div>
          <div className="w-full h-full">
            <img src={herodesk} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Intro;
