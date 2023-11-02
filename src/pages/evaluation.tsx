import { BackButton, ScrollPage } from "../shared/ui";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "effector-react";
import { $currentEvaluation } from "../entities/evaluation/model/evaluation";
import { fetchEvaluationFx } from "../entities/evaluation/lib/evaluation-effects";
import { CriteriaList } from "../widgets/criteria-list/ui";

const Evaluation = () => {
  const params = useParams();
  const evaluation = useStore($currentEvaluation);

  useEffect(() => {
    fetchEvaluationFx(String(params.code));
  }, []);
  return (
    <ScrollPage className="bg-bg pr-[35px]">
      <div className="flex items-center justify-start w-full">
        <BackButton />
      </div>
      <div className="w-full">
        <h1 className="text-text text-[26px]">{evaluation?.title}</h1>
        <p className="text-text text-[16px] mt-[10px]">
          {evaluation?.owner.first_name + " " + evaluation?.owner.last_name}
        </p>
        {evaluation?.image && (
          <img
            className="h-[300px] w-full object-cover mt-[10px] rounded-[20px]"
            src={"http://localhost:5000/" + evaluation.image}
            alt=""
          />
        )}
        <p className="w-full bg-elLightBg rounded-[20px] px-[20px] py-[10px] my-[20px] text-text text-[20px]">
          {evaluation?.description}
        </p>
        <CriteriaList list={evaluation?.criteria} />
      </div>
    </ScrollPage>
  );
};

export default Evaluation;
