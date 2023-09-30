import { createStore, fromObservable } from "effector";
import { UserInfo } from "@vkontakte/vk-bridge";
import { fetchUserFx } from "./userEffects";
import { setUserIdToHeaders } from "../../../shared/api/api";

export const $user = createStore<UserInfo | null>(null).on(
  fetchUserFx.doneData,
  (_, data) => data,
);
