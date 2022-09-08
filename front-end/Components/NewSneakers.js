import React from "react";
import axios from "axios";
import { useState } from "react";
import Sneakers from "./Sneakers";
import "../Styles/Stylin.css";

function NewSneakers() {
  const [sneakers, setSneakers] = useState([]);
  const [visibility, setVisibility] = useState(false);

  const getNewSneakers = () => {
    const options = {
      method: "GET",
      url: "https://the-sneaker-database.p.rapidapi.com/sneakers",
      params: { limit: "88", colorway: colorway, gender: gender },
      headers: {
        "X-RapidAPI-Key": "3721c4154bmshf8b8fa402318928p17d369jsn6e4b19186f45",
        "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSneakers(response.data.results);
        // console.log(response.data);
        // console.log(response.data.results[2].name) -- "Air Jordan 7 Retro 'Cardinal' 2022"
        // name and thumbnail.size - what I need for SneakerIndex to display in grid fashion
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const [colorway, setColorway] = useState("");
  const handleColorChange = (event) => {
    setColorway(event.target.value);
  };

  const [gender, setGender] = useState("");
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setVisibility(true);
    getNewSneakers(sneakers);
  };

  return (
    <div className="NewPageDiv">
      <br></br>
      <h1>FIND YOUR SOLEMATE</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="gender"
          value={gender}
          type="text"
          placeholder="Men or Women?"
          onChange={handleGenderChange}
          required
        />
        <input
          id="colorway"
          value={colorway}
          type="text"
          placeholder="Color(s)?"
          onChange={handleColorChange}
          required
        />
        <br></br>
        <input type="submit" />
        <br></br>
      </form>

      {visibility ? <Sneakers sneakers={sneakers} /> : null}
    </div>
  );
}

export default NewSneakers;
