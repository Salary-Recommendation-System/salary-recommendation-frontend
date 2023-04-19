import React from "react";
import SalaryCards from "./SalaryCards";

const SalaryView = ({ location }) => {
  const { recommendation } = location.state;
  return (
    <div>
      <SalaryCards salaryInfo={recommendation.model_filtering} />
      <SalaryCards salaryInfo={recommendation.content_based_filtering} />
    </div>
  );
};

export default SalaryView;
