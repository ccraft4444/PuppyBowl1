import { Link } from "react-router-dom";
import NewDogForm from "./NewDogForm";
import "../Styles/NavBar.css";

function NavBar() {
  return (
    <nav className="Nav">
      <Link to="/" className="home">
        To Home
      </Link>
      <Link to="/newDogForm" className="form">
        To Create Dog
      </Link>
    </nav>
  );
}

export default NavBar;
