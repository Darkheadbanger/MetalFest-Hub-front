import Logo from "./Logo.component";
import Authentification from "./Authentification.components";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="festival-information">
          <Logo />
          <div className="info-festival">Metal Festival Hub</div>
        </div>
        <div className="festival-connexion">
          <Authentification />
        </div>
      </div>
    </header>
  );
}

