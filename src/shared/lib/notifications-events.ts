import { createEvent } from "effector";
import { NotificationType } from "../model/notifications";

export const showNotification = createEvent<NotificationType>();
