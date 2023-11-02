import EvaluationsList from "../widgets/evaluations-list/ui/evaluations-list";
import EvaluationsHeader from "../widgets/evaluations-header/ui/evaluations-header";
import { ScrollPage } from "../shared/ui";

const Evaluations = () => {
  return (
    <ScrollPage className="bg-sky">
      <EvaluationsHeader />
      <EvaluationsList />
    </ScrollPage>
  );
};

export default Evaluations;
