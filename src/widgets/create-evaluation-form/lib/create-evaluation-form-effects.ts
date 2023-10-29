import { createEffect } from "effector";
import { CreateEvaluation } from "../model/create-evaluation-form";
import { api } from "../../../shared/api";

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

    console.log(params.image);

    await api.post("/evaluations/create", formData);
  },
);
