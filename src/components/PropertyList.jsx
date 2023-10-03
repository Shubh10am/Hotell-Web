import React, { useState } from "react";
import PropertyCard from "./PropertyCard";

const itemsPerRow = 3;

const PropertyList = ({ properties, activeCity }) => {
  const [visibleProperties, setVisibleProperties] = useState(
    properties.filter((property) => property.city === activeCity).slice(0, itemsPerRow)
  );

  const showMoreProperties = () => {
    const currentVisibleCount = visibleProperties.length;
    const newVisibleProperties = properties
      .filter((property) => property.city === activeCity)
      .slice(currentVisibleCount, currentVisibleCount + itemsPerRow);
    setVisibleProperties([...visibleProperties, ...newVisibleProperties]);
  };

  return (
    <div className="property-list row">
      {visibleProperties.map((property) => (
        <div key={property.id} className="col-lg-4 col-md-6 col-sm-12">
          <PropertyCard property={property} />
        </div>
      ))}
      <div className="col-12">
        <button className="btn btn-primary" onClick={showMoreProperties}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default PropertyList;
