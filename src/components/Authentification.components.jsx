import { useState } from "react";
import Connexion from "../pages/Connexion.page";
import CreateAccount from "../pages/CreateAccount.page";

function Authentification() {
  const [mode, setMode] = useState("login");

  return (
    <aside className="connexion-container">


      {mode === "login" ? (
        <Connexion onSwitch={setMode} embedded />
      ) : (
        <CreateAccount onSwitch={setMode} embedded />
      )}
    </aside>
  );
}

export default Authentification;