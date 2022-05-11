import axios from "axios";

export const api = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:3333",
=======
  baseURL: import.meta.env.VITE_API_URL,
>>>>>>> d9af845cb7bf0570b78e4832061faca845a7d5c1
});
