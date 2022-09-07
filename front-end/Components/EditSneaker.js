// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate, Link, useParams } from "react-router-dom";
// import "../Styles/Stylin.css";

// const API = process.env.REACT_APP_API_URL;

// function EditApparel() {
//   const { id } = useParams();
//   let navigate = useNavigate();

//   const [sneaker, setSneaker] = useState({
//     colorway: "",
//     limit: 0,
//   });

//   useEffect(() => {
//     axios
//       .get(`${API}/sneakers/${id}`)
//       .then((res) => setSneaker(res.data.payload))
//       .catch((err) => console.error(err));
//   }, [id, navigate]);

//   const handleTextChange = (event) => {
//     setSneaker({ ...sneaker, [event.target.id]: event.target.value });
//   };

//   const handleNumberChange = (event) => {
//     setSneaker({
//       ...sneaker,
//       [event.target.id]: Number(event.target.value),
//     });
//   };

//   const editSneaker = (updatedSneaker) => {
//     axios
//       .put(`${API}/sneakers/${id}`, updatedSneaker)
//       .then(
//         () => {
//           navigate(`/sneakers`);
//         },
//         (error) => console.error(error)
//       )
//       .catch((c) => console.warn("catch", c));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     editSneaker(sneaker);
//   };

//   return (
//     <div className="Edit">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="colorway">Color to Match With:</label>
//         <input
//           id="colorway"
//           value={sneaker.colorway}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Colorway?"
//           required
//         />
//         {/*<br></br>
//          <label htmlFor="shoesize">Shoe Size:</label>
//         <input
//           id="shoesize"
//           type="number"
//           value={apparel.shoesize}
//           placeholder="What's Your Shoe Size?"
//           onChange={handleNumberChange}
//         />
//         <br></br>
//         <label htmlFor="budget">Budget:</label>
//         <input
//           id="budget"
//           type="number"
//           name="budget"
//           value={apparel.budget}
//           placeholder="Love Don't Cost A Thing, But..."
//           onChange={handleNumberChange}
//         />
//         <br></br>
//         <label htmlFor="color">Color:</label>
//         <input
//           id="color"
//           type="text"
//           name="color"
//           value={apparel.color}
//           placeholder="Color to Match With?"
//           onChange={handleTextChange}
//         /> 
//         <br></br>
//         <label htmlFor="image">Image URL:</label>
//         <input
//           id="image"
//           value={apparel.image}
//           type="text"
//           placeholder="URL of Item"
//           onChange={handleTextChange}
//           required
//         />*/}
//         <br />
//         <input type="submit" />
//         <br></br>
//         <Link to={`/apparels/${id}`}>
//           <button>NEVERMIND</button>
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default EditApparel;
