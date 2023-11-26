import { useStore } from "effector-react";
import { $notificationsList } from "../model/notifications";
import clsx from "clsx";

const Notifications = () => {
  const list = useStore($notificationsList);
  return (
    <div>
      {list.map((item) => (
        <div
          key={item.id}
          className={clsx(
            "absolute top-0 left-0 w-full h-auto px-[20px] py-[10px] z-[1000]",
            item.type === "success" && "bg-elLightBg",
            item.type === "error" && "bg-elDarkBg",
          )}
        >
          <p className={"text-text text-[20px] text-center"}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
