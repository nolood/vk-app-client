import { BackButton, ScrollPage } from "../shared/ui";
import UniversalScrollFetching from "../widgets/universal-scroll-fetching/ui/universal-scroll-fetching";
import { fetchPassedEvaluations } from "../features/passed-evaluation-item/lib/fetch-passed-evaluations";
import { PassedEvaluationType } from "../features/passed-evaluation-item/model/passed-evaluation-type";
import PassedEvaluation from "../features/passed-evaluation-item/ui/passed-evaluation";

const PassedEvaluations = () => {
  return (
    <ScrollPage className="bg-sky">
      <div className="w-full">
        <BackButton />
        <UniversalScrollFetching<PassedEvaluationType>
          className={"flex flex-col gap-[20px]"}
          Item={PassedEvaluation}
          fetchFn={fetchPassedEvaluations}
        />
      </div>
    </ScrollPage>
  );
};

export default PassedEvaluations;
