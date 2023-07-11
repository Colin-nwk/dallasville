import { AiOutlineArrowRight } from "react-icons/ai";

type Props = {
  text: string;
};
const Button = ({ text }: Props) => {
  return (
    <button className="bg-main rounded-full py-2 px-6 text-white  duration-300 transition-all ease-in-out flex justify-between items-center cursor-pointer group w-fit">
      <span>{text}</span>
      <AiOutlineArrowRight className="text-white h-5 w-5 translate-x-0 group-hover:translate-x-2 ease-in-out transition-all duration-300" />
    </button>
  );
};

export default Button;
