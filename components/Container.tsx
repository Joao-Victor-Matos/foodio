import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full max-w-[1520px] px-20  mx-auto">{children}</div>;
};

export default Container;
