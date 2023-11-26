import { createStore } from "effector";
import { EvaluationListItem } from "../../../features/evaluation-list-item/model/evaluations-list-item-type";
import { Criterion } from "../../../features/criteria-add/model/criteria";
import { UserInfo } from "@vkontakte/vk-bridge";

import { clearEvaluation } from "../lib/evaluation-events";
import { sendCriterionScoreEvaluationFx } from "./evaluation-effects";
import { createEffect } from "effector/compat";
import { api } from "../../../shared/api";
import router from "../../../shared/router/router";
import { EVALUATION_ROUTE, MAIN_ROUTE } from "../../../shared/router/paths";

export type CustomCriterion = Criterion & {
  comments?: { score: number }[];
};

export const fetchEvaluationByCodeFx = createEffect<string, EvaluationType>(
  async (code) => {
    const newCode = code.split("  ").join("").split(" ").join("");
    const res = await api.get<EvaluationType>(`/evaluations/${newCode}`);
    router.navigate(EVALUATION_ROUTE + "/" + newCode);
    return res.data;
  },
);

export const fetchEvaluationFx = createEffect<string, EvaluationType>(
  async (code) => {
    const res = await api.get(`/evaluations/${code}`);
    if (!res.data) {
      router.navigate(MAIN_ROUTE);
    }
    return res.data;
  },
);

export interface EvaluationType extends EvaluationListItem {
  criteria: CustomCriterion[];
  owner: UserInfo;
}

export const $currentEvaluation = createStore<EvaluationType | null>(null)
  .on(fetchEvaluationByCodeFx.doneData, (_, payload) => payload)
  .on(fetchEvaluationFx.doneData, (_, payload) => payload)
  .on(sendCriterionScoreEvaluationFx.doneData, (state, payload) => {
    if (state) {
      console.log(state);
      return {
        ...state,
        criteria: state.criteria.map((criterion) =>
          criterion.id === payload.criterionId
            ? { ...criterion, comments: [{ score: payload.score }] }
            : { ...criterion },
        ),
      };
    }
    return null;
  })
  .on(clearEvaluation, () => null);
