import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { EVALUATION_CREATE_ROUTE } from "../../app/paths";
import { NavLink } from "react-router-dom";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  variant?: "dark" | "light";
  to?: string;
}

const Button = ({
  className,
  children,
  variant = "light",
  to,
  ...rest
}: ButtonProps) => {
  return (
    <NavLink to={to || ""} className={"w-full"}>
      <button
        {...rest}
        className={clsx(
          variant === "light"
            ? "bg-elLightBg border border-solid border-elLightBorder hover:bg-btnLightHover active:bg-btnLightActive transition"
            : "bg-elDarkBg hover:bg-btnDarkHover active:bg-btnDarkActive transition",
          "flex items-center justify-center rounded-[36px] text-center text-text py-[16px] px-[20px] text-default w-full",
          className,
        )}
      >
        {children}
      </button>
    </NavLink>
  );
};

export default Button;
