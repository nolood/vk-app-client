import { CriterionItem } from "../../../features/criterion-item/ui";
import { CustomCriterion } from "../../../entities/evaluation/model/evaluation";
import { useStore } from "effector-react";
import { $activeCriterion } from "../model/criteria-list";

const CriteriaList = ({ list }: { list?: CustomCriterion[] }) => {
  const activeCriterion = useStore($activeCriterion);
  return (
    <ul className="flex flex-col w-full gap-[10px] mb-[30px]">
      {list?.map((item) => (
        <CriterionItem
          item={item}
          key={item.id}
          active={activeCriterion?.id === item.id}
        />
      ))}
    </ul>
  );
};

export default CriteriaList;
