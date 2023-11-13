import { createEffect } from "effector";
import { apiFormData } from "../../../shared/api/api";
import { CreateEvaluation } from "../model/create-evaluation-form";
import router from "../../../shared/router/router";
import { EVALUATION_CREATE_RESULT_ROUTE } from "../../../shared/router/paths";

export const createEvaluationFormFx = createEffect<CreateEvaluation, void>(
  async (params) => {
    const categories = params.categories.map((c) => c.value);
    const criteria = params.criteria.map((c) => c.title);

    const formData = new FormData();
    formData.append("title", params.title);
    formData.append("description", params.description);
    formData.append("private", params.private.toString());
    formData.append("categories", JSON.stringify(categories));
    formData.append("criteria", JSON.stringify(criteria));
    if (params.image) {
      formData.append("image", params.image);
    }

    const data = await apiFormData.post("/evaluations/create", formData);

    router.navigate(
      EVALUATION_CREATE_RESULT_ROUTE + "/" + data.data.code.value,
    );
  },
);
