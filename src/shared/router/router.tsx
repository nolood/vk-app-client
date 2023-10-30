import { createBrowserRouter } from "react-router-dom";
import {
  EVALUATION_CREATE_RESULT_ROUTE,
  EVALUATION_CREATE_ROUTE,
  MAIN_ROUTE,
} from "../../app/paths";
import {
  CreateEvaluation,
  CreateEvaluationResult,
  MainPage,
} from "../../pages";
const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: EVALUATION_CREATE_ROUTE,
    element: <CreateEvaluation />,
  },
  {
    path: EVALUATION_CREATE_RESULT_ROUTE + "/:code",
    element: <CreateEvaluationResult />,
  },
]);
export default router;
