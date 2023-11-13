import { FormEvent, useState } from "react";
import { EVALUATION_CREATE_ROUTE } from "../../../shared/router/paths";
import { Button, MaskInput } from "../../../shared/ui";
import { useNavigate } from "react-router-dom";
import { fetchEvaluationByCodeFx } from "../../../entities/evaluation/lib/evaluation-effects";
const MainEvaluationForm = () => {
  const [code, setCode] = useState<string>("");
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (code.length === 12 && !code.split(" ").find((item) => item === "_")) {
      fetchEvaluationByCodeFx(code);
    }
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
        <MaskInput mask={"* * *  * * *"} value={code} onChange={setCode} />
        <Button variant={"dark"} htmlType={"submit"}>
          Пройти оценивание
        </Button>
        <Button onClick={() => navigate(EVALUATION_CREATE_ROUTE)}>
          Создать оценивание
        </Button>
      </div>
    </form>
  );
};

export default MainEvaluationForm;
