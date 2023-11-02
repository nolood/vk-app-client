import { Criterion } from "../../criteria-add/model/criteria";
import { PolygonIcon } from "../../../shared/ui/icons";
import { $activeCriterion } from "../../../widgets/criteria-list/model/criteria-list";
import { useStore } from "effector-react";
import clsx from "clsx";
import { setActiveCriterion } from "../../../widgets/criteria-list/lib/criteria-list-events";
import { StarRating } from "../../../entities/star-rating/ui";
import { ChangeEvent, useEffect, useState } from "react";
import { Button, TextArea } from "../../../shared/ui";
import { sendCriterionScoreEvaluationFx } from "../../../entities/evaluation/lib/evaluation-effects";
import { checkCriterionAvailabilityFx } from "../../../widgets/criteria-list/lib/criteria-list-effects";

const CriterionItem = ({ item }: { item: Criterion }) => {
  const [activeStar, setActiveStar] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [available, setAvailable] = useState<boolean>(false);

  const activeCriterion = useStore($activeCriterion);

  const handleOpen = () => {
    if (activeCriterion?.id !== item.id) {
      setActiveCriterion(item);
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

  useEffect(() => {
    const check = async () => {
      setAvailable(await checkCriterionAvailabilityFx(item.id));
    };

    check();
  }, [item]);

  console.log(available);

  return (
    <li
      className={clsx(
        "flex flex-col w-full justify-between bg-elLightBg rounded-[20px] py-[20px] px-[20px] relative h-[74px] transition-all overflow-hidden",
        activeCriterion?.id === item.id && "h-[510px]",
      )}
    >
      <div className="flex w-full justify-between items-center">
        <p className="text-text text-[20px]">{item.title}</p>
        <PolygonIcon onClick={handleOpen} className="cursor-pointer" />
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
