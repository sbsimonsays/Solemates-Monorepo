import React from "react";
import Sneaker from "../Components/Sneaker";
import "../Styles/Stylin.css";

function Sneakers({ sneakers }) {
  return (
    <div className="Apparels">
      <section className="apparelGrid">
        {sneakers.map((sneaker) => (
          <Sneaker key={sneaker.id} sneaker={sneaker} />
        ))}
      </section>
    </div>
  );
}

export default Sneakers;
