import { createEffect } from "effector";
import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import { AxiosError } from "axios";
import { api } from "../../../shared/api";

export const fetchUserFx = createEffect<void, UserInfo, AxiosError>(
  async () => {
    try {
      return await bridge.send("VKWebAppGetUserInfo");
    } catch (error) {
      ``;
      throw new Error("Failed to fetch user");
    }
  },
);

export const checkUserFx = createEffect<Pick<UserInfo, "id">, void>(
  async (id) => {
    try {
      return api.post("/users/check");
    } catch (error) {
      throw new Error("Failed to check user");
    }
  },
);
