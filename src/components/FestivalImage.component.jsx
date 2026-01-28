export default function FestivalImage({ festival }) {
  console.log("festival:", festival);
  const imageRaw = festival?.image || festival?.FestivalImage || "";
  const imageWithSpace = imageRaw ? String(imageRaw).split(" ")[0] : "";
  const image = imageWithSpace ? encodeURI(imageWithSpace) : "";

  return (
    <div className="festival-image">
      {image ? <img src={image} alt={festival?.festivalName || "festival image"} /> :
             <div className="no-image">No image available</div>}
    </div>
  );
}