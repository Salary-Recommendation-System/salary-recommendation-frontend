import { instance } from "./HttpClient";
import url from "../utils/urls.json";

export const SAVE_SALARY_INFORMATION = (bodyContent) => {
  try {
    return instance.post(url.save_salary_base, JSON.stringify(bodyContent));
  } catch {
    console.log(" Error calling the salary save API");
  }
};

export const GET_RECOMMENDATION = (bodyContent) => {
  try {
    return instance.post(url.get_recommendation, JSON.stringify(bodyContent));
  } catch {
    console.log(" Error calling the get recommendation API");
  }
};

export const UPDATE_RATING = (ID, rating) => {
  try {
    return instance.put(url.update_rating + ID + "?rating=" + rating);
  } catch {
    console.log(" Error calling the get recommendation API");
  }
};
