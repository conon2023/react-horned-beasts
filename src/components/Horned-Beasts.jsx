import React from "react";

function HornedBeasts({ title, image, description }) {
  return (
    <div className="main-content">
      <div>
        <h2>{title}</h2>
        <img src={image} alt={description} className="image-size"></img>
        <h3>{description}</h3>
      </div>
    </div>
  );
}

export default HornedBeasts;
