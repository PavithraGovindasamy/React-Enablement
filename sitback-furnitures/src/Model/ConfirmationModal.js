import React from "react";
import "./ConfirmationModal.css"; 

const ConfirmationModal = ({ title, message, onConfirm, onCancel, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onCancel} className="btn btn-cancel">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn btn-confirm">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
