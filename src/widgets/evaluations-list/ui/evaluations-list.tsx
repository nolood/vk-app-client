import { $evaluationsList } from "../model/evaluations-list";
import { useStore } from "effector-react";
import EvaluationListItem from "../../../features/evaluation-list-item/ui/EvaluationListItem";
import { useEffect } from "react";
import { fetchEvaluationsFx } from "../lib/evaluationsListEffects";

const EvaluationsList = () => {
  const evaluationsList = useStore($evaluationsList);

  useEffect(() => {
    fetchEvaluationsFx({ page: 1, limit: 10, categories: [] });
  }, []);

  return (
    <ul className="w-full flex flex-col items-center gap-[20px]">
      {evaluationsList.map((item) => (
        <EvaluationListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default EvaluationsList;
