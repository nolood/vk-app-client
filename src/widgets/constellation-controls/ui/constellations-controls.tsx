import { Button } from "../../../shared/ui";
import { StarIcon } from "../../../shared/ui/icons";
import Telescope from "../../../entities/telescope/ui/telescope";
import router from "../../../shared/router/router";
import { MY_CONSTELLATIONS_ROUTE } from "../../../shared/router/paths";
import { useEffect, useState } from "react";
import { getConstellation, IConstellation } from "../lib/get-constellation";
import ConstellationItem from "../../../features/constellation-item/ui/constellation-item";
import { changeUserBalance } from "../../../entities/user/lib/user-events";
import { useStore } from "effector-react";
import { $user } from "../../../entities/user/model";

const ConstellationsControls = () => {
  const user = useStore($user);
  const [newConstellation, setNewConstellation] =
    useState<IConstellation | null>(null);

  const handleClick = async () => {
    const data = await getConstellation();
    if (data) {
      setNewConstellation(data);
      changeUserBalance(-10);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNewConstellation(null);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [newConstellation]);

  return (
    <>
      {newConstellation && (
        <ConstellationItem
          item={newConstellation}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
      <div className="relative w-full flex flex-col gap-[20px] pt-[60px] items-center justify-center bg-bg py-[30px] rounded-t-[30px] mt-auto z-[1] px-[20px]">
        <Telescope className={"absolute top-[-210px] left-[150px]"} />
        <Button
          onClick={handleClick}
          disabled={!user?.balance || user.balance < 10}
        >
          Посмотреть в телескоп -10{" "}
          <StarIcon className={"fill-star ml-[0.3rem]"} />
        </Button>
        <Button onClick={() => router.navigate(MY_CONSTELLATIONS_ROUTE)}>
          Мои созвездия
        </Button>
      </div>
    </>
  );
};

export default ConstellationsControls;
