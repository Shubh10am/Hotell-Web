import React from "react";
import { useParams } from "react-router-dom";

const PropertyPage = ({ properties }) => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div className="alert alert-danger">Property not found.</div>;
  }

  return (
    <div className="container property-page">
      <div className="row">
        <div className="col-md-6">
          <img src={property.image} alt={property.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="mt-4">{property.name}</h2>
          <p>{property.city}</p>
          <p>Price: ${property.price}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
