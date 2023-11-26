import { api } from "../../../shared/api";
import { IConstellation } from "../../constellation-controls/lib/get-constellation";

export const fetchConstellationsByUser = async (): Promise<
  IConstellation[]
> => {
  const res = await api.get<IConstellation[]>("/constellations/byuser");
  return res.data;
};
