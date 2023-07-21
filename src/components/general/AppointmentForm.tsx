import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const AppointmentForm = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col gap-4 items-start justify-start py-4 md:p-4">
        <h3 className="text-2xl font-sansblue font-bold">
          Schedule Appointment
        </h3>
        <p className="text-base  font-medium">
          Please fill details below and we will get to you right away
        </p>
        {/* input forms */}
        <form action="" className="w-full">
          <div className=" flex flex-col gap-4 w-full ">
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="full name" name="fullname" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                placeholder="Enter your email address"
                type="email"
                name="email"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                placeholder="enter your mobile number"
                type="number"
                name="phone"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>What project are you interested in</FormLabel>
              <Select name="project">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </div>
          <div className="mt-10">
            <button
              className="bg-main rounded py-2 px-6 text-white  duration-300 transition-all ease-in-out flex justify-center items-center cursor-pointer group w-full hover:bg-main/95"
              type="submit"
            >
              <span>Schedule Appointment</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
