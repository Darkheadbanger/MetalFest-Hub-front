function ModifyFestval({ festival = {} }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toDateTimeLocal = (iso) => {
    if (!iso) return '';
    // keep YYYY-MM-DDTHH:MM
    return iso.substring(0, 16);
  };

  const lineup = festival.lineup || festival.featureBands || [];

  return (
    <div className="festival-connexion">
      <div className="addfestival-container">
        <h2>Edit Festival</h2>
        <form onSubmit={handleSubmit} className="addfestival-forms" encType="multipart/form-data">
          <section className="festival-section">
            {/* Identifiant (généré par le backend, peut rester vide pour création) */}
            <input type="hidden" name="_id" defaultValue={festival._id || ''} />

            <div className="input-festival">
              <label htmlFor="festivalName">Festival Name *</label>
              <input id="festivalName" name="festivalName" type="text" required placeholder="der" defaultValue={festival.festivalName || ''} />
            </div>

            <div className="input-festival">
              <label htmlFor="festivalLocation">Location *</label>
              <input id="festivalLocation" name="festivalLocation" type="text" required placeholder="Grenoble" defaultValue={festival.festivalLocation || ''} />
            </div>

            <div className="input-festival">
              <label htmlFor="festivalDate">Date *</label>
              <input id="festivalDate" name="festivalDate" type="datetime-local" required defaultValue={toDateTimeLocal(festival.festivalDate || festival.date)} />
            </div>

            <div className="input-festival">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" min="0" step="0.01" placeholder="666" defaultValue={festival.price ?? ''} />
            </div>

            <div className="input-festival">
              <label>Lineup / Featured Acts</label>
              <input name="lineup[]" type="text" placeholder="Act 1" defaultValue={lineup[0] || ''} />
              <input name="lineup[]" type="text" placeholder="Act 2" defaultValue={lineup[1] || ''} />
              <input name="lineup[]" type="text" placeholder="Act 3" defaultValue={lineup[2] || ''} />
              <label htmlFor="lineupText">Other acts (comma separated)</label>
              <textarea id="lineupText" name="lineupText" rows="2" placeholder="Act A, Act B" defaultValue={(lineup.length > 0) ? lineup.join(', ') : ''}></textarea>
            </div>

            <div className="input-festival">
              <label htmlFor="image">Image URL</label>
              <input id="image" name="image" type="url" placeholder="http://localhost:5005/images/....png" defaultValue={festival.image || ''} />
            </div>
            <div className="input-festival">
              <label htmlFor="imageFile">Or upload image</label>
              <input id="imageFile" name="imageFile" type="file" accept="image/*" />
            </div>

            <div className="input-festival">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" rows="5" placeholder="festival of the death metal" defaultValue={festival.description || ''}></textarea>
            </div>

            <div className="input-festival">
              <label htmlFor="createdAt">Created At</label>
              <input id="createdAt" name="createdAt" type="datetime-local" defaultValue={toDateTimeLocal(festival.createdAt)} />
            </div>

            <div className="input-festival">
              <label htmlFor="updatedAt">Updated At</label>
              <input id="updatedAt" name="updatedAt" type="datetime-local" defaultValue={toDateTimeLocal(festival.updatedAt)} />
            </div>

            <input type="hidden" name="__v" value="0" />

            <div className="input-festival">
              <button type="submit">Save Changes</button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default ModifyFestval;
