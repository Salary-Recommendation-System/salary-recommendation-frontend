import React, { useState } from "react";
import {
  designationOptions,
  workExperienceOptions,
  noOfEmployeesOptions,
  educationOption,
} from "../Common/CommonInfo";
import "./RecommendationForm.css";
import { MainUser } from "../../../models/MainUser";
import { GET_RECOMMENDATION } from "../../../service/Endpoints";
import { useHistory } from "react-router-dom";
import Modal from "../../DialogBox/Modal";
import CustomLoader from "../../Loader/CustomLoader";

const RecommendationForm = () => {
  const history = useHistory();
  const [designation, setDesignation] = useState("");
  const [education, setEducation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [noOfEmployees, setNoOfEmployees] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowModal = () => {
    setIsDialogOpen(true);
  };

  const handleCloseModal = () => {
    setIsDialogOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!designation || !education || !workExperience || !noOfEmployees) {
      handleShowModal();
      return;
    }
    getRecommendation();
  };

  const getRecommendation = async () => {
    const user = new MainUser(
      education,
      workExperience,
      designation,
      null,
      null,
      noOfEmployees
    );

    const { data } = await GET_RECOMMENDATION(user);
    if (data) {
      setIsLoading(false);
      history.push({
        pathname: "/recommendation-view",
        state: { recommendation: data._Response__message },
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="information_user_form_container">
        <h3> Get Recommendation Salary </h3>
        <label className="information_user_form_label">
          Designation:
          <select
            value={designation}
            onChange={(event) => setDesignation(event.target.value)}
            className="information_user_form_select"
          >
            <option value="">--Please choose an option--</option>
            {designationOptions}
          </select>
        </label>
        <br />
        <label className="information_user_form_label">
          Education:
          <select
            value={education}
            onChange={(event) => setEducation(event.target.value)}
            className="information_user_form_select"
          >
            <option value="">--Please choose an option--</option>
            {educationOption}
          </select>
        </label>
        <br />
        <label className="information_user_form_label">
          Work Experience:
          <select
            value={workExperience}
            onChange={(event) => setWorkExperience(event.target.value)}
            className="information_user_form_select"
          >
            <option value="">--Please choose an option--</option>
            {workExperienceOptions}
          </select>
        </label>
        <br />
        <label className="information_user_form_label">
          Number of Employees:
          <select
            value={noOfEmployees}
            onChange={(event) => setNoOfEmployees(event.target.value)}
            className="information_user_form_select"
          >
            <option value="">--Please choose an option--</option>
            {noOfEmployeesOptions}
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {isDialogOpen && (
        <Modal
          message="Please select all options before submitting"
          onClose={handleCloseModal}
        />
      )}
      {isLoading && <CustomLoader isLoading={isLoading} />}
    </>
  );
};

export default RecommendationForm;
