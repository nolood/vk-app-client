import axios from "axios";

export const api = axios.create({
  baseURL: `http://localhost:5000`,
  headers: { "Content-Type": "application/json" },
});

export const setUserIdToHeaders = (userId: number) => {
  const newHeaders = {
    ...api.defaults.headers.common,
    "X-User-Id": userId,
  };
  console.log(newHeaders);
  api.defaults.headers.common = { ...newHeaders };
};
