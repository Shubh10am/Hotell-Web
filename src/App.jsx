import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tabs from "./components/Tabs";
import PropertyList from "./components/PropertyList";
import PropertyPage from "./components/PropertyPage";
import "./App.css";

import hotelsData from "./data/properties.json";

function App() {
  const [activeCity, setActiveCity] = useState("City 1");

  return (
    <Router>
      <div className="app">
        <h1>Hotel Listing</h1>
        <Tabs
          cities={["City 1", "City 2", "City 3", "City 4"]}
          activeCity={activeCity}
          onTabClick={setActiveCity}
        />
        <Routes>
          <Route path="/property/:id" element={<PropertyPage properties={hotelsData} />} />
          <Route path="/" element={<PropertyList properties={hotelsData} activeCity={activeCity} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
