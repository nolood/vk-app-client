import { forward } from "effector";
import { createForm, Form } from "effector-forms";
import { createEvaluationFormFx } from "../lib/create-evaluation-form-effects";
import { Criterion } from "../../../features/criteria-add/model/criteria";
import { checkRequired } from "../../../shared/lib/validators";

export type CreateEvaluation = {
  title: string;
  description: string;
  private: boolean;
  categories: { value: string; label: string }[];
  criteria: Criterion[];
  image: null;
};

export const createEvaluationForm: Form<CreateEvaluation> = createForm({
  fields: {
    title: {
      init: "",
      rules: [checkRequired()],
    },
    description: {
      init: "",
      rules: [],
    },
    private: {
      init: false,
      rules: [],
    },
    categories: {
      init: [{ value: "", label: "" }],
      rules: [],
    },
    criteria: {
      init: [{ id: 0, title: "" }],
      rules: [checkRequired()],
    },
    image: {
      init: null,
      rules: [],
    },
  },
  validateOn: ["submit"],
});

forward({
  from: createEvaluationForm.formValidated,
  to: createEvaluationFormFx,
});
