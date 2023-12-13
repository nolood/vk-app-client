import axios from "axios";

export const api = axios.create({
  baseURL: `http://95.163.181.145:3001`,
  headers: { "Content-Type": "application/json" },
});

export const apiFormData = axios.create({
  baseURL: `http://95.163.181.145:3001`,
  headers: { "Content-Type": "multipart/form-data" },
});

export const setUserIdToHeaders = (userId: number) => {
  const newHeaders = {
    ...api.defaults.headers.common,
    "X-User-Id": userId,
  };
  api.defaults.headers.common = { ...newHeaders };
  apiFormData.defaults.headers.common = { ...newHeaders };
};
