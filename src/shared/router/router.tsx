import { createBrowserRouter } from "react-router-dom";
import {
  EVALUATION_CREATE_RESULT_ROUTE,
  EVALUATION_CREATE_ROUTE,
  EVALUATION_ROUTE,
  EVALUATIONS_ROUTE,
  MAIN_ROUTE,
} from "../../app/paths";
import {
  CreateEvaluationPage,
  CreateEvaluationResultPage,
  EvaluationPage,
  EvaluationsPage,
  MainPage,
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
]);
export default router;
