import clsx from "clsx";
import { HTMLAttributes } from "react";

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number;
  value?: string;
  variant?: "dark" | "light";
}

const Textarea = ({
  className,
  maxLength,
  value,
  variant = "light",
  ...rest
}: TextareaProps) => {
  return (
    <div>
      <textarea
        {...rest}
        maxLength={maxLength}
        className={clsx(
          "rounded-[36px] px-[20px] py-[10px] text-[20px] text-text bg-elLightBg border-[2px] border-solid border-elLightBorder outline-none hover:bg-bgInputHover focus:bg-bgInputActive focus:bg-bgInputHover transition placeholder-text resize-none",
          variant === "dark" && "!bg-elDarkBg",
          className,
        )}
        value={value}
      />
    </div>
  );
};

export default Textarea;
