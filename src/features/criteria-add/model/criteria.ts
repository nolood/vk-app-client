import { createStore } from "effector";
import {
  addCriterion,
  changeCriterionName,
  deleteCriterion,
} from "../lib/criteria-events";

export type Criterion = {
  title: string;
  id: number;
};

export const $criteria = createStore<Criterion[]>([])
  .on(addCriterion, (state, payload) => [...state, payload])
  .on(changeCriterionName, (state, payload) =>
    state.map((item) =>
      item.id === payload.id ? { ...item, title: payload.title } : item,
    ),
  )
  .on(deleteCriterion, (state, payload) =>
    state.filter((item) => item.id !== payload),
  );
