import { createStore } from "effector";
import { showNotification } from "../lib/notifications-events";
import { notificationsHandler } from "../lib/notification-handler";

export type NotificationType = {
  id?: number;
  text: string;
  type: number;
};

export const $notificationsList = createStore<NotificationType[]>([]).on(
  showNotification,
  (state, payload) => [...state, { ...payload, id: Date.now() }],
);

$notificationsList.watch(notificationsHandler);
