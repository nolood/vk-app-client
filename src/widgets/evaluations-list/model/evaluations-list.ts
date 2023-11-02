import { createStore } from "effector";
import { fetchEvaluationsFx } from "../lib/evaluations-list-effects";
import { resetEvaluations } from "../lib/evaluations-list-events";
import { Category } from "../../../entities/category/lib/categoryEffects";

export type EvaluationListItem = {
  id: string;
  title: string;
  description: string;
  private: boolean;
  image: string | null;
  status: "active" | "finished";
  ownerId: number;
  code: {
    id: string;
    value: string;
  };
  categories: Category[];
  createdAt: string;
  updatedAt: string;
};

export const $evaluationsList = createStore<EvaluationListItem[]>([])
  .on(fetchEvaluationsFx.doneData, (state, data) => [...state, ...data])
  .on(resetEvaluations, () => []);

export const $evaluationsListTotal = createStore<boolean>(true)
  .on(fetchEvaluationsFx.doneData, (_, data) => !!data.length)
  .on(resetEvaluations, () => true);
