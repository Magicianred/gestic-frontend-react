import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
});

// api.interceptors.request.use(
//   (config) => {
//     const token = sessionStorage.getItem("bl-token");
//     if (token) {
//       config.headers.authorization = token;
//     }

//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

export default api;
