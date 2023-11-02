import { createEvent } from "effector";
import { Criterion } from "../../../features/criteria-add/model/criteria";

export const setActiveCriterion = createEvent<Criterion | null>();
