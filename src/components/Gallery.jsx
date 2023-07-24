import React from "react";
import hornedBeastsData from "../Data/hornedBeastsData"; 

import HornedBeast from "./HornedBeasts";

const Gallery = () => {

  const hornedBeasts = hornedBeastsData.map((beast) => (
    <HornedBeast
      key={beast._id}
      title={beast.title}
      image_url={beast.image_url}
      description={beast.description}
    />
  ));

  return <div>{hornedBeasts}</div>;
};

export default Gallery;
