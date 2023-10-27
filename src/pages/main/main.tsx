import React, { MouseEventHandler } from "react";
import { Button, Panel } from "@vkontakte/vkui";
import { api } from "../../shared/api";
import { createEvaluationFx } from "../../entities/evaluation/lib/evaluation-effects";

const Main = ({
  id,
  go,
}: {
  id: string;
  go: MouseEventHandler<HTMLElement>;
}) => {
  const test = async () => {
    await api.get("users");
  };

  const evalTest = async () => {
    createEvaluationFx();
  };

  return (
    <Panel id={id}>
      Main
      <Button onClick={test}>Click</Button>
      <Button onClick={evalTest}>Создать оценивание</Button>
    </Panel>
  );
};

export default Main;
