import React from "react";
import { Puff } from "react-loader-spinner";
import "./CustomLoader.css";

const CustomLoader = ({ isLoading }) => {
  return (
    <div className={`custom-loader${isLoading ? " blur" : ""}`}>
      <Puff color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default CustomLoader;
