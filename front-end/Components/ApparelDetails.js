import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import React from "react";
import "../Styles/Stylin.css";

function ApparelDetails() {
  const [apparel, setApparel] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/apparels/${id}`).then((response) => {
      setApparel(response.data.payload);
    });
  }, [id, navigate, API]);

  const deleteApparel = () => {
    axios
      .delete(`${API}/apparels/${id}`)
      .then(() => {
        navigate(`/apparels`);
      })
      .catch((err) => console.error("catch", err));
  };

  const handleDelete = () => {
    deleteApparel();
  };

  return (
    <div className="apparelDetails">
      <article className="Apparels">
        <div>
          <h2>{apparel.name}</h2>
          <img
            className="ApparelImg"
            src={apparel.image}
            alt={apparel.name}
          ></img>
          {/* <h5>Shoe Size: {apparel.shoesize} </h5>
          <h5>Budget: ${apparel.budget} </h5>
          <h5>Color: {apparel.color} </h5> */}
        </div>
      </article>
      <div className="apparelNavi">
        <div>
          <Link to={`/apparels`}>
            <button>BACK</button>
          </Link>
        </div>
        <div>
          <Link to={`/apparels/${id}/edit`}>
            <button>EDIT</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default ApparelDetails;
