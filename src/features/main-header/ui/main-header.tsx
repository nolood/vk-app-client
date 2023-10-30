import { StarIcon } from "../../../shared/ui/icons";
import Balance from "../../../shared/ui/balance";

const MainHeader = () => {
  return (
    <div
      className={
        "w-full flex items-center justify-end absolute z-[2] top-[10px] left-0 gap-[20px]"
      }
    >
      <Balance />
      <div className="w-[56px] h-[56px] bg-bg rounded-full flex items-center justify-center mr-[10px]">
        todo
      </div>
    </div>
  );
};

export default MainHeader;
