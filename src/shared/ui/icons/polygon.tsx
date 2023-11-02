import { SVGProps } from "react";

const Polygon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="28"
      viewBox="0 0 41 28"
      fill="none"
    >
      <path
        d="M22.8366 26.0983C21.6358 27.5895 19.3642 27.5895 18.1634 26.0983L1.48121 5.38155C-0.0992905 3.41882 1.29784 0.5 3.81782 0.5L37.1822 0.500003C39.7022 0.500003 41.0993 3.41883 39.5188 5.38156L22.8366 26.0983Z"
        fill="#616BA8"
      />
    </svg>
  );
};

export default Polygon;
