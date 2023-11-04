import { createStore, sample } from "effector";
import { EvaluationListItem } from "../../../widgets/evaluations-list/model/evaluations-list";
import { Criterion } from "../../../features/criteria-add/model/criteria";
import { UserInfo } from "@vkontakte/vk-bridge";
import {
  fetchEvaluationByCodeFx,
  fetchEvaluationFx,
} from "../lib/evaluation-effects";

export type CustomCriterion = Criterion & {
  comments: { score: number }[];
};

export interface EvaluationType extends EvaluationListItem {
  criteria: CustomCriterion[];
  owner: UserInfo;
}

export const $currentEvaluation = createStore<EvaluationType | null>(null)
  .on(fetchEvaluationByCodeFx.doneData, (_, payload) => payload)
  .on(fetchEvaluationFx.doneData, (_, payload) => payload);
