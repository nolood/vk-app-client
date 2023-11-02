import { createEffect } from "effector";
import { EvaluationListItem } from "../model/evaluations-list";
import { api } from "../../../shared/api";

export const fetchEvaluationsFx = createEffect<
  { page: number; limit: number; categories: string[] },
  EvaluationListItem[]
>(async ({ page, limit, categories }) => {
  const res = await api.post<EvaluationListItem[]>(
    `/evaluations/all?page=${page}&limit=${limit}`,
    { categories },
  );

  return res.data;
});
