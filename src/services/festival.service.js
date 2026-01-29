import api from "./api";

const getAllFestival = () => {
  return api.get("/festival/");
};

const getFestivalById = (id) => {
  return api.get(`/festival/${id}`);
};

export default { getAllFestival, getFestivalById };
