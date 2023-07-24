import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../components/HornedBeasts.css";

const SelectedBeast = ({ modalContent, closeModal, showModal }) => {
  const { title, image_url, description } = modalContent;

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image_url} alt={title} className="modal-image" />
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SelectedBeast;
