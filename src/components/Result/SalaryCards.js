import React from "react";
import SalaryCard from "./SalaryCard";

const SalaryCards = ({ salaryInfo }) => {
  return (
    <div className="salary-cards">
      {salaryInfo.map((salary) => (
        <SalaryCard
          key={salary.id}
          workExperience={salary["work_experience"]}
          education={salary["education_level"]}
          companySize={salary["no_of_employees"]}
          designation={salary["designation"]}
          amount={salary["salary_amount"]}
          rating={salary["user_rating"]}
          id={salary["id"]}
          year={salary["year_of_payment"]}
          inflationRate={salary["inflation_rate"]}
          inflationAmount={salary["inflation_amount"]}
        />
      ))}
    </div>
  );
};

export default SalaryCards;
