import { Plus } from "../../../shared/ui/icons";

const ImageUpload = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[200px] bg-elLightBg rounded-[26px] hover:bg-bgInputHover cursor-pointer select-none">
      <span className={"text-text text-[20px] mb-[10px]"}>
        Выберите файл с изображением
      </span>
      <Plus />
    </div>
  );
};

export default ImageUpload;
