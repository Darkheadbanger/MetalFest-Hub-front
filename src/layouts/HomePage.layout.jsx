import Header from "../components/Header.component";
import Main from "../components/Main.component";

export default function HomePage({
  festival,
  setFestival,
  festivals,
  setFestivals,
  loading,
  setLoading,
  error,
  setError,
  isLoggedIn,
}) {
  return (
    <>
      <Header />
      <Main
        festival={festival}
        setFestival={setFestival}
        festivals={festivals}
        setFestivals={setFestivals}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
}

