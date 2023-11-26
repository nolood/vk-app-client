import { api } from "../../../shared/api";

export interface IConstellation {
  id: number;
  name: string;
  title: string;
}

export const getConstellation = async (): Promise<IConstellation> => {
  const res = await api.get<IConstellation>("/constellations");
  return res.data;
};
