import axios from "axios";

export const api = axios.create({
  baseURL: "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
