import axios from "axios";

export const api = axios.create({
  baseURL: "https://nodedeploy-api-rok8.onrender.com/",
});