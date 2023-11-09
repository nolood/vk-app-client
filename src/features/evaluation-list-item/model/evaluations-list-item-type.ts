import { Category } from "../../../entities/category/lib/categoryEffects";

export type EvaluationListItem = {
  id: string;
  title: string;
  description: string;
  private: boolean;
  image: string | null;
  status: "active" | "finished";
  scoreCount: number;
  ownerId: number;
  code: {
    id: string;
    value: string;
  };
  categories: Category[];
  createdAt: string;
  updatedAt: string;
};
