import { createStore } from "effector";
import {
  deleteNotification,
  showNotification,
} from "../lib/notifications-events";
import { notificationsHandler } from "../lib/notification-handler";

export type NotificationType = {
  id?: number;
  text: string;
  type: "error" | "success";
};

export const $notificationsList = createStore<NotificationType[]>([])
  .on(showNotification, (state, payload) => [
    ...state,
    { ...payload, id: Date.now() },
  ])
  .on(deleteNotification, (state, id) =>
    state.filter((item) => item.id !== id),
  );

$notificationsList.watch(notificationsHandler);
