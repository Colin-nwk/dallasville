import React from "react";

type Props = {
  text: string;
  className?: string;
};
const Heading: React.FC<Props> = ({ text, className = "" }) => {
  return (
    <>
      <h2
        className={`text-2xl md:text-3xl text-ellipsis leading-relaxed ${className}`}
      >
        {text}
      </h2>
    </>
  );
};

export default Heading;
