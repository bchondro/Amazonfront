import axios from "axios";

const axiosInstance = axios.create({
  // backend deployed on render
  // baseURL: "http://127.0.0.1:5001/e-6bd4e/us-central1/api",
  // backend locally using firebase functions
  baseURL: "https://api-7cvkhqvtdq-uc.a.run.app/",
  // backend locally using express server on port 5000
  // baseURL: "http://localhost:5000",
});

export { axiosInstance };
