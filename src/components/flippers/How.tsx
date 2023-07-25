import Section from "../general/Section";
import Heading from "../general/Heading";
import ScheduleAppointment from "../general/ScheduleAppointment";

const How = () => {
  return (
    <div className="bg-[#FEE9F4] ">
      <div className="w-full lg:w-4/5 mx-auto flex justify-center items-center">
        <Section>
          <Heading
            text="How Dallasville REP Works - Your Path to Profits"
            className="text-left"
          />
          <div className="flex flex-col gap-y-8  w-full mt-5">
            <div className="">
              <div className="flex  justify-start items-center gap-2">
                <p className="bg-[#101010]/40 text-[#101010] p-0.5 px-2.5 rounded-full font-bold">
                  1
                </p>
                <h3>Discover the Hackberry Terrace Apartment</h3>
              </div>
              <p className="ml-9 mt-2">
                Explore the exceptional investment opportunity that awaits you
                at the Hackberry Terrace Apartment. Visit our website and
                immerse yourself in the architectural renders, floor plans, and
                all the features that make this development the future landmark
                of Airport Road, Abuja. Understand the projected returns and the
                immense potential for profits as you flip your unit at the right
                time.
              </p>
            </div>
            <div className="">
              <div className="flex  justify-start items-center gap-2">
                <p className="bg-[#101010]/40 text-[#101010] p-0.5 px-2.5 rounded-full font-bold">
                  2
                </p>
                <h3>Choose Your Entry Point</h3>
              </div>
              <p className="ml-9 mt-2">
                Tailor your investment journey based on your unique risk
                appetite and financial capabilities. With Dallasville REP, you
                have the flexibility to enter the project at different stages of
                development. Whether you prefer an early investment or a more
                mature phase, our expert team will guide you in making an
                informed decision that aligns with your investment goals.
              </p>
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
                Terrace Apartment development with N5m or more depending on your
                risk appetite. Don't wait too long as the slots are limited, and
                this exceptional investment opportunity won't last forever. Act
                now and position yourself for significant returns as you flip
                your property at the right time.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <ScheduleAppointment type="icon" />
          </div>
        </Section>
      </div>
    </div>
  );
};

export default How;
