import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HornedBeasts from "./components/Horned-Beasts";

function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <HornedBeasts/>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
