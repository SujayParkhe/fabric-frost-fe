import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5500/fabric-frost/api",
});

export default api;
