import mission from "../../../public/asset/image/about/ourmission.svg";
import missionOne from "../../../public/asset/image/about/mission1.png";
import missionTwo from "../../../public/asset/image/about/mission2.png";
// import Button from "../general/Button";
import ScheduleAppointment from "../general/ScheduleAppointment";

const OurMission = () => {
  return (
    <div className="bg-[#FEF9FC]">
      <section className="container  mx-auto px-4 md:px-10 w-full py-4 md:py-10 ">
        <img
          src={mission}
          alt="dallasville misssion"
          className="h-fit w-fit object-contain   hidden md:block"
        />

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 md:-mt-10 mt-0 ">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            <img src={missionOne} alt="our mission " />
            <img
              src={missionTwo}
              alt="our mission "
              className="mt-10 md:mt-20"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-left md:text-center font-bold text-xl md:text-3xl pt-10 md:pt-0 py-4 text-main">
              Our Mission
            </h2>
            <div className="md:px-10">
              <p className="text-lg leading-loose text-ellipsis py-5 md:py-10 ">
                Our mission is to empower individuals and families to achieve
                their real estate goals and dreams. We understand that finding
                the perfect home is about more than just the physical space;
                it's about creating a place where memories are made, aspirations
                thrive, and true comfort is found. With a focus on smart homes,
                connected living, home automation, and smart real estate
                solutions, we are here to guide you on this journey,
                prioritizing your unique needs and aspirations.
              </p>
              <div className=" mb-5 md:mb-0 md:mt-5">
                {/* <Button text="Schedule Appointment" /> */}
                <ScheduleAppointment primary={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
