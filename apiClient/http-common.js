import axios, * as others from "axios";

export default axios.create({
  baseURL: "/api/",
  headers: {
    "Content-type": "application/json",
  },
});
