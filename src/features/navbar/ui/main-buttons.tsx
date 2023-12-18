import { Button } from "../../../shared/ui";
import { useNavigate } from "react-router-dom";
import {
  CONSTELLATIONS_ROUTE,
  EVALUATIONS_ROUTE,
  MASCOT_STORE_ROUTE,
} from "../../../shared/router/paths";
import router from "../../../shared/router/router";

const MainButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full gap-[12px] mt-[16px]">
      <div className={"flex gap-[30px] max-445:gap-[10px]"}>
        <Button
          className={"w-full"}
          // onClick={() => router.navigate(MASCOT_STORE_ROUTE)}
          closed
        >
          Маскот
        </Button>
        <Button
          className={"w-full"}
          onClick={() => router.navigate(CONSTELLATIONS_ROUTE)}
        >
          Созвездия
        </Button>
      </div>
      <Button onClick={() => navigate(EVALUATIONS_ROUTE)}>Мир</Button>
    </div>
  );
};

export default MainButtons;
