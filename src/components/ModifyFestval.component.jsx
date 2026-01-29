import "../styles/modifyFestival.css";
import { useParams, useNavigate } from "react-router-dom";
import festivalService from "../services/festival.service";
import React, { useState } from "react";

function ModifyFestval({ festival, setFestivals }) {
  const navigate = useNavigate();
  const { id } = useParams();

  // `festival` prop may be an array (named `festivals` upstream) or a single object.
  const fest = festival.find((f) => f._id === id);

  if (!festival) return <div>Loading festival...</div>;

  const [formData, setFormData] = useState({
    festivalName: fest.festivalName || "",
    festivalLocation: fest.festivalLocation || "",
    festivalDate: fest.festivalDate || "",
    price: fest.price || 0,
    featureBands: fest.featureBands || [],
    featureBandsText: (fest.featureBands || []).join(", "),
    imageFile: null,
    description: fest.description || "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevFestival) => ({ ...prevFestival, imageFile: files[0] || null }));
      return;
    }
    if (type === "number") {
      setFormData((prevFestival) => ({
        ...prevFestival,
        [name]: value === "" ? "" : Number(value),
      }));
      return;
    }
    setFormData((prevFestival) => ({ ...prevFestival, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.festivalName) {
      alert("You must enter the festival name!");
      return;
    }

    const bandsList = (formData.featureBandsText || "")
      .split(",")
      .map((bands) => bands.trim())
      .filter((bands) => bands.trim());

    const festivalPayload = {
      festivalName: formData.festivalName,
      festivalLocation: formData.festivalLocation,
      festivalDate: formData.festivalDate,
      price: formData.price,
      description: formData.description,
      featureBands: bandsList,
    };

    const body = new FormData();
    body.append("festival", JSON.stringify(festivalPayload));
    if (formData.imageFile) body.append("image", formData.imageFile);

    try {
      const resFestival = await festivalService.updateFestival(fest._id, body);
      const updated = resFestival.data?.festival || resFestival.data;
      if (setFestivals && updated) {
        setFestivals((prev) => prev.map((f) => (f._id === id ? updated : f)));
      }
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Erreur lors de la mise à jour");
    }
  };

  const toDateTimeLocal = (iso) => {
    if (!iso) return "";
    return iso.substring(0, 16);
  };


  return (
    <div className="modify-festival-connexion">
      <div className="modifyfestival-container">
        <h2>Edit Festival</h2>
        <form
          onSubmit={handleSubmit}
          className="modifyfestival-forms"
          encType="multipart/form-data"
        >
          <section className="modify-festival-section">
            {/* Identifiant (généré par le backend, peut rester vide pour création) */}
            <input type="hidden" name="_id" defaultValue={fest._id || ""} />

            <div className="modify-input-festival">
              <label htmlFor="festivalName">Festival Name *</label>
              <input
                id="festivalName"
                name="festivalName"
                type="text"
                required
                placeholder="der"
                value={formData.festivalName}
                onChange={handleChange}
              />
            </div>

            <div className="modify-input-festival">
              <label htmlFor="festivalLocation">Location *</label>
              <input
                id="festivalLocation"
                name="festivalLocation"
                type="text"
                required
                placeholder="Grenoble"
                value={formData.festivalLocation}
                onChange={handleChange}
              />
            </div>

            <div className="modify-input-festival">
              <label htmlFor="festivalDate">Date *</label>
              <input
                id="festivalDate"
                name="festivalDate"
                type="datetime-local"
                required
                value={toDateTimeLocal(formData.festivalDate)}
                onChange={handleChange}
              />
            </div>

            <div className="modify-input-festival">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="666"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className="modify-input-festival">
              <label>Lineup / Featured Acts (comma separated)</label>
              <input
                name="featureBandsText"
                type="text"
                placeholder="mayhem, dodheimsgard"
                value={formData.featureBandsText}
                onChange={handleChange}
              />
            </div>

            {/* <div className="modify-input-festival">
              <label>Lineup / Featured Acts</label>
              <input
                name="lineup[]"
                type="text"
                placeholder="Act 1"
                defaultValue={lineup[0] || ""}
              />
              <input
                name="lineup[]"
                type="text"
                placeholder="Act 2"
                defaultValue={lineup[1] || ""}
              />
              <input
                name="lineup[]"
                type="text"
                placeholder="Act 3"
                defaultValue={lineup[2] || ""}
              />
              <label htmlFor="lineupText">Other acts (comma separated)</label>
              <textarea
                id="lineupText"
                name="lineupText"
                rows="2"
                placeholder="Act A, Act B"
                defaultValue={lineup.length > 0 ? lineup.join(", ") : ""}
              ></textarea>
            </div> */}

            <div className="modify-input-festival">
              <label htmlFor="imageFile">Upload image</label>
              <input
                id="imageFile"
                name="imageFile"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
            </div>

            <div className="modify-input-festival">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows="5"
                placeholder="festival of the death metal"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* createdAt/updatedAt intentionally omitted for edit form */}

            <input type="hidden" name="__v" value="0" />

            <div className="modify-input-festival modify-input-festival--full">
              <button type="submit">Save Changes</button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default ModifyFestval;
