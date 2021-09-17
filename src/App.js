import React from "react";
import NavBar from "./NavBar";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import FeaturesNav from "./FeaturesNav";
import Offer from "./Offer";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <FeaturesNav />
      <Offer />
      <About />
      <Contact />
    </>
  );
};
export default App;
