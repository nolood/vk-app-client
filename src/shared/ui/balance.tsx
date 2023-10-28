import { Star } from "./icons";
import clsx from "clsx";

const Balance = ({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  return (
    <div
      className={clsx(
        "gap-[10px] rounded-[20px] px-[16px] py-[5px] flex items-center",
        variant === "dark" ? "bg-bg" : "bg-elLightBg",
      )}
    >
      <span className="text-text font-bold text-[20px]">1000</span>
      <Star />
    </div>
  );
};

export default Balance;
