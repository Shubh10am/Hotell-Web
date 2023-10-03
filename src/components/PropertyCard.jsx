import React from "react";
import { Link } from "react-router-dom";
import './PropertyCard.css'; // Import the CSS file for styling and animations

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card card">
      <Link to={`/property/${property.id}`}>
        <img
          src={property.image}
          alt={property.name}
          className="card-img-top"
          style={{ maxWidth: "300px", height: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">{property.name}</h5>
          <p className="card-text">{property.city}</p>
          <p className="card-text">Price: ${property.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
