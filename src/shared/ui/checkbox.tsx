import { ReactNode } from "react";
import "../styles/checkbox.css";
interface CheckBoxProps {
  className?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  children?: ReactNode;
}

const Checkbox = ({
  className,
  checked,
  onChange,
  children,
}: CheckBoxProps) => {
  return (
    <label
      className={
        "checkbox flex items-center gap-[16px] text-text text-[20px] select-none cursor-pointer w-max"
      }
    >
      <input
        type="checkbox"
        className="real-checkbox w-0 h-0 opacity-0 absolute z-[-1]"
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="custom-checkbox"></span>
      {children}
    </label>
  );
};

export default Checkbox;
