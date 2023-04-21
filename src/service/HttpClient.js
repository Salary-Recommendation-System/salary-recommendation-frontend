import axios from "axios";

export const instance = axios.create({
  baseURL:
    "https://salary-recommendation-system-backend-6ga7fkomia-de.a.run.app/",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin":
      "https://salary-recommendation-frontend-6ga7fkomia-uc.a.run.app/",
  },
});
