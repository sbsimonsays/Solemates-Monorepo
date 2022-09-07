import React, { useState, useEffect } from "react";
import axios from "axios";
import Apparel from "../Components/Apparel";
import "../Styles/Stylin.css";

const API = process.env.REACT_APP_API_URL;

function Apparels() {
  const [apparels, setApparels] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/apparels`)
      .then((res) => {
        setApparels(res.data.payload);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Apparels">
      <section className="apparelGrid">
        {apparels.map((apparel) => (
          <Apparel key={apparel.id} apparel={apparel} />
        ))}
      </section>
    </div>
  );
}

export default Apparels;
