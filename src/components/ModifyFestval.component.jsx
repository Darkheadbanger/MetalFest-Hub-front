import "../styles/modifyFestival.css"
import { useParams, useNavigate } from "react-router-dom";

function ModifyFestval({ festival }) {
  const navigate = useNavigate();
  const { id } = useParams();

  // `festival` prop may be an array (named `festivals` upstream) or a single object.
  const fest = festival.find((f) => f._id === id);

  if (!festival || !fest) return <div>Loading festival...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toDateTimeLocal = (iso) => {
    if (!iso) return '';
    // keep YYYY-MM-DDTHH:MM
    return iso.substring(0, 16);
  };

  const lineup = fest.lineup || fest.featureBands || [];

  return (
    <div className="modify-festival-connexion">
      <div className="modifyfestival-container">
        <h2>Edit Festival</h2>
        <form onSubmit={handleSubmit} className="modifyfestival-forms" encType="multipart/form-data">
          <section className="modify-festival-section">
            {/* Identifiant (généré par le backend, peut rester vide pour création) */}
            <input type="hidden" name="_id" defaultValue={fest._id || ''} />

            <div className="modify-input-festival">
              <label htmlFor="festivalName">Festival Name *</label>
              <input id="festivalName" name="festivalName" type="text" required placeholder="der" defaultValue={fest.festivalName || ''} />
            </div>

            <div className="modify-input-festival">
              <label htmlFor="festivalLocation">Location *</label>
              <input id="festivalLocation" name="festivalLocation" type="text" required placeholder="Grenoble" defaultValue={fest.festivalLocation || ''} />
            </div>

            <div className="modify-input-festival">
              <label htmlFor="festivalDate">Date *</label>
              <input id="festivalDate" name="festivalDate" type="datetime-local" required defaultValue={toDateTimeLocal(fest.festivalDate)} />
            </div>

            <div className="modify-input-festival">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" min="0" step="0.01" placeholder="666" defaultValue={fest.price ?? ''} />
            </div>

            <div className="modify-input-festival">
              <label>Lineup / Featured Acts</label>
              <input name="lineup[]" type="text" placeholder="Act 1" defaultValue={lineup[0] || ''} />
              <input name="lineup[]" type="text" placeholder="Act 2" defaultValue={lineup[1] || ''} />
              <input name="lineup[]" type="text" placeholder="Act 3" defaultValue={lineup[2] || ''} />
              <label htmlFor="lineupText">Other acts (comma separated)</label>
              <textarea id="lineupText" name="lineupText" rows="2" placeholder="Act A, Act B" defaultValue={(lineup.length > 0) ? lineup.join(', ') : ''}></textarea>
            </div>

            <div className="modify-input-festival">
              <label htmlFor="imageFile">Upload image</label>
              <input id="imageFile" name="imageFile" type="file" accept="image/*" />
            </div>

            <div className="modify-input-festival">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" rows="5" placeholder="festival of the death metal" defaultValue={fest.description || ''}></textarea>
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
