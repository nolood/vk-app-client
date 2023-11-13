import { api } from "../../../shared/api";

export const finishMyEvaluation = async (id: string) => {
  api.post(`/evaluations/finish/${id}`);
};
