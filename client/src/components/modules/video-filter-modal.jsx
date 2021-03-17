import React from "react";
import { Modal } from "react-bootstrap";

const VideoFilterModal = ({ handleClose, show, children }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        {children}
        <div className="card-body">
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default VideoFilterModal;
