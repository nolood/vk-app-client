import { BackButton, ScrollPage } from "../shared/ui";
import EvaluationsList from "../widgets/evaluations-list/ui/evaluations-list";

const MyEvaluations = () => {
  return (
    <ScrollPage className="bg-sky">
      <div className="w-full">
        <BackButton />
        <EvaluationsList type={"owner"} />
      </div>
    </ScrollPage>
  );
};

export default MyEvaluations;
