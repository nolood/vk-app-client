import { createBrowserRouter } from "react-router-dom";
import {
  COMMENTS_FROM_CRITERION_ROUTE,
  CONSTELLATIONS_ROUTE,
  CRITERIA_BY_EVALUATION_ROUTE,
  EVALUATION_CREATE_RESULT_ROUTE,
  EVALUATION_CREATE_ROUTE,
  EVALUATION_ROUTE,
  EVALUATIONS_ROUTE,
  MAIN_ROUTE,
  MY_EVALUATIONS_ROUTE,
  PASSED_CRITERIA_BY_EVALUATION_ROUTE,
  PASSED_EVALUATIONS_ROUTE,
  PROFILE_ROUTE,
} from "./paths";
import {
  CommentsFromCriterion,
  Constellations,
  CreateEvaluationPage,
  CreateEvaluationResultPage,
  EvaluationCriteria,
  EvaluationPage,
  EvaluationsPage,
  MainPage,
  MyEvaluationsPage,
  PassedCriteriaByEvaluation,
  PassedEvaluations,
  ProfilePage,
} from "../../pages";

const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: EVALUATION_CREATE_ROUTE,
    element: <CreateEvaluationPage />,
  },
  {
    path: EVALUATION_CREATE_RESULT_ROUTE + "/:code",
    element: <CreateEvaluationResultPage />,
  },
  {
    path: EVALUATION_ROUTE + "/:code",
    element: <EvaluationPage />,
  },
  {
    path: EVALUATIONS_ROUTE,
    element: <EvaluationsPage />,
  },
  {
    path: PROFILE_ROUTE,
    element: <ProfilePage />,
  },
  {
    path: MY_EVALUATIONS_ROUTE,
    element: <MyEvaluationsPage />,
  },
  {
    path: CRITERIA_BY_EVALUATION_ROUTE + "/:id",
    element: <EvaluationCriteria />,
  },
  {
    path: COMMENTS_FROM_CRITERION_ROUTE + "/:id",
    element: <CommentsFromCriterion />,
  },
  {
    path: PASSED_EVALUATIONS_ROUTE,
    element: <PassedEvaluations />,
  },
  {
    path: PASSED_CRITERIA_BY_EVALUATION_ROUTE + "/:id",
    element: <PassedCriteriaByEvaluation />,
  },
  {
    path: CONSTELLATIONS_ROUTE,
    element: <Constellations />,
  },
]);
export default router;
