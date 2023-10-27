import { EVALUATION_CREATE_ROUTE, MAIN_ROUTE } from "./paths";
import { CreateEvaluations, MainPage } from "../pages";

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: EVALUATION_CREATE_ROUTE,
    Component: CreateEvaluations,
  },
];
