import { SVGProps } from "react";

const Filters = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="26"
      viewBox="0 0 39 26"
      fill="none"
    >
      <path
        d="M16.6129 11.0164L5 2H35L24.8387 11.0164V24H16.6129V11.0164Z"
        stroke="#DEDEDE"
        strokeWidth="3"
      />
    </svg>
  );
};

export default Filters;
