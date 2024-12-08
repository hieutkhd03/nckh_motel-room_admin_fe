import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    let localStorageData = window.localStorage.getItem("persist:web/user");
    if (localStorageData && typeof localStorageData === "string") {
      localStorageData = JSON.parse(localStorageData);
      const access_token = JSON.parse(localStorageData?.accessToken);
      config.headers = { Authorization: `Bearer ${access_token}` };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response?.data;
  },
  function (error) {
    return error.response?.data;
  }
);

export default instance;
