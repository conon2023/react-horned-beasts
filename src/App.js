import React from "react";
import SelectedBeast from "./components/SelectedBeast";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Data from "./Data.json";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [favCounts, setFavCounts] = useState({});

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