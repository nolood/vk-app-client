import { createEffect } from "effector";
import { api } from "../../../shared/api";
import { EvaluationType } from "../model/evaluation";
import router from "../../../shared/router/router";
import { EVALUATION_ROUTE, MAIN_ROUTE } from "../../../app/paths";

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

export const fetchEvaluationByCodeFx = createEffect<string, EvaluationType>(
  async (code) => {
    const newCode = code.split("  ").join("").split(" ").join("");
    const res = await api.get<EvaluationType>(`/evaluations/${newCode}`);
    router.navigate(EVALUATION_ROUTE + "/" + newCode);
    return res.data;
  },
);

export const fetchEvaluationFx = createEffect<string, EvaluationType>(
  async (code) => {
    const res = await api.get(`/evaluations/${code}`);
    if (!res.data) {
      router.navigate(MAIN_ROUTE);
    }
    return res.data;
  },
);

export const sendCriterionScoreEvaluationFx = createEffect<
  {
    criterionId: number;
    score: number;
    comment: string | null;
  },
  void
>(async (data) => {
  await api.post("/criteria", data);
});
