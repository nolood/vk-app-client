import { createEffect } from "effector";
import { api } from "../../../shared/api";

export const checkCriterionAvailabilityFx = createEffect<number, boolean>(
  async (criterionId) => {
    const res = await api.get(`/criteria/check/${criterionId}`);
    return res.data;
  },
);
