import { EvaluationListItem } from "../model/evaluations-list-item-type";
import { api } from "../../../shared/api";
import { Pagination } from "../../../shared/types/pagination";

export const fetchPublicEvaluations = async ({
  page,
  limit,
}: Pagination): Promise<EvaluationListItem[]> => {
  const res = await api.post<EvaluationListItem[]>(
    `/evaluations/all?page=${page}&limit=${limit}`,
  );

  return res.data;
};
