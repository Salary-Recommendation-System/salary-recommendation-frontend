import React, { useState } from "react";
import "./SalaryCard.css";
import EditIcon from "@mui/icons-material/Edit";
import { ratingOption } from "../Forms/Common/CommonInfo";
import { UPDATE_RATING } from "../../service/Endpoints";
import CustomLoader from "../Loader/CustomLoader";
import Modal from "../DialogBox/Modal";

const SalaryCard = ({
  id,
  workExperience,
  education,
  companySize,
  designation,
  amount,
  rating,
  year,
  inflationRate,
  inflationAmount,
}) => {
  const [isEditingRating, setIsEditingRating] = useState(false);
  const [selectedRating, setSelectedRating] = useState(rating);
  const [isLoading, setIsLoading] = useState(false);
  const [modelMessage, setModelMessage] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleShowModal = (message) => {
    setIsDialogOpen(true);
    setModelMessage(message);
  };

  const handleCloseModal = () => {
    setIsDialogOpen(false);
  };

  const updateRating = async (id) => {
    try {
      const { data } = await UPDATE_RATING(id, selectedRating);
      if (data) {
        setIsLoading(false);
        handleShowModal(data._Response__message);
        setSelectedRating(selectedRating);
      }
    } catch (error) {
      handleShowModal(error);
      setIsLoading(false);
    }
  };

  const handleEditClick = () => {
    setIsEditingRating(true);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const handleSaveClick = () => {
    setIsLoading(true);
    setIsEditingRating(false);
    updateRating(id);
  };

  const handleCancelClick = () => {
    setIsEditingRating(false);
    setSelectedRating(rating);
  };

  return (
    <>
      <div className="salary-card">
        <div className="salary-card-row">
          <div className="salary-card-label">Work experience:</div>
          <div className="salary-card-value">{workExperience}</div>
        </div>
        <div className="salary-card-row">
          <div className="salary-card-label">Education:</div>
          <div className="salary-card-value">{education}</div>
        </div>
        <div className="salary-card-row">
          <div className="salary-card-label">Company size:</div>
          <div className="salary-card-value">{companySize}</div>
        </div>
        <div className="salary-card-row">
          <div className="salary-card-label">Designation:</div>
          <div className="salary-card-value">{designation}</div>
        </div>
        <div className="salary-card-row">
          <div className="salary-card-label">Amount:</div>
          <div className="salary-card-value">{amount}</div>
        </div>
        <div className="salary-card-row">
          <div className="salary-card-label">Year of publish:</div>
          <div className="salary-card-value">{year}</div>
        </div>

        <div className="salary-card-row">
          <div className="salary-card-label">Inflation Rate:</div>
          <div className="salary-card-value">{inflationRate}</div>
        </div>

        <div className="salary-card-row">
          <div className="salary-card-label">Inflation amount:</div>
          <div className="salary-card-value">{inflationAmount}</div>
        </div>

        <div className="salary-card-row">
          <div className="salary-card-label">Rating:</div>
          {!isEditingRating ? (
            <div className="salary-card-value rating-container">
              {selectedRating ? selectedRating : rating}
              <span className="edit-icon" onClick={handleEditClick}>
                <EditIcon fontSize="small" className="editing-button" />
              </span>
            </div>
          ) : (
            <div className="salary-card-value rating-container editing">
              <select value={selectedRating} onChange={handleRatingChange}>
                {ratingOption}
              </select>
              <div className="edit-controls">
                <button className="save-button" onClick={handleSaveClick}>
                  Save
                </button>
                <button className="cancel-button" onClick={handleCancelClick}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
        <p>
          <b> Inflation amount:</b> Represent the Purchasing power of the slary
          recommendation adjusted to the new inflation rate calculation
        </p>
      </div>
      {isDialogOpen && (
        <Modal message={modelMessage} onClose={handleCloseModal} />
      )}
      {isLoading && <CustomLoader isLoading={isLoading} />}
    </>
  );
};

export default SalaryCard;
