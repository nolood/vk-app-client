import { IConstellation } from "../../../widgets/constellation-controls/lib/get-constellation";
import clsx from "clsx";

const ConstellationItem = ({
  item,
  className,
}: {
  item: IConstellation;
  className?: string;
}) => {
  return (
    <div className={"flex flex-col gap-[10px] min-h-[250px] " + className}>
      <div className="bg-elLightBorder rounded-[20px] p-[10px]">
        <div className="bg-sky rounded-[20px] p-[30px] relative w-full h-full">
          <img src="/img/stars.png" alt="" className="w-full h-full" />
          <img
            width={170}
            height={220}
            src={"/img/" + item.name + ".webp"}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
        </div>
      </div>
      <div className="rounded-[20px] bg-elLightBg p-[10px]">
        <p className="text-text text-[20px] text-center">{item.title}</p>
      </div>
    </div>
  );
};

export default ConstellationItem;
