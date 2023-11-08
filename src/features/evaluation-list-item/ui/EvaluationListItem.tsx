import { EvaluationListItem as EvaluationListItemType } from "../../../widgets/evaluations-list/model/evaluations-list";
import { Button } from "../../../shared/ui";
import { useNavigate } from "react-router-dom";
import { EVALUATION_ROUTE } from "../../../app/paths";
import { StarIcon } from "../../../shared/ui/icons";
import { EvaluationsListType } from "../../../shared/lib/evaluations-list-types";

const EvaluationListItem = ({
  item,
  type,
}: {
  item: EvaluationListItemType;
  type: EvaluationsListType;
}) => {
  const navigate = useNavigate();
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
          {type === "public" && (
            <Button
              onClick={() => navigate(EVALUATION_ROUTE + "/" + item.code.value)}
              className="text-[14px] px-[10px] py-[3px] w-min"
            >
              Пройти
            </Button>
          )}
        </div>
        {type === "public" && item.categories && (
          <div className="flex gap-[10px] mt-[5px]">
            {item.categories.slice(0, 5).map((category) => (
              <span
                key={category.id}
                className={
                  "text-text bg-elLightBg px-[10px] py-[2px] rounded-[10px rounded-[30px] text-[14px]"
                }
              >
                {category.value}
              </span>
            ))}
          </div>
        )}
        {type === "public" && (
          <p className="text-text text-[16px] break-all max-h-[50px] overflow-hidden mt-[10px] line-clamp-2">
            {item.description}
          </p>
        )}
        {type === "owner" && (
          <p className="flex-1 text-text text-[16px]">
            Кол-во оценок: {item.scoreCount}
          </p>
        )}
        {type === "owner" && (
          <div className="mt-auto flex w-full gap-[10px]">
            <Button className={"py-[5px]"}>Результат</Button>
            {item.status === "active" && (
              <Button className={"py-[5px]"}>Завершить</Button>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

export default EvaluationListItem;
