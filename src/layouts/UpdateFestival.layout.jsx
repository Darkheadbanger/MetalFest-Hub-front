import ModifyFestval from "../components/ModifyFestval.component";
import Header from "../components/Header.component";
// import { useParams } from "react-router-dom";

function UpdateFestival({festivals, setFestivals}) {
  return (
    <>
      <Header />
      <ModifyFestval festival={festivals} setFestivals={setFestivals} />;
    </>
  );
}

export default UpdateFestival;
