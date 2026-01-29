import api from "./api";

const getAllFestival = () => {
  return api.get("/festival/");
};

const getFestivalById = (id) => {
  return api.get(`/festival/${id}`);
};

const createFestival = (formData) => {
  // formData is expected to be a FormData instance when including files
  // Let axios/browser set the Content-Type and boundary for multipart/form-data
  return api.post(`/festival`, formData);
};

export default { getAllFestival, getFestivalById, createFestival };
