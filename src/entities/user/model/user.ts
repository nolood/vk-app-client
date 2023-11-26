import { createStore } from "effector";
import { UserInfo } from "@vkontakte/vk-bridge";
import { fetchUserFx } from "../lib/user-effects";
import { changeUserBalance } from "../lib/user-events";
import { evaluateEvaluationFx } from "../../evaluation/model/evaluation-effects";

export interface IUser extends UserInfo {
  balance: number;
}

export const $user = createStore<IUser | null>(null)
  .on(fetchUserFx.doneData, (_, data) => data)
  .on(
    changeUserBalance,
    (state, payload) => state && { ...state, balance: state.balance + payload },
  )
  .on(
    evaluateEvaluationFx.doneData,
    (state, payload) => state && { ...state, balance: payload.balance },
  );
