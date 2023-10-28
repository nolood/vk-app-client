import { createStore } from "effector";
import { setActivePanel } from "../lib/panel-events";
import { EVALUATION_CREATE_ROUTE, MAIN_ROUTE } from "../../../app/paths";

export const $activePanel = createStore<string>(MAIN_ROUTE).on(
  setActivePanel,
  (_, panel) => panel,
);
