import {
  $evaluationsList,
  $evaluationsListTotal,
} from "../model/evaluations-list";
import { useStore } from "effector-react";
import EvaluationListItem from "../../../features/evaluation-list-item/ui/EvaluationListItem";
import { useEffect, useState } from "react";
import { fetchEvaluationsFx } from "../lib/evaluations-list-effects";
import { $filters } from "../../../entities/filters/model/filters";
import { resetEvaluations } from "../lib/evaluations-list-events";

const EvaluationsList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const evaluationsList = useStore($evaluationsList);
  const evaluationsListTotal = useStore($evaluationsListTotal);
  const filters = useStore($filters);

  const fetchEvaluations = () => {
    fetchEvaluationsFx({ page: currentPage, limit: 20, categories: filters });
  };

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      10
    ) {
      setFetching(true);
    }
  };

  // useEffect(() => {
  //   setCurrentPage(1);
  //   resetEvaluations();
  //   setFetching(true);
  // }, [filters]);

  useEffect(() => {
    if (fetching && evaluationsListTotal) {
      console.log("fetch by scroll");
      fetchEvaluations();
      setCurrentPage((prev) => prev + 1);
      setFetching(false);
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
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
