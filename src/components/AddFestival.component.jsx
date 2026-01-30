import "../styles/addFestival.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import festivalService from "../services/festival.service";

function AddFestival({ setFestivals }) {
  const navigate = useNavigate(); 


  const [formData, setFormData] = useState({
    festivalName: "",
    festivalLocation: "",
    festivalDate: "",
    price: 0,
    featureBands: [],
    featureBandsText: "",
    image: null,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((data) => ({ ...data, imageFile: files[0] || null }));
      return;
    }

    // keep the raw text while editing; convert to array when submitting

    if (type === "number") {
      setFormData((data) => ({ ...data, [name]: value === "" ? "" : Number(value) }));
      return;
    }

    setFormData((data) => ({ ...data, [name]: value }));
  };

    const submitFestival = async (e) => {
    e.preventDefault();
      // enforce image presence client-side if backend requires it
      if (!formData.imageFile) {
        alert("Please upload an image before creating a festival.");
        return;
      }
    const body = new FormData();

    const bands = (formData.featureBandsText || "")
      .split(",")
      .map((band) => band.trim())
      .filter((band) => band.trim());

    // Some backends expect a single JSON field (e.g. `festival`) and the file separately.
    const festivalPayload = {
      festivalName: formData.festivalName,
      festivalLocation: formData.festivalLocation,
      festivalDate: formData.festivalDate,
      price: formData.price,
      description: formData.description,
      featureBands: bands,
    };

    body.append("festival", JSON.stringify(festivalPayload));
    if (formData.imageFile) {
      body.append("image", formData.imageFile)
    }
    // Debug: log FormData contents and auth token to help diagnose server errors in prod
    try {
      const entries = [];
      for (const pair of body.entries()) {
        // avoid dumping binary file contents; show file name instead
        if (pair[1] instanceof File) entries.push([pair[0], pair[1].name]);
        else entries.push(pair);
      }
      console.debug("Creating festival - FormData entries:", entries);
      console.debug("authToken:", localStorage.getItem("authToken"));
    } catch (logErr) {
      console.debug("FormData debug failed", logErr);
    }
    try {
      const res = await festivalService.createFestival(body);
      // backend returns created festival under `festival` or directly
      const created = res.data?.festival || res.data;
      if (setFestivals && created) {
        // `festivals` is initialized as an array in App, so we can simply prepend
        setFestivals((prevFestival) => [created, ...prevFestival]);
      }
      navigate("/");
    } catch (err) {
      console.error(err.response?.data || err.message || err);
      const serverMsg = err.response?.data?.message || err.response?.data || err.message;
      alert(serverMsg || "Erreur lors de la création du festival");
    }
  };


  return (
    <div className="festival-connexion">
      <div className="addfestival-container">
        <h2>Add New Festival</h2>
        <form
          onSubmit={submitFestival}
          className="addfestival-forms"
          encType="multipart/form-data"
        >
          <section className="festival-section">
            {/* Identifiant (généré par le backend, peut rester vide pour création) */}
            <input type="hidden" name="_id" value="" />

            <div className="input-festival">
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

            <div className="input-festival">
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

            <div className="input-festival">
              <label htmlFor="festivalDate">Date *</label>
              <input
                id="festivalDate"
                name="festivalDate"
                type="date"
                required
                value={formData.festivalDate}
                onChange={handleChange}
              />
            </div>

            <div className="input-festival">
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

            <div className="input-festival">
              <label>Lineup / Featured Acts (comma separated)</label>
              <input
                name="featureBandsText"
                type="text"
                placeholder="mayhem, dodheimsgard"
                value={formData.featureBandsText}
                onChange={handleChange}
              />
            </div>

            <div className="input-festival">
              <label htmlFor="imageFile">Upload image</label>
              <input
                id="imageFile"
                name="imageFile"
                type="file"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-festival">
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

            <input type="hidden" name="__v" value="0" />

            <div className="input-festival input-festival--full">
              <button type="submit">Create Festival</button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default AddFestival;
