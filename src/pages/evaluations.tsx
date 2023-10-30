import BasePage from "../shared/ui/base-page";
import EvaluationsList from "../widgets/evaluations-list/ui/evaluations-list";
import EvaluationsHeader from "../widgets/evaluations-header/ui/evaluations-header";

const Evaluations = () => {
  return (
    <BasePage className="bg-sky">
      <EvaluationsHeader />
      <EvaluationsList />
    </BasePage>
  );
};

export default Evaluations;
