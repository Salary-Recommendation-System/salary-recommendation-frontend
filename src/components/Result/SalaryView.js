import React from "react";
import SalaryCards from "./SalaryCards";
import "./SalaryView.css";
import { useHistory } from "react-router-dom";

const SalaryView = ({ location }) => {
  const history = useHistory();
  const recommendation = location.state?.recommendation;

  const handleSubmit = () => {
    history.push({
      pathname: "/",
    });
  };
  return (
    <div>
      {recommendation.label_message ? (
        <div className="label_message">
          <h2> {recommendation.label_message} </h2>
        </div>
      ) : (
        <> </>
      )}
      <SalaryCards salaryInfo={recommendation.model_filtering} />
      <SalaryCards salaryInfo={recommendation.content_based_filtering} />
      <button onClick={handleSubmit} className="back">
        Back to Home
      </button>
    </div>
  );
};

export default SalaryView;
