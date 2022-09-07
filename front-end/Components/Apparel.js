import React from "react";
import "../Styles/Stylin.css";

function Apparel({ apparel }) {
  return (
    <div className="Apparel">
      <a href={`/apparels/${apparel.id}`}>
        <img
          className="apparelImage"
          src={apparel.image}
          alt={apparel.name}
        ></img>

        <h4>
          <span>{apparel.name}</span>
        </h4>
      </a>
    </div>
  );
}

export default Apparel;
