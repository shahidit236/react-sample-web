import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Boxes from "./components/Boxes/Boxes";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Boxes />
      <Boxes />
      <Footer />
    </div>
  );
};
export default App;
