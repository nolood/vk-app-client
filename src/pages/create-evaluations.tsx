import CriteriaAdd from "../features/criteria-add/ui/criteria-add";
import Back from "../shared/ui/back";
import { MAIN_ROUTE } from "../app/paths";
import { ChipsSelect } from "@vkontakte/vkui/dist/components/ChipsSelect/ChipsSelect";
import { Checkbox } from "@vkontakte/vkui";

const CreateEvaluations = () => {
  return (
    <div>
      <Back to={MAIN_ROUTE} />
      <form className="flex flex-col gap-[20px]">
        <div>
          <input
            maxLength={70}
            className={"w-full p-[10px]"}
            type="text"
            placeholder={"Название оценивания"}
          />
        </div>
        <div className="flex items-center justify-center w-2/3 h-[200px] bg-slate-600">
          <span>Выберите файл с изображением</span>
        </div>
        <textarea className="h-[150px] resize-none" maxLength={500}></textarea>
        <CriteriaAdd />
        <ChipsSelect
          placeholder="Критерии"
          options={[
            { label: "Бизнес", value: "Бизнес" },
            { label: "Технологии", value: "Технологии" },
          ]}
          value={[{ label: "Бизнес", value: "Бизнес" }]}
        />
        <Checkbox>Приватное оценивание</Checkbox>
      </form>
    </div>
  );
};

export default CreateEvaluations;
