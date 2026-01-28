import api from "./api";

 const getAllFestival = () => {
  return api.get("/festival/");
};

export default { getAllFestival };
