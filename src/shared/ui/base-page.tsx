import clsx from "clsx";
import { ReactNode } from "react";

const BasePage = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "w-screen h-screen flex flex-col items-center bg-bg",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default BasePage;
