import { api } from "../../../shared/api";
import { EvaluationListItem } from "../../evaluation-list-item/model/evaluations-list-item-type";

export const fetchMyEvaluations = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<EvaluationListItem[]> => {
  const res = await api.post<EvaluationListItem[]>(
    `/evaluations/my?page=${page}&limit=${limit}`,
  );

  return res.data;
};
