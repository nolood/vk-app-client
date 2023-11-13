import { CriterionWithScore } from "../../criterion-with-comment/lib/fetch-criteria-with-comments";
import { PassedCriterionType } from "../../passed-criterion-item/model/passed-criterion-type";

export type PassedEvaluationType = {
  id: string;
  title: string;
  description: string;
  status: "active" | "finished";
  image: string | null;
  private: boolean;
  avgScore: number;
  scoreCount: number;
  ownerId: number;
  criteria: PassedCriterionType[];
};
