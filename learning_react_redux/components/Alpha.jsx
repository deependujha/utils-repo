import React from "react";
import { useSelector } from "react-redux";

const Alpha = () => {
  const alpha = useSelector((state) => state.alpha.value);
  return (
    <>
      <div>alpha: {alpha}</div>
    </>
  );
};

export default Alpha;
