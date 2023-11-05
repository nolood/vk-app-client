import { CriterionItem } from "../../../features/criterion-item/ui";
import { CustomCriterion } from "../../../entities/evaluation/model/evaluation";

const CriteriaList = ({ list }: { list?: CustomCriterion[] }) => {
  return (
    <ul className="flex flex-col w-full gap-[10px] mb-[30px]">
      {list?.map((item) => <CriterionItem item={item} key={item.id} />)}
    </ul>
  );
};

export default CriteriaList;
