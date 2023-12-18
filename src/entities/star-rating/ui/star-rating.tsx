import { StarIcon } from "../../../shared/ui/icons";
import clsx from "clsx";

const StarRating = ({
  active,
  setActive,
  score,
  setScore,
}: {
  active: number;
  score: number;
  setActive: (active: number) => void;
  setScore: (score: number) => void;
}) => {
  const temp = [1, 2, 3, 4, 5];
  return (
    <div
      className="flex w-full justify-between mt-[30px]"
      onMouseLeave={() => !score && setActive(0)}
    >
      {temp.map((item) => (
        <div
          key={item}
          className="relative cursor-pointer"
          onMouseEnter={() => !score && setActive(item)}
          onClick={() => setScore(item)}
        >
          <StarIcon
            className={clsx(
              "w-[80px] h-[80px] fill-disabled max-510:w-[40px] max-510:h-[40px]",
              active >= item && !score && "fill-star",
              score >= item && "fill-star"
            )}
          />
          <span className="absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-[55%] text-text text-[26px] max-510:text-[16px]">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StarRating;
