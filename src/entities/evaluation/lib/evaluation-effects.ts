import { createEffect } from "effector";
import { api } from "../../../shared/api";

export const createEvaluationFx = createEffect<void, void>(async () => {
  const evaluation = {
    title: "Название 1",
    description: "Описание 1",
    image: "",
    private: false,
    categories: [],
    criteria: ["Критерий 1 - 1", "Критерий 1 - 2", "Критерий 1 - 3"],
  };

  const res = await api.post("/evaluations/create", evaluation);

  console.log(res);
});
