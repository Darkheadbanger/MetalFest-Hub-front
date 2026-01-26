import Logo from "./Logo.component";
import Authentification from "./Authentification.components";
import "../styles/header.css"

 function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="festival-information">
          <Logo />
          <div className="info-festival">Metal Festival Hub</div>
        </div>
        <div className="festival-connexion">
          <Authentification/>
        </div>
      </div>
    </header>
  );
}

export default Header;
