import { FormEvent } from "react";
import InputMask from "react-input-mask";
import { setActivePanel } from "../../../entities/panel/lib/panel-events";
import { EVALUATION_CREATE_ROUTE } from "../../../app/paths";
import { Button, MaskInput } from "../../../shared/ui";
const MainEvaluationForm = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center bg-bgSecondary self-center px-[50px] w-full rounded-[24px] py-[20px]"
    >
      <h3
        className={"text-center text-[22px] mb-[24px] text-theme font-semibold"}
      >
        Код для оценки
      </h3>
      <div className="flex flex-col gap-[20px]">
        <MaskInput mask={"* * *  * * *"} />
        <Button variant={"dark"}>Пройти оценивание</Button>
        <Button onClick={() => setActivePanel(EVALUATION_CREATE_ROUTE)}>
          Создать оценивание
        </Button>
      </div>
    </form>
  );
};

export default MainEvaluationForm;
