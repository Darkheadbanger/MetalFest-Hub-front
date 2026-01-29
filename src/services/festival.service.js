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

const updateFestival = (id, formData) => {
  // formData may be FormData when including files
  return api.put(`/festival/${id}`, formData);
};

const deleteFestival = (id) => {
  return api.delete(`/festival/${id}`);
};
export { deleteFestival };

export default {
  getAllFestival,
  getFestivalById,
  createFestival,
  updateFestival,
  deleteFestival,
};
