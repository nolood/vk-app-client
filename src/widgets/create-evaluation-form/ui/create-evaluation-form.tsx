import Back from "../../../shared/ui/back";
import { MAIN_ROUTE } from "../../../app/paths";
import CriteriaAdd from "../../../features/criteria-add/ui/criteria-add";
import { Checkbox } from "@vkontakte/vkui";
import { ChipsSelect, Input, TextArea } from "../../../shared/ui";
import Balance from "../../../shared/ui/balance";
import { ImageUpload } from "../../../features/image-upload/ui";

const CreateEvaluationForm = () => {
  return (
    <div className="w-full px-[20px]">
      <div className="w-full mb-[20px] flex items-center justify-between">
        <Back to={MAIN_ROUTE} />
        <Balance variant={"light"} />
      </div>
      <form className="flex flex-col gap-[20px]">
        <Input
          placeholder={"Введите название оценивания..."}
          className="w-full"
          maxLength={70}
        />
        <ImageUpload />
        <TextArea
          className="w-full  h-[200px]"
          maxLength={500}
          placeholder={"Введите описание оценивания..."}
        />
        <CriteriaAdd />
        {/*<ChipsSelect*/}
        {/*  placeholder="Критерии"*/}
        {/*  options={[*/}
        {/*    { label: "Бизнес", value: "Бизнес" },*/}
        {/*    { label: "Технологии", value: "Технологии" },*/}
        {/*  ]}*/}
        {/*  value={[{ label: "Бизнес", value: "Бизнес" }]}*/}
        {/*  className={*/}
        {/*    "bg-elLightBg rounded-[20px] text-text border-[2px] border-solid border-elLightBorder"*/}
        {/*  }*/}
        {/*/>*/}
        <ChipsSelect
          options={[
            { label: "Бизнес", value: "Бизнес" },
            { label: "Технологии", value: "Технологии" },
          ]}
          placeholder={"Выберите категории"}
        />
        <Checkbox>Приватное оценивание</Checkbox>
        <button>Создать оценивание</button>
      </form>
    </div>
  );
};

export default CreateEvaluationForm;
