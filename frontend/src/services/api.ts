import axios from "axios";

export const api = axios.create({
  baseURL:
"https://orchestrator-ylaz.onrender.com/api",
});