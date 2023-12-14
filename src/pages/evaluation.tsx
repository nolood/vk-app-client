import { BackButton, Button, ScrollPage } from "../shared/ui";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "effector-react";
import {
  $currentEvaluation,
  fetchEvaluationFx,
} from "../entities/evaluation/model/evaluation";

import { CriteriaList } from "../widgets/criteria-list/ui";
import { clearEvaluation } from "../entities/evaluation/lib/evaluation-events";
import router from "../shared/router/router";
import { evaluateEvaluationFx } from "../entities/evaluation/model/evaluation-effects";
import { showNotification } from "../shared/lib/notifications-events";

const Evaluation = () => {
  const params = useParams();
  const evaluation = useStore($currentEvaluation);

  const handleEvaluate = async () => {
    try {
      if (evaluation?.id) {
        const data = await evaluateEvaluationFx(evaluation.id);
        if (data) {
          router.navigate(-1);
          showNotification({
            type: "success",
            text: "Оценивание завершено. Ваш баланс пополнен.",
          });
        }
      }
    } catch (e) {
      showNotification({
        type: "success",
        text: "Оцените все критерии для того чтобы завершить оценивание",
      });
    }
  };

  useEffect(() => {
    fetchEvaluationFx(String(params.code));

    return () => {
      clearEvaluation();
    };
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
            src={"https://midisvkminiapp.online/" + evaluation.image}
            alt=""
          />
        )}
        <p className="w-full bg-elLightBg rounded-[20px] px-[20px] py-[10px] my-[20px] text-text text-[20px] h-max break-words">
          {evaluation?.description}
        </p>
        <CriteriaList list={evaluation?.criteria} />
      </div>
      <Button onClick={handleEvaluate} className="mt-auto">
        Завершить оценивание
      </Button>
    </ScrollPage>
  );
};

export default Evaluation;
