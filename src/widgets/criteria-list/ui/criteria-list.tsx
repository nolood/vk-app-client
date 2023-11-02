import { Criterion } from "../../../features/criteria-add/model/criteria";
import { CriterionItem } from "../../../features/criterion-item/ui";

const CriteriaList = ({ list }: { list?: Criterion[] }) => {
  return (
    <ul className="flex flex-col w-full gap-[10px]">
      {list?.map((item) => <CriterionItem item={item} key={item.id} />)}
    </ul>
  );
};

export default CriteriaList;
