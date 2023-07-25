import hornedBeastsData from "../Data/hornedBeastsData"; 
import HornedBeasts from "./HornedBeasts";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import FilterDropdown from "./FilterDropdown";

const Gallery = () => {
  const [selectedHornCount, setSelectedHornCount] = useState("all");

  const handleHornCountChange = (selectedCount) => {
    setSelectedHornCount(selectedCount);
  };

  const filteredHornedBeasts = selectedHornCount === "all"
    ? hornedBeastsData
    : hornedBeastsData.filter((beast) => beast.horns === parseInt(selectedHornCount));

  const hornedBeasts = filteredHornedBeasts.map((beast) => (
    <HornedBeast
      key={beast._id}
      title={beast.title}
      image_url={beast.image_url}
      description={beast.description}
    />
  ));

  return (
    <div>
      <FilterDropdown
        selectedHornCount={selectedHornCount}
        onHornCountChange={handleHornCountChange}
      />
      {hornedBeasts}
    </div>
  );
};

export default Gallery;


