import InputMask from "react-input-mask";
import clsx from "clsx";
import { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  maxLength?: number;
  value?: string;
}

const Input = ({ className, maxLength, value, ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      maxLength={maxLength}
      className={clsx(
        "rounded-[36px] px-[20px] py-[10px] text-[20px] text-text bg-elLightBg border-[2px] border-solid border-elLightBorder outline-none hover:bg-bgInputHover focus:bg-bgInputActive focus:bg-bgInputHover transition placeholder-text",
        className,
      )}
      value={value}
    />
  );
};

export default Input;
