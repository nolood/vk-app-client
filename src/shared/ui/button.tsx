import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { EVALUATION_CREATE_ROUTE } from "../router/paths";
import { NavLink } from "react-router-dom";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  variant?: "dark" | "light";
  htmlType?: "button" | "submit" | "reset";
  disabled?: boolean;
  closed?: boolean;
}

const Button = ({
  className,
  children,
  variant = "light",
  htmlType = "button",
  disabled,
  closed,
  ...rest
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={htmlType}
      {...rest}
      className={clsx(
        variant === "light"
          ? "bg-elLightBg border border-solid border-elLightBorder hover:bg-btnLightHover active:bg-btnLightActive transition"
          : "bg-elDarkBg hover:bg-btnDarkHover active:bg-btnDarkActive transition",
        "flex items-center justify-center rounded-[36px] text-center text-text py-[16px] px-[20px] text-default w-full cursor-pointer",
        disabled &&
          "cursor-not-allowed bg-disabled hover:bg-disabled active:bg-disabled",
        closed &&
          "cursor-not-allowed !bg-disabled hover:bg-disabled active:bg-disabled relative",
        className,
      )}
    >
      {children}
      {closed && (
        <span className="text-[10px] absolute bottom-0">В разработке</span>
      )}
    </button>
  );
};

export default Button;
