import { createEffect } from "effector";
import { CreateEvaluation } from "../model/create-evaluation-form";
import { apiFormData } from "../../../shared/api/api";

export const createEvaluationFormFx = createEffect<CreateEvaluation, void>(
  async (params) => {
    const categories = params.categories.map((c) => c.label);
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

    await apiFormData.post("/evaluations/create", formData);
  },
);
