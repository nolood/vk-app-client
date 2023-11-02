import { ReactNode } from "react";
import clsx from "clsx";

const ScrollPage = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "w-screen h-100% min-h-screen flex flex-col items-center bg-bg px-[20px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ScrollPage;
