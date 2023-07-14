import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import room from "../../../public/asset/image/living-room.png";
import { AiOutlineArrowRight } from "react-icons/ai";
const Brochure = () => {
  return (
    <>
      <section className="container  mx-auto p-4 md:p-10 w-full h-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start md:justify-between items-center">
          <div className="">
            <img
              src={room}
              alt="living room design"
              className="w-fit h-fit object-contain"
            />
          </div>
          <div className="border rounded-md full h-full p-4">
            <div className="flex flex-col gap-4 items-start justify-start px-4">
              <h3 className="text-2xl font-mont font-bold">
                Download our Brochure
              </h3>
              <h4 className="text-xl font-mont font-medium">
                Fill in your details below
              </h4>
              {/* input forms */}
              <form action="" className="w-full">
                <div className=" flex flex-col gap-8 w-full mt-4">
                  <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder="full name" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      placeholder="Enter your email address"
                      type="email"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      placeholder="enter your mobile number"
                      type="number"
                    />
                  </FormControl>
                </div>
                <div className="mt-10">
                  <button
                    className="bg-main rounded-full py-2 px-6 text-white  duration-300 transition-all ease-in-out flex justify-between items-center cursor-pointer group w-fit"
                    type="submit"
                  >
                    <span>Download brochure</span>
                    <AiOutlineArrowRight className="text-white h-5 w-5 translate-x-0 group-hover:translate-x-2 ease-in-out transition-all duration-300" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brochure;
