import { useStore } from "effector-react";
import { $criteria, Criterion } from "../model/criteria";
import {
  addCriterion,
  changeCriterionName,
  deleteCriterion,
} from "../lib/criteria-events";
import { Input } from "../../../shared/ui";
import { ChangeEvent } from "react";
import clsx from "clsx";

const CriteriaAdd = ({ error }: { error: boolean }) => {
  const criteria = useStore($criteria);

  const handleAdd = () => {
    addCriterion({ title: "", id: Date.now() });
  };

  const handleChangeName = (item: Criterion) => {
    changeCriterionName(item);
  };

  const handleDelete = (item: Criterion) => {
    deleteCriterion(item.id);
  };

  return (
    <div>
      <p
        className={clsx(
          "mb-[20px] text-text text-[20px]",
          error && "text-error",
        )}
      >
        Критерии:
      </p>
      <ul className="flex flex-col gap-[10px]">
        {criteria.map((item) => (
          <li
            className={
              "flex items-center gap-[10px] w-full text-text text-[20px]"
            }
            key={item.id}
          >
            <span
              className={"cursor-pointer"}
              onClick={() => handleDelete(item)}
            >
              &#10006;
            </span>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChangeName({ ...item, title: e.target.value })
              }
              value={item.title}
              placeholder={"Название критерия"}
              className={"w-full"}
            />
          </li>
        ))}
        <li
          onClick={handleAdd}
          className="flex gap-[10px] cursor-pointer text-text text-[20px] w-max"
        >
          <span>&#10010;</span>
          <p>Добавить критерий</p>
        </li>
      </ul>
    </div>
  );
};

export default CriteriaAdd;
