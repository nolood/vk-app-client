import BasePage from "../shared/ui/base-page";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../shared/ui";
import { MAIN_ROUTE } from "../shared/router/paths";

const EvaluationCreateResult = () => {
  const params = useParams();
  const navigate = useNavigate();
  const codeArr = params.code?.split("");
  codeArr?.splice(3, 0, " ");
  const code = codeArr?.join("");

  if (!code)
    return (
      <BasePage>
        <h1 className="text-text text-[36px] font-bold text-center mb-[64px]">
          Произошла ошибка, попробуйте снова
        </h1>
        <Button onClick={() => navigate(MAIN_ROUTE)}>
          Вернуться на главную
        </Button>
      </BasePage>
    );

  return (
    <BasePage className="justify-center">
      <h2 className="text-text text-[20px] mb-[24px] text-center">
        Код для оценки
      </h2>
      <h1 className="text-text text-[36px] font-bold text-center uppercase">
        {code}
      </h1>
      <Button closed className="mt-[64px] mb-[36px]">
        Поделиться оцениванием
      </Button>
      <Button onClick={() => navigate(MAIN_ROUTE)}>Вернуться на главную</Button>
    </BasePage>
  );
};

export default EvaluationCreateResult;
