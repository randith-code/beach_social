import axios from "axios";

const baseURL = "https://www.beachsocial.leadmedia.lk/wp-json/wp/v2";

const apiInstance = axios.create({
  baseURL: baseURL,
});

export default apiInstance;
