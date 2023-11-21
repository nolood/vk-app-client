import { PolygonIcon, StarIcon } from "../../../shared/ui/icons";
import { $activeCriterion } from "../../../widgets/criteria-list/model/criteria-list";
import { useStore } from "effector-react";
import clsx from "clsx";
import { setActiveCriterion } from "../../../widgets/criteria-list/lib/criteria-list-events";
import { StarRating } from "../../../entities/star-rating/ui";
import { ChangeEvent, useEffect, useState } from "react";
import { Button, TextArea } from "../../../shared/ui";
import { sendCriterionScoreEvaluationFx } from "../../../entities/evaluation/lib/evaluation-effects";
import { CustomCriterion } from "../../../entities/evaluation/model/evaluation";

const CriterionItem = ({
  item,
  active,
}: {
  item: CustomCriterion;
  active: boolean;
}) => {
  const [activeStar, setActiveStar] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  // const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const activeCriterion = useStore($activeCriterion);

  const isEvaluate = item.comments?.length ? item.comments[0].score : false;

  const handleOpen = () => {
    if (activeCriterion?.id !== item.id) {
      setActiveCriterion(item);
      // setIsCollapsed(true);
    }
  };

  const handleEvaluate = () => {
    if (score) {
      sendCriterionScoreEvaluationFx({
        criterionId: item.id,
        score,
        comment,
      });
      setActiveCriterion(null);
    }
  };

  const rootClassName = clsx(
    "flex flex-col w-full justify-between bg-elLightBg rounded-[20px] py-[20px] px-[20px] relative h-[74px] transition-all overflow-hidden",
    active && "h-[510px]",
  );

  // useEffect(() => {
  //   if (activeCriterion?.id === item.id) {
  //     setIsCollapsed(true);
  //   } else {
  //     setIsCollapsed(false);
  //   }
  // }, [activeCriterion]);

  return (
    <li className={rootClassName}>
      <div className="flex w-full justify-between items-center">
        <p className="text-text text-[20px]">{item.title}</p>
        {!isEvaluate ? (
          <PolygonIcon onClick={handleOpen} className="cursor-pointer" />
        ) : (
          <div className="relative">
            <StarIcon className="fill-star w-[40px] h-[40px]" />
            <span className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-[50%] text-text text-[20px">
              {isEvaluate}
            </span>
          </div>
        )}
      </div>
      <StarRating
        active={activeStar}
        setActive={setActiveStar}
        score={score}
        setScore={setScore}
      />
      <TextArea
        variant={"dark"}
        maxLength={300}
        currentLength={comment.length}
        placeholder="Оставить комментарий..."
        className={"w-full h-[200px]"}
        value={comment}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setComment(e.target.value)
        }
      />
      <Button onClick={handleEvaluate} variant={"dark"}>
        Оценить
      </Button>
    </li>
  );
};

export default CriterionItem;
