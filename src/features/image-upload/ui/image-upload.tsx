import { PlusIcon } from "../../../shared/ui/icons";
import { useEffect, useState } from "react";

interface ImageUploadProps {
  onChange: (file: File | null) => void;
  image: File | null;
}
const ImageUpload = ({ onChange, image }: ImageUploadProps) => {
  const [localImage, setLocalImage] = useState<string>("");

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = (e) => setLocalImage(e.target?.result as string);
      reader.readAsDataURL(image);
    }
  }, [image]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-[200px] bg-elLightBg rounded-[26px] hover:bg-bgInputHover cursor-pointer select-none relative">
      <span className={"text-text text-[20px] mb-[10px]"}>
        Выберите файл с изображением
      </span>
      <PlusIcon />
      <input
        className="w-full h-full absolute top-0 left-0 opacity-0 z-[5]"
        type="file"
        accept=".jpg, .jpeg, .png, .webp"
        onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)}
      />
      {localImage && (
        <img
          className={
            "w-full h-full object-cover absolute top-0 left-0 z-4 rounded-[26px]"
          }
          src={localImage}
          alt=""
        />
      )}
    </div>
  );
};

export default ImageUpload;
