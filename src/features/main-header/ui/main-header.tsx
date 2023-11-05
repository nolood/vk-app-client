import Balance from "../../../shared/ui/balance";
import { Avatar } from "../../../shared/ui";
import { useStore } from "effector-react";
import { $user } from "../../../entities/user/model";

const MainHeader = () => {
  const user = useStore($user);
  return (
    <div
      className={
        "w-full flex items-center justify-end absolute z-[2] top-[10px] left-0 gap-[20px] px-[20px]"
      }
    >
      <Balance />
      <Avatar image={user?.photo_100} />
    </div>
  );
};

export default MainHeader;
