import { api } from "../../../shared/api";

export const fetchPassedCriteria = async (id?: string) => {
  const res = await api.get(`criteria/passed/${id}`);
  console.log(res.data);
  return res.data;
};
