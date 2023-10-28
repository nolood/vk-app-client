import { Button } from "../../../shared/ui";

const MainButtons = () => {
  return (
    <div className="flex flex-col w-full gap-[12px] mt-[16px]">
      <div className={"flex gap-[30px]"}>
        <Button className={"w-full"}>Маскот</Button>
        <Button className={"w-full"}>Созвездия</Button>
      </div>
      <Button>Небо</Button>
    </div>
  );
};

export default MainButtons;
