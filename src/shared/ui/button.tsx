import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  variant?: "dark" | "light";
}

const Button = ({
  className,
  children,
  variant = "light",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        variant === "light"
          ? "bg-elLightBg border border-solid border-elLightBorder hover:bg-btnLightHover active:bg-btnLightActive transition"
          : "bg-elDarkBg hover:bg-btnDarkHover active:bg-btnDarkActive transition",
        "flex items-center justify-center rounded-[36px] text-center text-text py-[16px] px-[20px] text-default",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
