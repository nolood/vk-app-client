import { createStore } from "effector";
import { addFilter, deleteFilter } from "../lib/filters-events";

export const $filters = createStore<string[]>([])
  .on(addFilter, (state, payload) => [...state, payload])
  .on(deleteFilter, (state, payload) =>
    state.filter((item) => item !== payload),
  );
