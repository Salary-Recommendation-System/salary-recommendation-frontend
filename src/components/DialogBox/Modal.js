import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ message, onClose }) => {
  const handleOverlayClick = (event) => {
    event.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div className="dialog_overlay" onClick={handleOverlayClick}>
      <div className="dialog_box">
        <p className="dialog_message">{message}</p>
        <button className="dialog_button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
