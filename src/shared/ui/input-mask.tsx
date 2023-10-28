import InputMask from "react-input-mask";
import clsx from "clsx";

interface MaskInputProps {
  mask: string;
  className?: string;
}

const MaskInput = ({ mask, className }: MaskInputProps) => {
  return (
    <InputMask
      mask={mask}
      className={clsx(
        "uppercase rounded-[36px] px-[20px] py-[10px] text-[36px] text-center bg-elLightBg border-[2px] border-solid border-elLightBorder outline-none hover:bg-bgInputHover focus:bg-bgInputActive focus:bg-bgInputHover transition",
        className,
      )}
      alwaysShowMask
    />
  );
};

export default MaskInput;
