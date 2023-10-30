import { Button } from "../../../shared/ui";
import { useNavigate } from "react-router-dom";
import { EVALUATIONS_ROUTE } from "../../../app/paths";

const MainButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full gap-[12px] mt-[16px]">
      <div className={"flex gap-[30px]"}>
        <Button className={"w-full"}>Маскот</Button>
        <Button className={"w-full"}>Созвездия</Button>
      </div>
      <Button onClick={() => navigate(EVALUATIONS_ROUTE)}>Небо</Button>
    </div>
  );
};

export default MainButtons;
