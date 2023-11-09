import { BackButton, ScrollPage } from "../shared/ui";
import UniversalScrollFetching from "../widgets/universal-scroll-fetching/ui/universal-scroll-fetching";
import MyEvaluationItem from "../features/my-evaluation-item/ui/my-evaluation-item";
import { fetchMyEvaluations } from "../features/my-evaluation-item/lib/fetch-my-evaluations";
import { EvaluationListItem as EvaluationListItemType } from "../features/evaluation-list-item/model/evaluations-list-item-type";

const MyEvaluations = () => {
  return (
    <ScrollPage className="bg-sky">
      <div className="w-full">
        <BackButton />
        <UniversalScrollFetching<EvaluationListItemType>
          className={"flex flex-col gap-[20px]"}
          Item={MyEvaluationItem}
          fetchFn={fetchMyEvaluations}
        />
      </div>
    </ScrollPage>
  );
};

export default MyEvaluations;
