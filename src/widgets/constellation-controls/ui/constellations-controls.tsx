import { Button } from "../../../shared/ui";
import { StarIcon } from "../../../shared/ui/icons";
import Telescope from "../../../entities/telescope/ui/telescope";

const ConstellationsControls = () => {
  return (
    <div className="relative w-full flex flex-col gap-[20px] pt-[60px] items-center justify-center bg-bg py-[30px] rounded-t-[30px] mt-auto z-[1] px-[20px]">
      <Telescope className={"absolute top-[-210px] left-[150px]"} />
      <Button>
        Посмотреть в телескоп -10{" "}
        <StarIcon className={"fill-star ml-[0.3rem]"} />
      </Button>
      <Button>Мои созвездия</Button>
    </div>
  );
};

export default ConstellationsControls;
