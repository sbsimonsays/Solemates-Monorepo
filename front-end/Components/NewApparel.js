import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Stylin.css";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewApparel() {
  const nav = useNavigate();
  const [apparel, setApparel] = useState({
    name: "",
    shoesize: 0,
    budget: 0,
    color: "",
    image: "",
  });

  const addApparel = () => {
    axios
      .post(`${API}/apparels`, apparel)
      .then((response) => nav(`/apparels`))
      .catch((error) => console.error(error));
  };

  const handleTextChange = (event) => {
    setApparel({ ...apparel, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setApparel({
      ...apparel,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addApparel();
  };

  return (
    <div className="NewPageDiv">
      <h1>FIND YOUR SOLEMATE</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NAME:</label>
        <input
          id="name"
          value={apparel.name}
          type="text"
          placeholder="Brand/Name of Item"
          onChange={handleTextChange}
          required
        />
        <br></br>
        <label htmlFor="shoesize">SHOE SIZE:</label>
        <input
          id="shoesize"
          type="number"
          value={apparel.shoesize}
          placeholder="Shoe Size"
          onChange={handleNumberChange}
        />
        <br></br>
        <label htmlFor="budget">BUDGET:</label>
        <input
          id="budget"
          type="number"
          value={apparel.budget}
          placeholder="Love Don't Cost a Thing, but if it did..."
          onChange={handleNumberChange}
        />
        <br></br>
        <label htmlFor="color">COLOR:</label>
        <input
          id="color"
          type="text"
          value={apparel.color}
          placeholder="What's Your Color?"
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="image">IMAGE URL:</label>
        <input
          name="image"
          type="text"
          id="image"
          pattern="http[s]*://.+"
          value={apparel.image}
          placeholder="Gimme' Some HTTP"
          onChange={handleTextChange}
          required
        />
        <br></br>
        <input type="submit" />
        <br></br>
        <Link to={`/apparels`}>
          <button>NEVERMIND</button>
        </Link>
      </form>
    </div>
  );
}

export default NewApparel;
