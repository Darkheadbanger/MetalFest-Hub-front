import "../styles/DeleteButton.css";
import { deleteFestival } from "../services/festival.service";
import { useNavigate } from "react-router-dom";

function DeleteButton({ festival, setFestivals }) {
  const navigate = useNavigate();

  const deleteButton = async (event) => {
    event.preventDefault();
    if (!window.confirm(`Delete ${festival.festivalName}?`)) return;

    try {
      await deleteFestival(festival._id);
      if (setFestivals) {
        setFestivals((prevFest) => (Array.isArray(prevFest) ? prevFest.filter((f) => f._id !== festival._id) : prevFest));
      }
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Erreur lors de la suppression");
    }
  };

  return (
    <div className="delete-festival delete-festival--full">
      <button type="button" onClick={deleteButton}>Delete ❌</button>
    </div>
  );
}

export default DeleteButton;
