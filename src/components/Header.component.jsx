import Logo from "./Logo.component";
import Authentification from "./Authentification.components";
import "../styles/header.css"
import { Link } from "react-router-dom";

 function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="festival-information">
          <Link to="/"> <Logo /></Link>
         <Link to="/"> <div className="info-festival">Metal Festival Hub</div></Link>
        </div>
        <div className="festival-connexion">
          <Authentification/>
        </div>
      </div>
    </header>
  );
}

export default Header;
