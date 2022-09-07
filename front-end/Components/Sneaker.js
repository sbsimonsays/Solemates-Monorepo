import React from "react";
import "../Styles/Stylin.css";

function Sneaker({ sneaker }) {
  return (
    <div className="Apparel">
      <img
        className="apparelImage"
        src={sneaker.image.thumbnail}
        alt={sneaker.name}
      ></img>
      <h4>
        <span>{sneaker.name}</span>
      </h4>
    </div>
  );
}

export default Sneaker;
