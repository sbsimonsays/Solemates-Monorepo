import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../Styles/Stylin.css";

const API = process.env.REACT_APP_API_URL;

function EditApparel() {
  const { id } = useParams();
  let navigate = useNavigate();

  const [apparel, setApparel] = useState({
    name: "",
    shoesize: 0,
    budget: 0,
    color: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/apparels/${id}`)
      .then((res) => setApparel(res.data.payload))
      .catch((err) => console.error(err));
  }, [id, navigate]);

  const handleTextChange = (event) => {
    setApparel({ ...apparel, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setApparel({
      ...apparel,
      [event.target.id]: Number(event.target.value),
    });
  };

  const editApparel = (updatedApparel) => {
    axios
      .put(`${API}/apparels/${id}`, updatedApparel)
      .then(
        () => {
          navigate(`/apparels`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editApparel(apparel);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={apparel.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Brand/Name"
          required
        />
        <br></br>
        <label htmlFor="shoesize">Shoe Size:</label>
        <input
          id="shoesize"
          type="number"
          value={apparel.shoesize}
          placeholder="What's Your Shoe Size?"
          onChange={handleNumberChange}
        />
        <br></br>
        <label htmlFor="budget">Budget:</label>
        <input
          id="budget"
          type="number"
          name="budget"
          value={apparel.budget}
          placeholder="Love Don't Cost A Thing, But..."
          onChange={handleNumberChange}
        />
        <br></br>
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          type="text"
          name="color"
          value={apparel.color}
          placeholder="Color to Match With?"
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          value={apparel.image}
          type="text"
          placeholder="URL of Item"
          onChange={handleTextChange}
          required
        />
        <br />
        <input type="submit" />
        <br></br>
        <Link to={`/apparels/${id}`}>
          <button>NEVERMIND</button>
        </Link>
      </form>
    </div>
  );
}

export default EditApparel;
