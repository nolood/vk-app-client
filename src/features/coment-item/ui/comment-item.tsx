import { CommentType } from "../lib/fetch-comments-by-criterion";
import { StarIcon } from "../../../shared/ui/icons";

const CommentItem = ({ item }: { item: CommentType }) => {
  return (
    <li className="flex w-full bg-elLightBg p-[10px] rounded-[24px]">
      <img
        className={"rounded-full mr-[10px] w-[55px] h-[55px] object-contain"}
        src={item.user.photo_100}
        alt=""
      />
      <div className="flex-1">
        <p className="text-[14px] text-bg font-semibold">
          {item.user.first_name + " " + item.user.last_name}
        </p>
        <p className="text-text">
          {item.title || "Молча оценил данный критерий"}
        </p>
      </div>
      <div className="relative place-self-center">
        <StarIcon className="fill-star w-[60px] h-[60px]" />
        <span className="absolute top-1/2 left-1/2 text-text text-[20px] font-bold -translate-x-[65%] -translate-y-1/2">
          {item.score}
        </span>
      </div>
    </li>
  );
};

export default CommentItem;
