import {Routes, Route} from "react-router-dom"
import HomePage from "./layouts/HomePage.layout.jsx";
import FestivalPage from "./layouts/FestivalPage.layout.jsx";
import ErrorPage from "./layouts/ErrorPage.layout.jsx"
import FestivalIdPage from "./layouts/FestivalIdPage.layout.jsx";
import AddFestival from "./layouts/AddFestival.layout.jsx"
import UpdateFestival from "./layouts/UpdateFestival.layout.jsx";

// function Routers({festival, setFestival}: {festival: any, setFestival: any}) {
function Routers({ festival, setFestival }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage festival={festival} setFestival={setFestival} />} />
      <Route path="/festival" element={<FestivalPage festival={festival} setFestival={setFestival} />} />
      <Route path="/festival/:festivalId" element={<FestivalIdPage festival={festival} setFestival={setFestival} />} />
      <Route path="/addFestival" element={<AddFestival festival={festival} setFestival={setFestival} />} />
      <Route path="/updateFestival/:festivalId" element={<UpdateFestival festival={festival} setFestival={setFestival} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Routers
