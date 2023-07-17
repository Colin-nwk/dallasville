import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import room from "../../../public/asset/image/living-room.png";

const Brochure = () => {
  return (
    <>
      <section className="container  mx-auto p-4 md:p-10 w-full h-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start md:justify-between items-center">
          <div className=" hidden md:block">
            <img
              src={room}
              alt="living room design"
              className="w-fit h-fit object-contain"
            />
          </div>
          <div className="border rounded-md full h-full p-4">
            <div className="flex flex-col gap-4 items-start justify-start px-4">
              <h3 className="text-2xl font-sansblue font-bold">
                Download our Brochure
              </h3>
              <p className="text-xl  font-medium">Fill in your details below</p>
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
                    className="bg-main rounded py-2 px-6 text-white  duration-300 transition-all ease-in-out flex justify-center items-center cursor-pointer group w-full hover:bg-main/95"
                    type="submit"
                  >
                    <span>Download brochure</span>
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
