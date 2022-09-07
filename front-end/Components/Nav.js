import { Link } from "react-router-dom";
import "../Styles/Stylin.css";

function Nav() {
  return (
    <div>
      <nav>
        <Link to="/" className="navApparels">
          SOLEMATES
        </Link>
        <Link to="/apparels/new">FIND YOUR SOULMATE!</Link>
      </nav>
    </div>
  );
}

export default Nav;
