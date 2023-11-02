import { createStore } from "effector";
import { Criterion } from "../../../features/criteria-add/model/criteria";
import { setActiveCriterion } from "../lib/criteria-list-events";

export const $activeCriterion = createStore<Criterion | null>(null).on(
  setActiveCriterion,
  (_, payload) => payload,
);
