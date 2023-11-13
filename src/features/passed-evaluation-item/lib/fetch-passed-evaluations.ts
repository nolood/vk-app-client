import { Pagination } from "../../../shared/types/pagination";
import { api } from "../../../shared/api";
import { PassedEvaluationType } from "../model/passed-evaluation-type";

export const fetchPassedEvaluations = async ({
  page,
  limit,
}: Pagination): Promise<PassedEvaluationType[]> => {
  const res = await api.post<PassedEvaluationType[]>(
    `/evaluations/passed?page=${page}&limit=${limit}`,
  );

  return res.data;
};
