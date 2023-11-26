import { createEffect } from "effector";
import bridge from "@vkontakte/vk-bridge";
import { api } from "../../../shared/api";
import { setUserIdToHeaders } from "../../../shared/api/api";
import { IUser } from "../model/user";

export const fetchUserFx = createEffect<void, IUser>(async () => {
  const vkUser = await bridge.send("VKWebAppGetUserInfo");
  setUserIdToHeaders(vkUser.id);
  const res = await api.post("/users/create", vkUser);
  return res.data;
});
