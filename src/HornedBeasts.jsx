import "./App.css";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function HornedBeast({ title, image_url, description }) {
  const [showModal, setShowModal] = useState(false);
  const [favCount, setFavCount] = useState(0);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleFav = () => {
    setFavCount(favCount + 1);
  };

  return (
    <div>
      <h2>{title}</h2>
      <img
        src={image_url}
        alt={title}
        onClick={handleModal}
        style={{ width: "100px" }}
      />
      <p>{description}</p>
      
      {/* Favorite Button */}
      <Button variant="primary" onClick={handleFav}>
        Favorite ({favCount})
      </Button>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModal} centered>
        <Modal.Body>
          <img src={image_url} alt={title} style={{ width: "100%" }} />
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}