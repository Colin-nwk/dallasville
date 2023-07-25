import React, { ReactNode } from "react";

const Section: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <section className="container mx-auto px-4 md:px-10 w-full py-6 md:py-14">
        {children}
      </section>
    </>
  );
};

export default Section;
