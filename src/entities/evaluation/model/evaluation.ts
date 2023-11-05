import { createStore, sample } from "effector";
import { EvaluationListItem } from "../../../widgets/evaluations-list/model/evaluations-list";
import { Criterion } from "../../../features/criteria-add/model/criteria";
import { UserInfo } from "@vkontakte/vk-bridge";
import {
  fetchEvaluationByCodeFx,
  fetchEvaluationFx,
  sendCriterionScoreEvaluationFx,
} from "../lib/evaluation-effects";

export type CustomCriterion = Criterion & {
  comments?: { score: number }[];
};

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
  });
