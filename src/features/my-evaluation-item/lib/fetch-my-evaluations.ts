import { api } from "../../../shared/api";
import { EvaluationListItem } from "../../evaluation-list-item/model/evaluations-list-item-type";
import { Pagination } from "../../../shared/types/pagination";

export const fetchMyEvaluations = async ({
  page,
  limit,
}: Pagination): Promise<EvaluationListItem[]> => {
  const res = await api.post<EvaluationListItem[]>(
    `/evaluations/my?page=${page}&limit=${limit}`,
  );

  return res.data;
};
