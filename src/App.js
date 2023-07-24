import React from "react";
import SelectedBeast from "./components/SelectedBeast";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Data from "./Data.json";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Gallery from "./components/Gallery";
import hornedBeastsData from "./Data/hornedBeastsData";
import HornedBeast from "./components/HornedBeasts";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [favCounts, setFavCounts] = useState({});

  
  const App = () => {
    const [favoriteCount, setFavoriteCount] = useState(0);
  
    // Function to update the favoriteCount state
    const updateFavoriteCount = (count) => {
      setFavoriteCount(count);
    };
  
    return (
      <div>
        <h1>Gallery App</h1>
        <Gallery updateFavoriteCount={updateFavoriteCount} />
        <p>Total favorites: {favoriteCount}</p>
      </div>
    );
  };
  
  const Gallery = ({ updateFavoriteCount }) => {
    const handleFavoriteClick = () => {
    updateFavoriteCount((prevCount) => prevCount + 1);
    };
  
    const hornedBeasts = hornedBeastsData.map((beast) => (
      <HornedBeast
        key={beast._id}
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        onFavoriteClick={handleFavoriteClick} // Pass the click handler to HornedBeast
      />
    ));
  
    return <div>{hornedBeasts}</div>;
  };
  
  
  const HornedBeast = ({ title, image_url, description, onFavoriteClick }) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleModal = () => setShowModal(!showModal);
  
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
        <Button variant="primary" onClick={onFavoriteClick}>
          Favorite
        </Button>
      </div>
    );
  };

  function handleModal(beast) {
    setShowModal(true);
    setModalContent(beast);
  }

  function closeModal() {
    setShowModal(false);
    setModalContent({});
  }

  function handleFav(title) {
    setFavCounts((prevFavCounts) => ({
      ...prevFavCounts,
      [title]: (prevFavCounts[title] || 0) + 1,
    }));
  }

  return (
    <div className="App">
      <Header />
      <Main data={Data} handleModal={handleModal} handleFav={handleFav} favCounts={favCounts} />
      {showModal && (
        <SelectedBeast
          modalContent={modalContent}
          closeModal={closeModal}
          showModal={showModal}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;