import axios from "axios";
import config from "../config/app";

const instance = axios.create({
  baseURL: config.baseUrl,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(undefined, (error) => {
  console.log(error);
  return Promise.reject({
    message: `${error.response.data.message} - ${error.message}`,
  });
});

export default instance;
