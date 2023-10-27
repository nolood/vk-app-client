import { createEffect } from "effector";
import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import { AxiosError } from "axios";
import { api } from "../../../shared/api";
import { setUserIdToHeaders } from "../../../shared/api/api";

export const fetchUserFx = createEffect<void, UserInfo, AxiosError>(
  async () => {
    const vkUser = await bridge.send("VKWebAppGetUserInfo");
    setUserIdToHeaders(vkUser.id);
    await api.post("/users/create", vkUser);
    return vkUser;
  },
);
