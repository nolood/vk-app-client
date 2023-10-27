import { Panel } from "@vkontakte/vkui";
import { api } from "../shared/api";
import { createEvaluationFx } from "../entities/evaluation/lib/evaluation-effects";
import { MainControls } from "../widgets/main-controls/ui";
import { MainMascot } from "../widgets/main-mascot/ui";

const Main = () => {
  const test = async () => {
    await api.get("users");
  };

  const evalTest = async () => {
    createEvaluationFx();
  };

  return (
    <>
      <MainMascot />
      <MainControls />
    </>
  );
};

export default Main;
