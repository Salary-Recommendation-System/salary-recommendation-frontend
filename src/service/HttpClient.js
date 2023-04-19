import axios from "axios";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
  timeout: 60000,
});
