import "../App.css";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function HornedBeasts({ title, image_url, description }) {
  const [showModal, setShowModal] = useState(false);
  const [favCount, setFavCount] = useState(0); // State for the favorite counter

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleFav = () => {
    setFavCount(favCount + 1); // Increment the favorite counter when clicked
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
      <p>Favorite Count: {favCount}</p> {/* Display the favorite count */}
      <button onClick={handleFav}>Favorite</button> {/* Favorite counter button */}
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