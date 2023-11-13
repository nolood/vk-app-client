import Balance from "../../../shared/ui/balance";
import { Avatar } from "../../../shared/ui";
import { useStore } from "effector-react";
import { $user } from "../../../entities/user/model";
import router from "../../../shared/router/router";
import { PROFILE_ROUTE } from "../../../shared/router/paths";

const MainHeader = () => {
  const user = useStore($user);
  return (
    <div
      className={
        "w-full flex items-center justify-end absolute z-[2] top-[10px] left-0 gap-[20px] px-[20px]"
      }
    >
      <Balance />
      <Avatar
        image={user?.photo_100}
        className={"cursor-pointer"}
        onClick={() => router.navigate(PROFILE_ROUTE)}
      />
    </div>
  );
};

export default MainHeader;
