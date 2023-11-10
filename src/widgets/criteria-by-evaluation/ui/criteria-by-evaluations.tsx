import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CriterionWithScore,
  fetchCriteriaWithComments,
} from "../../../features/criterion-with-comment/lib/fetch-criteria-with-comments";
import CriterionWithComment from "../../../features/criterion-with-comment/ui/criterion-with-comment";

const CriteriaByEvaluations = () => {
  const [criteria, setCriteria] = useState<CriterionWithScore[]>([]);

  const params = useParams();

  useEffect(() => {
    fetchCriteriaWithComments(params.id).then((res) => setCriteria(res));
  }, []);

  return (
    <ul className="flex w-full flex-col gap-[20px]">
      {criteria.map((item) => (
        <CriterionWithComment item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default CriteriaByEvaluations;
