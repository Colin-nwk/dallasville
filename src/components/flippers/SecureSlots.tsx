import Heading from "../general/Heading";
import Section from "../general/Section";
import clients from "../../../public/asset/image/flippers/clients.png";
import ScheduleAppointment from "../general/ScheduleAppointment";

const SecureSlots = () => {
  return (
    <>
      <Section>
        <div className="grid md:grid-cols-5 grid-cols-1 gap-8">
          <div className=" w-full h-full md:col-span-2 ">
            <img src={clients} alt="" className="w-fit h-fit object-contain" />
          </div>
          <div className=" md:col-span-3">
            <div className="w-full md:w-3/4">
              <Heading text="Secure Your Unit Now - Limited Slots Available !" />
            </div>
            <div className="flex flex-col gap-y-8  w-full mt-5">
              <div className="">
                <div className="flex  justify-start items-center gap-2">
                  <p className="bg-[#101010]/40 text-[#101010] p-0.5 px-2.5 rounded-full font-bold">
                    1
                  </p>
                  <h3>Explore the Opportunity</h3>
                </div>
                <p className="ml-9 mt-2">
                  Take your time to explore the project's features, investment
                  benefits, and potential returns. Review the architectural
                  renders, floor plans, and location details to envision your
                  investment in the future of Abuja's Airport Road.
                </p>
              </div>
              <div className="">
                <div className="flex  justify-start items-center gap-2">
                  <p className="bg-[#101010]/40 text-[#101010] p-0.5 px-2.5 rounded-full font-bold">
                    2
                  </p>
                  <h3>Let’s Talk</h3>
                </div>
                <div className="ml-9 mt-1">
                  <p className="">
                    Have questions or need personalized assistance? We are here
                    to help! Reach out to our dedicated team of real estate
                    experts through any of the following options:{" "}
                  </p>
                  <p className="block ml-4 mt-1">
                    <span className=" font-semibold">
                      -Toll-Free Helpline:{" "}
                    </span>
                    Dial{" "}
                    <a href="tel:+23480036003600" className=" font-semibold">
                      0800-3600-3600
                    </a>
                    to speak with one of our representatives who will guide you
                    through the application process and address any inquiries
                    you may have.
                  </p>{" "}
                  <p className="block ml-4 mt-1">
                    <span className=" font-semibold">- Contact Adeola:</span>{" "}
                    You can directly contact Adeola at
                    <a href="tel:+2348067812338" className=" font-semibold">
                      +234 806 781 2338
                    </a>{" "}
                    for expert advice and personalized assistance with your
                    investment journey.
                  </p>
                  <p className="block ml-4 mt-1">
                    {" "}
                    <span className=" font-semibold">- Email Us:</span> Send us
                    an email at{" "}
                    <a
                      href="mailto:info@dallasville.com"
                      className=" font-semibold"
                    >
                      info@dallasville.com
                    </a>
                    with your questions or to request additional information. We
                    aim to respond promptly to all inquiries.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex  justify-start items-center gap-2">
                  <p className="bg-[#101010]/40 text-[#101010] p-0.5 px-2.5 rounded-full font-bold">
                    3
                  </p>
                  <h3>Secure Your Unit</h3>
                </div>
                <p className="ml-9 mt-2">
                  Once you have gathered all the necessary information and are
                  ready to take the next step, secure your unit in the Hackberry
                  Terrace Apartment development with just N5m. Don't wait too
                  long as the slots are limited, and this exceptional investment
                  opportunity won't last forever. Act now and position yourself
                  for significant returns as you flip your property at the right
                  time.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <ScheduleAppointment type="icon" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SecureSlots;
