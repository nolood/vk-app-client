import { createStore } from "effector";
import { fetchEvaluationsFx } from "../lib/evaluationsListEffects";

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
  createdAt: string;
  updatedAt: string;
};

export const $evaluationsList = createStore<EvaluationListItem[]>([]).on(
  fetchEvaluationsFx.doneData,
  (state, data) => data,
);
