import { NotificationType } from "../model/notifications";
import { deleteNotification } from "./notifications-events";

export const notificationsHandler = (notifications: NotificationType[]) => {
  const item = notifications.at(-1);

  if (item) {
    setTimeout(() => {
      deleteNotification(item?.id ?? 0);
    }, 3000);
  }
};
