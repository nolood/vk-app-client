import { PassedCriterionType } from "../model/passed-criterion-type";
import { StarIcon } from "../../../shared/ui/icons";

const PassedCriterionItem = ({ item }: { item: PassedCriterionType }) => {
  const comment =
    item.comments?.length > 0
      ? item.comments[0]
      : "Вы молча оценили данный критерий";

  console.log(item);

  return (
    <li className="w-full rounded-[26px] bg-elLightBg rounded-t-[50px]">
      <div className="bg-sky mt-[-5px] flex justify-between items-center rounded-[40px] p-[10px]">
        <p className="text-text text-[20px]">{item.title}</p>
        <div className="relative">
          <StarIcon className={"fill-star w-[80px] h-[80px]"} />
          <span className="absolute top-1/2 left-1/2 text-text text-[20px] font-bold -translate-x-[70%] -translate-y-1/2">
            {typeof comment !== "string" ? comment.score : null}
          </span>
        </div>
      </div>
      <p className="text-text text-[16px] pt-[10px] pb-[15px] px-[15px]">
        {typeof comment !== "string" ? comment.title : comment}
      </p>
    </li>
  );
};

export default PassedCriterionItem;
