import { BackButton, ScrollPage } from "../shared/ui";
import CriteriaByEvaluations from "../widgets/criteria-by-evaluation/ui/criteria-by-evaluations";

const EvaluationCriteria = () => {
  return (
    <ScrollPage>
      <div className="flex w-full justify-start">
        <BackButton />
      </div>
      <CriteriaByEvaluations />
    </ScrollPage>
  );
};

export default EvaluationCriteria;
