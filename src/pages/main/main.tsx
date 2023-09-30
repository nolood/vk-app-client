import React, { MouseEventHandler } from "react";
import { Button, Panel } from "@vkontakte/vkui";
import { api } from "../../shared/api";

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

  return (
    <Panel id={id}>
      Main
      <Button onClick={test}>Click</Button>
    </Panel>
  );
};

export default Main;
