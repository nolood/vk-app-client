import { StarIcon } from "../../../shared/ui/icons";
import { CriterionWithScore } from "../lib/fetch-criteria-with-comments";
import { Button } from "../../../shared/ui";

const CriterionWithComment = ({ item }: { item: CriterionWithScore }) => {
  return (
    <li className="bg-sky w-full p-[20px] rounded-[26px]">
      <div className="flex justify-between items-center">
        <p className="text-text text-[20px]">{item.title}</p>
        <div className="relative">
          <StarIcon className="fill-star w-[60px] h-[60px]" />
          <span className="absolute top-1/2 left-1/2 text-text text-[20px] font-bold -translate-x-[60%] -translate-y-1/2">
            {item.score}
          </span>
        </div>
      </div>
      <Button className="mt-[20px]">Комментарии</Button>
    </li>
  );
};

export default CriterionWithComment;
