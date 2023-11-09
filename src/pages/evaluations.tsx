import EvaluationsHeader from "../widgets/evaluations-header/ui/evaluations-header";
import { ScrollPage } from "../shared/ui";
import UniversalScrollFetching from "../widgets/universal-scroll-fetching/ui/universal-scroll-fetching";
import EvaluationListItem from "../features/evaluation-list-item/ui/EvaluationListItem";
import { fetchPublicEvaluations } from "../features/evaluation-list-item/lib/fetch-public-evaluations";
import { EvaluationListItem as EvaluationListItemType } from "../features/evaluation-list-item/model/evaluations-list-item-type";

const Evaluations = () => {
  return (
    <ScrollPage className="bg-sky">
      <EvaluationsHeader />
      <UniversalScrollFetching<EvaluationListItemType>
        className={"w-full flex flex-col gap-[20px]"}
        Item={EvaluationListItem}
        fetchFn={fetchPublicEvaluations}
      />
    </ScrollPage>
  );
};

export default Evaluations;
