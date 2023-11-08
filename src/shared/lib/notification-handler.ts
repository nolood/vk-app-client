import { NotificationType } from "../model/notifications";

export const notificationsHandler = (notifications: NotificationType[]) => {
  const newList = [...notifications];

  if (notifications.length >= 5) {
    newList.shift();
  }

  setTimeout(() => {
    return newList.filter((item) => item.id !== notifications.at(-1)?.id);
  }, 3000);
};
