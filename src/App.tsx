import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Header";
import { AllRoute } from "./Routes/AllRoute";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
