import { createStore } from "effector";
import { setActivePanel } from "../lib/panel-events";

export const $activePanel = createStore<string>("main").on(
  setActivePanel,
  (_, panel) => panel,
);
