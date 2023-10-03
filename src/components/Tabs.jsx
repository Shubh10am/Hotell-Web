import React, { useState } from "react";

const Tabs = ({ cities, activeCity, onTabClick }) => {
  return (
    <div className="header">
      <ul className="nav nav-tabs">
        {cities.map((city) => (
          <li className="nav-item" key={city}>
            <button
              className={`nav-link ${activeCity === city ? "active" : ""}`}
              onClick={() => onTabClick(city)}
            >
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
