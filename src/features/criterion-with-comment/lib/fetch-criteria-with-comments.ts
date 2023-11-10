import { api } from "../../../shared/api";
import { Criterion } from "../../criteria-add/model/criteria";

export interface CriterionWithScore extends Criterion {
  score: number;
  evaluationId: string;
}

export const fetchCriteriaWithComments = async (
  id?: string,
): Promise<CriterionWithScore[]> => {
  const res = await api.get<CriterionWithScore[]>("/criteria/" + id);

  return res.data;
};
