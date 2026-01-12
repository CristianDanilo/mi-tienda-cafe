import axios from 'axios';

const mainApi = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default mainApi;