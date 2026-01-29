import {Routes, Route} from "react-router-dom"
import HomePage from "./layouts/HomePage.layout.jsx";
import FestivalPage from "./layouts/FestivalPage.layout.jsx";
import ErrorPage from "./layouts/ErrorPage.layout.jsx"
import FestivalIdPage from "./layouts/FestivalIdPage.layout.jsx";
import AddFestival from "./layouts/AddFestival.layout.jsx"
import UpdateFestival from "./layouts/UpdateFestival.layout.jsx";
import SignupPage from "./pages/CreateAccount.page.jsx"
import login from "./pages/Connexion.page.jsx"
// function Routers({festival, setFestival}: {festival: any, setFestival: any}) {
function Routers({
  festivals,
  setFestivals,
  loading,
  setLoading,
  error,
  setError,
  isLoggedIn,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            festivals={festivals}
            setFestivals={setFestivals}
            loading={loading}
            setLoading={setLoading}
            error={error}
            setError={setError}
            isLoggedIn={isLoggedIn}
          />
        }
      />
      <Route
        path="/festival"
        element={
          <FestivalPage
            festivals={festivals}
            setFestivals={setFestivals}
            loading={loading}
            setLoading={setLoading}
            error={error}
            setError={setError}
            isLoggedIn={isLoggedIn}
          />
        }
      />
      <Route
        path="/festival/:id"
        element={
          <FestivalIdPage
            festivals={festivals}
            setFestivals={setFestivals}
            loading={loading}
            setLoading={setLoading}
            error={error}
            setError={setError}
            isLoggedIn={isLoggedIn}
          />
        }
      />
      <Route
        path="/addFestival"
        element={
          <AddFestival
            festivals={festivals}
            setFestivals={setFestivals}
            loading={loading}
            setLoading={setLoading}
            error={error}
            setError={setError}
            isLoggedIn={isLoggedIn}
          />
        }
      />
      <Route
        path="/updateFestival/:id"
        element={
          <UpdateFestival
            festivals={festivals}
            setFestivals={setFestivals}
            loading={loading}
            setLoading={setLoading}
            error={error}
            setError={setError}
            isLoggedIn={isLoggedIn}
          />
        }
      />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<login />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Routers
