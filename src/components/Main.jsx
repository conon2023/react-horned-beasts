import React from "react";
import HornedBeasts from "./HornedBeasts"; 

export default function Main({ data, handleModal, handleFav, favCounts }) {
  return (
    <div className="card--container">
      {data.map((beast, index) => (
        <HornedBeasts
          key={index}
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
          handleModal={handleModal}
          handleFav={handleFav}
          fav={favCounts[beast.title] || 0}
        />
      ))}
    </div>
  );
}