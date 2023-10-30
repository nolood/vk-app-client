import { EvaluationListItem as EvaluationListItemType } from "../../../widgets/evaluations-list/model/evaluations-list";
import { Button } from "../../../shared/ui";

const EvaluationListItem = ({ item }: { item: EvaluationListItemType }) => {
  return (
    <li className="w-full h-[150px] flex gap-[20px] bg-elDarkBg rounded-[20px]">
      <img
        className={"object-cover w-1/3 h-full rounded-l-[20px]"}
        src={"http://localhost:5000/" + item.image}
        alt={"Оценивание без картинки"}
      />
      <div className="flex-1 flex flex-col py-[10px] pr-[20px]">
        <h4 className="text-text text-[20px]">{item.title}</h4>
        <Button className="mt-auto">Пройти</Button>
      </div>
    </li>
  );
};

export default EvaluationListItem;
