import { useStore } from "effector-react";
import { $criteria, Criterion } from "../model/criteria";
import {
  addCriterion,
  changeCriterionName,
  deleteCriterion,
} from "../lib/criteria-events";

const CriteriaAdd = () => {
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
      <p className="mb-[20px]">Критерии:</p>
      <ul className="flex flex-col gap-[10px]">
        {criteria.map((item) => (
          <li className={"flex gap-[10px]"} key={item.id}>
            <span onClick={() => handleDelete(item)}>&#10006;</span>
            <input
              onChange={(e) =>
                handleChangeName({ ...item, title: e.target.value })
              }
              value={item.title}
              type="text"
              placeholder={"Название критерия"}
            />
          </li>
        ))}
        <li onClick={handleAdd} className="flex gap-[10px] cursor-pointer">
          <span>&#10010;</span>
          <p>Добавить ещё</p>
        </li>
      </ul>
    </div>
  );
};

export default CriteriaAdd;
