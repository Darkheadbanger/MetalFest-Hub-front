import {Routes, Route} from "react-router-dom"
import HomePage from "./layouts/HomePage.layout.jsx";
import FestivalPage from "./layouts/FestivalPage.layout.jsx";
import ErrorPage from "./layouts/ErrorPage.layout.jsx"
import FestivalIdPage from "./layouts/FestivalIdPage.layout.jsx";
import AddFestival from "./layouts/AddFestival.layout.jsx"
import UpdateFestival from "./layouts/UpdateFestival.layout.jsx";

// function Routers({festival, setFestival}: {festival: any, setFestival: any}) {
function Routers({festival, setFestival}: {festival: any, setFestival: any}) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage bands={festival}/> }/>
        <Route path="/festival" element={<BandsPage bands={festival} setBands={setFestival}/>} />
        <Route path="/festival/:festivalId" element={<BandsIdPage bands={festival} setBands={setFestival}/>} />
        <Route path="/addFestival" element={<AddBand bands={festival} setBands={setFestival}/>} />
        <Route path="/updateFestival/:festivalId" element={<UpdateBand bands={bands} setBands={setFestival}/>} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default Routers
