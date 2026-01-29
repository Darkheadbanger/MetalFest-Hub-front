import Header from "../components/Header.component"
import AddFestivalComponent from "../components/AddFestival.component";
 function AddFestival({festivals, setFestivals}) {
  return (
    <>
    <Header/>
    <AddFestivalComponent festivals={festivals} setFestivals={setFestivals}/>
    </>
  )
}

export default AddFestival;