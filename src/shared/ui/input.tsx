import InputMask from "react-input-mask";
import clsx from "clsx";
import { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  maxLength?: number;
  value?: string;
  currentLength?: number;
  error?: boolean;
}

const Input = ({
  className,
  maxLength,
  value,
  currentLength,
  error,
  ...rest
}: InputProps) => {
  return (
    <div className="relative">
      <input
        {...rest}
        maxLength={maxLength}
        className={clsx(
          "rounded-[36px] px-[20px] py-[10px] text-[20px] text-text bg-elLightBg border-[2px] border-solid border-elLightBorder outline-none hover:bg-bgInputHover focus:bg-bgInputActive focus:bg-bgInputHover transition placeholder-text",
          error && "border-error placeholder-error",
          className,
        )}
        value={value}
      />
      {maxLength && (
        <span
          className={clsx(
            "absolute text-text right-[20px] bottom-[2px]",
            error && "text-error",
          )}
        >
          {currentLength}/{maxLength}
        </span>
      )}
    </div>
  );
};

export default Input;
