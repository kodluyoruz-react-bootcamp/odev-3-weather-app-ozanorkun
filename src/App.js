import React from "react";
import CardBody from "./components/CardBody";
import Footer from "./components/Footer";
import "./App.css";
import Dropdown from "./components/Dropdown";
import { ForecastProvider } from "./contexts/ForecastContext";

function App() {
  return (
    <>
      <div className="padding">
        <div className="row">
          <ForecastProvider>
            <Dropdown />
            <CardBody />
          </ForecastProvider>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
