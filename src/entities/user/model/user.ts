import { createStore, fromObservable } from "effector";
import { UserInfo } from "@vkontakte/vk-bridge";
import { checkUserFx, fetchUserFx } from "./userEffects";

export const $user = createStore<UserInfo | null>(null).on(
  fetchUserFx.doneData,
  (_, data) => data,
);

const userObserver = fromObservable<UserInfo>($user);

userObserver.watch((user) => checkUserFx({ id: user.id }));
