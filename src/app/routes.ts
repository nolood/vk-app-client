import {
  EVALUATION_CREATE_RESULT_ROUTE,
  EVALUATION_CREATE_ROUTE,
  MAIN_ROUTE,
} from "./paths";
import { CreateEvaluation, CreateEvaluationResult, MainPage } from "../pages";

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: EVALUATION_CREATE_ROUTE,
    Component: CreateEvaluation,
  },
  {
    path: EVALUATION_CREATE_RESULT_ROUTE,
    Component: CreateEvaluationResult,
  },
];
