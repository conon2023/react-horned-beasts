import React from "react";
import HornedBeasts from "./Horned-Beasts";
import Data from "../Data.json";

function Main() {
  return (
    <main>
      <HornedBeasts title = {Data[0].title} image = {Data[0].image_url} description = {Data[0].description}/>
      <HornedBeasts title = {Data[1].title} image = {Data[1].image_url} description = {Data[1].description}/>
      <HornedBeasts title = {Data[2].title} image = {Data[2].image_url} description = {Data[2].description}/>
      <HornedBeasts title = {Data[3].title} image = {Data[3].image_url} description = {Data[3].description}/>
      <HornedBeasts title = {Data[4].title} image = {Data[4].image_url} description = {Data[4].description}/>
      <HornedBeasts title = {Data[5].title} image = {Data[5].image_url} description = {Data[5].description}/>
      <HornedBeasts title = {Data[6].title} image = {Data[6].image_url} description = {Data[6].description}/>
      <HornedBeasts title = {Data[7].title} image = {Data[7].image_url} description = {Data[7].description}/>
      <HornedBeasts title = {Data[8].title} image = {Data[8].image_url} description = {Data[8].description}/>
      <HornedBeasts title = {Data[9].title} image = {Data[9].image_url} description = {Data[9].description}/>
      <HornedBeasts title = {Data[10].title} image = {Data[10].image_url} description = {Data[10].description}/>
      <HornedBeasts title = {Data[11].title} image = {Data[11].image_url} description = {Data[11].description}/>
      <HornedBeasts title = {Data[12].title} image = {Data[12].image_url} description = {Data[12].description}/>
      <HornedBeasts title = {Data[13].title} image = {Data[13].image_url} description = {Data[13].description}/>
      <HornedBeasts title = {Data[14].title} image = {Data[14].image_url} description = {Data[14].description}/>
      <HornedBeasts title = {Data[15].title} image = {Data[15].image_url} description = {Data[15].description}/>
      <HornedBeasts title = {Data[16].title} image = {Data[16].image_url} description = {Data[16].description}/>
      <HornedBeasts title = {Data[17].title} image = {Data[17].image_url} description = {Data[17].description}/>
      <HornedBeasts title = {Data[18].title} image = {Data[18].image_url} description = {Data[18].description}/>
      <HornedBeasts title = {Data[19].title} image = {Data[19].image_url} description = {Data[19].description}/>

    </main>
  );
}
export default Main;
