import { NotificationType } from "../model/notifications";

export const notificationsHandler = (notifications: NotificationType[]) => {
  const newList = [...notifications];

  if (notifications.length >= 5) {
    newList.shift();
  }

  setTimeout(() => {
    const data = newList.filter((item) => item.id !== notifications.at(-1)?.id);
  }, 3000);
};
