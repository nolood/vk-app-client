import { createEffect } from "effector";
import { EvaluationListItem } from "../model/evaluations-list";
import { api } from "../../../shared/api";
import { EvaluationsListType } from "../../../shared/lib/evaluations-list-types";

export const fetchEvaluationsFx = createEffect<
  {
    page: number;
    limit: number;
    categories: string[];
    type: EvaluationsListType;
  },
  EvaluationListItem[]
>(async ({ page, limit, categories, type }) => {
  let res;

  if (type === "public") {
    res = await api.post<EvaluationListItem[]>(
      `/evaluations/all?page=${page}&limit=${limit}`,
      { categories },
    );
  } else if (type === "owner") {
    res = await api.post<EvaluationListItem[]>(
      `/evaluations/my?page=${page}&limit=${limit}`,
    );
  } else {
    res = await api.post<EvaluationListItem[]>(
      `/evaluations/all?page=${page}&limit=${limit}`,
      { categories },
    );
  }

  return res.data as EvaluationListItem[];
});
