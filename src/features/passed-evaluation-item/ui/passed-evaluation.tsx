import { StarIcon } from "../../../shared/ui/icons";
import { Button } from "../../../shared/ui";
import router from "../../../shared/router/router";
import {
  CRITERIA_BY_EVALUATION_ROUTE,
  PASSED_CRITERIA_BY_EVALUATION_ROUTE,
} from "../../../shared/router/paths";
import React from "react";
import { PassedEvaluationType } from "../model/passed-evaluation-type";

const PassedEvaluation = ({ item }: { item: PassedEvaluationType }) => {
  return (
    <li className="w-full h-[150px] flex bg-elDarkBg rounded-[20px]">
      {item.image ? (
        <img
          className={"object-cover min-w-[33%] h-full rounded-l-[20px]"}
          src={"http://localhost:5000/" + item.image}
          alt={"Оценивание без картинки"}
        />
      ) : (
        <div className="min-w-[33%] h-full rounded-[20px] bg-elLightBg flex items-center justify-center">
          <StarIcon className={"fill-star w-[90px] h-[90px]"} />
        </div>
      )}
      <div className="flex-1 py-[10px] pr-[20px] ml-[20px] flex flex-col">
        <div className="flex justify-between items-center">
          <h4 className="text-text text-[20px]">{item.title}</h4>
        </div>

        <p className="flex-1 text-text text-[16px]">
          Кол-во оценок: {item.scoreCount}
        </p>
        <div className="mt-auto flex w-full gap-[10px]">
          <Button
            className={"py-[5px]"}
            onClick={() =>
              router.navigate(
                PASSED_CRITERIA_BY_EVALUATION_ROUTE + `/${item.id}`,
              )
            }
          >
            Результат
          </Button>
        </div>
      </div>
    </li>
  );
};

export default PassedEvaluation;
