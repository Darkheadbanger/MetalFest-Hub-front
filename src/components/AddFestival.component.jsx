import "../styles/addFestival.css"

function AddFestival() {
  const submitFestival = (e) => {
    e.preventDefault();
  };

  return (
    <div className="festival-connexion">
      <div className="addfestival-container">
        <h2>Add New Festival</h2>
        <form onSubmit={submitFestival} className="addfestival-forms" encType="multipart/form-data">
          <section className="festival-section">
            {/* Identifiant (généré par le backend, peut rester vide pour création) */}
            <input type="hidden" name="_id" value="" />

            <div className="input-festival">
              <label htmlFor="festivalName">Festival Name *</label>
              <input id="festivalName" name="festivalName" type="text" required placeholder="der" />
            </div>

            <div className="input-festival">
              <label htmlFor="festivalLocation">Location *</label>
              <input id="festivalLocation" name="festivalLocation" type="text" required placeholder="Grenoble" />
            </div>

            <div className="input-festival">
              <label htmlFor="festivalDate">Date *</label>
              <input id="festivalDate" name="festivalDate" type="date" required />
            </div>

            <div className="input-festival">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" min="0" step="0.01" placeholder="666" />
            </div>

            <div className="input-festival">
              <label>Lineup / Featured Acts</label>
              <input name="lineup[]" type="text" placeholder="Act 1" />
              <input name="lineup[]" type="text" placeholder="Act 2" />
              <input name="lineup[]" type="text" placeholder="Act 3" />
            </div>

            <div className="input-festival">
              <label htmlFor="image">Image URL</label>
              <input id="image" name="image" type="url" placeholder="http://localhost:5005/images/....png" />
            </div>
            <div className="input-festival">
              <label htmlFor="imageFile">Or upload image</label>
              <input id="imageFile" name="imageFile" type="file" accept="image/*" />
            </div>

            <div className="input-festival">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" rows="5" placeholder="festival of the death metal"></textarea>
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
