import React, { useState } from "react";
import '../App.css'


export default function HornedBeasts({ title, image_url, description }) {
  const [fav, setfav] = useState (0);

  function handleFav (){
     setfav(fav + 1);
  }
  return (
    <div className="parent">
      <div>
        <h2>{title}</h2>
        <img src={image_url} alt={title} className="image-size"></img>
        <h3>{description}</h3>
      </div>
      <p>
        <span className="heart" onClick={handleFav}>
        ❤️
        </span>
        <span>{fav} {fav === 1 ? "Favorite" : "Favorites"}</span>
      </p>
    </div>
  );
}