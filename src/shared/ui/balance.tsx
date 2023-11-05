import { StarIcon } from "./icons";
import clsx from "clsx";
import { useStore } from "effector-react";
import { $user } from "../../entities/user/model";

const Balance = ({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  const user = useStore($user);
  return (
    <div
      className={clsx(
        "gap-[10px] rounded-[20px] px-[16px] py-[5px] flex items-center",
        variant === "dark" ? "bg-bg" : "bg-elLightBg",
      )}
    >
      <span className="text-text font-bold text-[20px]">{user?.balance}</span>
      <StarIcon className="fill-star" />
    </div>
  );
};

export default Balance;
