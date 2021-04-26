import { notification } from "antd";
import { ERROR, SUCCESS } from "../constants/mainPageConstants";

interface NotificationOptions {
  message: string;
  description?: string;
  duration: number;
}

export const getNotificationsOptions = (
  message: string,
  description?: string
): NotificationOptions => ({
  message: message.toString(),
  description: description?.toString(),
  duration: 4,
});

export const notice = {
  success: (message: string): void =>
    notification.success(getNotificationsOptions(SUCCESS, message)),
  error: (message: string): void =>
    notification.error(getNotificationsOptions(ERROR, message)),
};
