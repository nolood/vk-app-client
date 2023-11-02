import { EvaluationListItem as EvaluationListItemType } from "../../../widgets/evaluations-list/model/evaluations-list";
import { Button } from "../../../shared/ui";
import { useNavigate } from "react-router-dom";
import { EVALUATION_ROUTE } from "../../../app/paths";

const EvaluationListItem = ({ item }: { item: EvaluationListItemType }) => {
  const navigate = useNavigate();
  return (
    <li className="w-full h-[150px] flex gap-[20px] bg-elDarkBg rounded-[20px]">
      <img
        className={"object-cover w-1/3 h-full rounded-l-[20px]"}
        src={"http://localhost:5000/" + item.image}
        alt={"Оценивание без картинки"}
      />
      <div className="flex-1 flex flex-col py-[10px] pr-[20px]">
        <h4 className="text-text text-[20px]">{item.title}</h4>
        <Button
          onClick={() => navigate(EVALUATION_ROUTE + "/" + item.code.value)}
          className="mt-auto"
        >
          Пройти
        </Button>
        {/*{item.categories.map((category) => (*/}
        {/*  <span>{category.value}</span>*/}
        {/*))}*/}
      </div>
    </li>
  );
};

export default EvaluationListItem;
