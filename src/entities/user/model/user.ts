import { createStore } from "effector";
import { UserInfo } from "@vkontakte/vk-bridge";
import { fetchUserFx } from "./user-effects";

export interface IUser extends UserInfo {
  balance: number;
}

export const $user = createStore<IUser | null>(null).on(
  fetchUserFx.doneData,
  (_, data) => data,
);
