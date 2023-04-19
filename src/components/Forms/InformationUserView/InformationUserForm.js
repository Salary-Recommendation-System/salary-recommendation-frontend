import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./InformationUserForm.css";
import { SAVE_SALARY_INFORMATION } from "../../../service/Endpoints";
import { InformationUser } from "../../../models/InformationUser.js";
import {
  designationOptions,
  workExperienceOptions,
  noOfEmployeesOptions,
  currencyOptions,
  ratingOption,
  educationOption,
  yearOption,
} from "../Common/CommonInfo";
import Modal from "../../DialogBox/Modal";
import CustomLoader from "../../Loader/CustomLoader";

const InformationUserForm = () => {
  const [designation, setDesignation] = useState("");
  const [education, setEducation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [selectedCurrencyOption, setSelectedCurrencyOption] = useState("");
  const [noOfEmployees, setNoOfEmployees] = useState("");
  const [primaryTechnology, setPrimaryTechnology] = useState("");
  const [rating, setRating] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [modelMessage, setModelMessage] = useState("");

  const handleShowModal = (message) => {
    setIsDialogOpen(true);
    setModelMessage(message);
  };

  const handleCloseModal = () => {
    setIsDialogOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (
      !designation ||
      !education ||
      !workExperience ||
      !noOfEmployees ||
      !selectedCurrencyOption ||
      !selectedYear ||
      !rating
    ) {
      handleShowModal("Please select fill in all dropdowns before submitting");
      setIsLoading(false);
      return;
    }

    if (!primaryTechnology) {
      handleShowModal(
        "Primary technology shouldnt contain speciall characters"
      );
      setIsLoading(false);
      return;
    }

    if (!salary || !Number.isInteger(Number(salary))) {
      handleShowModal("Salary Amount: Only numbers are alloweds");
      setIsLoading(false);
      return;
    }
    save_information();
  };

  const save_information = async () => {
    const informationUser = new InformationUser(
      education,
      workExperience,
      designation,
      null,
      salary,
      noOfEmployees,
      primaryTechnology,
      rating,
      selectedYear,
      selectedCurrencyOption
    );

    const { data } = await SAVE_SALARY_INFORMATION(informationUser);
    if (data) {
      handleShowModal(data._Response__message);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="information_user_form_container">
        <h3> Salary Information </h3>
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
        <label className="information_user_form_label">
          Currency type:
          <select
            value={selectedCurrencyOption}
            onChange={(event) => setSelectedCurrencyOption(event.target.value)}
            className="information_user_form_select"
          >
            <option value="">--Please choose an option--</option>
            {currencyOptions}
          </select>
        </label>
        <br />
        <label className="information_user_form_label">
          Year you were paid:
          <select
            value={selectedYear}
            onChange={(event) => setSelectedYear(event.target.value)}
            className="information_user_form_select"
          >
            <option value="">--Please choose an option--</option>
            {yearOption}
          </select>
        </label>
        <br />
        <label className="information_user_form_label">
          Rating:
          <select
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            className="information_user_form_select"
          >
            <option value="">--Please choose an option--</option>
            {ratingOption}
          </select>
        </label>
        <br />
        <label className="information_user_form_label">
          Salary Amount:
          <input
            type="text"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
            className="information_user_form_input"
          />
        </label>
        <br />
        <label className="information_user_form_label">
          Primary Technology:
          <input
            type="text"
            value={primaryTechnology}
            onChange={(event) => setPrimaryTechnology(event.target.value)}
            className="information_user_form_input"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isDialogOpen && (
        <Modal message={modelMessage} onClose={handleCloseModal} />
      )}
      {isLoading && <CustomLoader isLoading={isLoading} />}
    </>
  );
};

export default InformationUserForm;
