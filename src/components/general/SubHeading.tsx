import React from "react";

type Props = {
  text: string;
  className?: string;
};
const SubHeading: React.FC<Props> = ({ text, className = "" }) => {
  return (
    <>
      <h2 className={`text-lg md:text-xl text-ellipsis  ${className}`}>
        {text}
      </h2>
    </>
  );
};

export default SubHeading;
