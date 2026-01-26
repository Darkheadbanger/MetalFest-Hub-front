import {Routes, Route} from "react-router-dom"
import HomePage from "./layouts/HomePage.layout.jsx";
import FestivalPage from "./layouts/FestivalPage.layout.jsx";
import ErrorPage from "./layouts/ErrorPage.layout.jsx"
import FestivalIdPage from "./layouts/FestivalIdPage.layout.jsx";
import AddFestival from "./layouts/AddFestival.layout.jsx"
import UpdateFestival from "./layouts/UpdateFestival.layout.jsx";

// function Routers({festival, setFestival}: {festival: any, setFestival: any}) {
function Routers({festival, setFestival}) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage festival={festival}/> }/>
        <Route path="/festival" element={<festivalPage festival={festival} setfestival={setFestival}/>} />
        <Route path="/festival/:festivalId" element={<festivalIdPage festival={festival} setfestival={setFestival}/>} />
        <Route path="/addFestival" element={<AddBand festival={festival} setfestival={setFestival}/>} />
        <Route path="/updateFestival/:festivalId" element={<UpdateBand festival={festival} setfestival={setFestival}/>} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default Routers
