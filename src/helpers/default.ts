import axios from "axios";

const BASE_ENDPOINT = `http://api.kcisa.kr/API_CNV_045/request?serviceKey=${import.meta.env.VITE_SERVICE_KEY}`;

const api = axios.create({
  baseURL: BASE_ENDPOINT
});

export default api;