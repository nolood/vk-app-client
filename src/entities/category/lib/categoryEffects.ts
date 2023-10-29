import { createEffect } from "effector";
import { api } from "../../../shared/api";

export type Category = {
  id: string;
  value: string;
  createdAt: string;
  updatedAt: string;
};

export const fetchCategoriesFx = createEffect<void, Category[]>(async () => {
  const res = await api.get<Category[]>("/categories");
  return res.data;
});
