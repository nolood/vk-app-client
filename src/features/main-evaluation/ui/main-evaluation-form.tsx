import { FormEvent } from "react";
import InputMask from "react-input-mask";
import { setActivePanel } from "../../../entities/panel/lib/panel-events";
import { EVALUATION_CREATE_ROUTE } from "../../../app/paths";
const MainEvaluationForm = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-center">
      <h3 className={"text-center text-[20px] mb-[18px]"}>Код для оценки</h3>
      <InputMask
        placeholder={"_ _ _  _ _ _"}
        mask={"* * *  * * *"}
        className={
          "h-[50px] rounded-[24px] mb-[10px] outline-none border-none text-center text-[32px] py-[5px] uppercase"
        }
      />
      <div className={"flex flex-col gap-[10px]"}>
        <button
          type={"submit"}
          className={"h-[50px] rounded-[24px] bg-slate-600"}
        >
          Пройти оценку
        </button>
        <button
          type={"button"}
          className={"h-[50px] rounded-[24px] bg-slate-600"}
          onClick={() => setActivePanel(EVALUATION_CREATE_ROUTE)}
        >
          Создать оценивание
        </button>
      </div>
    </form>
  );
};

export default MainEvaluationForm;
