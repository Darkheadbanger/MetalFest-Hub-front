import "../styles/deconnexion.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Deconnexion() {
  const { logout } = useContext(AuthContext) || {};
  const navigate = useNavigate();

  const handleLogout = () => {
    if (typeof logout === "function") {
      try {
        logout();
      } catch (e) {
        console.error(e);
      }
      navigate("/");
      window.location.reload();
    } else {
      // fallback: clear token and redirect
      try { localStorage.removeItem("authToken"); } catch (error) {console.error(error)}
      navigate("/");
      // small reload to ensure state cleared
      window.location.reload();
    }
  };

  return (
    <div className="deconnexion-container">
      <button className="deconnexion-btn" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}

export default Deconnexion;