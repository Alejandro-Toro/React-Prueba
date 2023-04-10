import { Link } from "react-router-dom";
import { FaHouseDamage } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="containerNavbar">
      <h1>Grandma's bakery</h1>
      <div className="divLinks">
        <Link to="/" className="linkHome">
          <FaHouseDamage className="icone" />
          Home
        </Link>
        <Link to="/contacto" className="linkContact">
          <FaHandPaper className="icone" />
          Contact us
        </Link>
      </div>
    </div>
  );
}
