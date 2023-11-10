import { createBrowserRouter } from "react-router-dom";
import {
  CRITERIA_BY_EVALUATION_ROUTE,
  EVALUATION_CREATE_RESULT_ROUTE,
  EVALUATION_CREATE_ROUTE,
  EVALUATION_ROUTE,
  EVALUATIONS_ROUTE,
  MAIN_ROUTE,
  MY_EVALUATIONS_ROUTE,
  PROFILE_ROUTE,
} from "../../app/paths";
import {
  CreateEvaluationPage,
  CreateEvaluationResultPage,
  EvaluationPage,
  EvaluationsPage,
  MainPage,
  MyEvaluationsPage,
  ProfilePage,
} from "../../pages";
import EvaluationCriteria from "../../pages/evaluation-criteria";

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
]);
export default router;
