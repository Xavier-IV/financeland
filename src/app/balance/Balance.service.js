import axios from 'axios';

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

const URL = `${API_ENDPOINT}/v1/balance`;

const fetchAll = function ({ params } = { params: null }) {
  return axios.get(URL, { params });
};

export default {
  fetchAll,
};
