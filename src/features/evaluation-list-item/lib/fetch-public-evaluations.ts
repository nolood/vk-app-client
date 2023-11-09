import { EvaluationListItem } from "../model/evaluations-list-item-type";
import { api } from "../../../shared/api";

export const fetchPublicEvaluations = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<EvaluationListItem[]> => {
  const res = await api.post<EvaluationListItem[]>(
    `/evaluations/all?page=${page}&limit=${limit}`,
  );

  return res.data;
};
