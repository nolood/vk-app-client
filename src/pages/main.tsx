import { api } from "../shared/api";
import { createEvaluationFx } from "../entities/evaluation/lib/evaluation-effects";
import { MainMascot } from "../widgets/main-mascot/ui";
import useTheme from "../shared/hooks/use-theme";
import { MainControls } from "../widgets/main-controls/ui";
import BasePage from "../shared/ui/base-page";
import { Header } from "../shared/ui";

const Main = () => {
  const { theme, setTheme } = useTheme();

  const test = async () => {
    await api.get("users");
  };

  const evalTest = async () => {
    createEvaluationFx();
  };

  return (
    <BasePage>
      <Header />
      <MainMascot />
      <MainControls />
    </BasePage>
  );
};

export default Main;
