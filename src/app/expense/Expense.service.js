import axios from 'axios';

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

const URL = `${API_ENDPOINT}/v1/expense`;

const fetchAll = function ({ params } = { params: null }) {
  return axios.get(URL, { params });
};

const create = function (payload) {
  return axios.post(URL, payload);
};

const fetchOne = function (id) {
  return axios.get(`${URL}/${id}`);
};

const update = function (id, payload) {
  return axios.put(`${URL}/${id}`, payload);
};

const destroy = function (id) {
  return axios.delete(`${URL}/${id}`);
};

export default {
  fetchAll,
  fetchOne,
  create,
  update,
  destroy,
};
