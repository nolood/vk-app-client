import React, { MouseEventHandler } from "react";
import { Panel } from "@vkontakte/vkui";

const Main = ({
  id,
  go,
}: {
  id: string;
  go: MouseEventHandler<HTMLElement>;
}) => {
  return <Panel id={id}>Main</Panel>;
};

export default Main;
