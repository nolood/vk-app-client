import { createEvent } from "effector";
import { Criterion } from "../model/criteria";

export const addCriterion = createEvent<Criterion>();

export const changeCriterionName = createEvent<Criterion>();

export const deleteCriterion = createEvent<number>();
