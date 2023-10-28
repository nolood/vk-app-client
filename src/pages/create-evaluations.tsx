import CriteriaAdd from "../features/criteria-add/ui/criteria-add";
import Back from "../shared/ui/back";
import { MAIN_ROUTE } from "../app/paths";
import { ChipsSelect } from "@vkontakte/vkui/dist/components/ChipsSelect/ChipsSelect";
import { Checkbox } from "@vkontakte/vkui";
import BasePage from "../shared/ui/base-page";
import CreateEvaluationForm from "../widgets/create-evaluation-form/ui/create-evaluation-form";

const CreateEvaluations = () => {
  return (
    <BasePage>
      <CreateEvaluationForm />
    </BasePage>
  );
};

export default CreateEvaluations;
