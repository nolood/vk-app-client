import { CriterionWithScore } from "../../criterion-with-comment/lib/fetch-criteria-with-comments";

export type PassedCriterionType = CriterionWithScore & {
  comments: { id: bigint; title: string; userId: number; score: number }[];
};
