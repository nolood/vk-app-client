import React, { MouseEventHandler } from "react";
import { Panel } from "@vkontakte/vkui";

const Slide2 = ({
  id,
  go,
}: {
  id: string;
  go: MouseEventHandler<HTMLElement>;
}) => {
  return <Panel id={id}>OnBoarding Slide 2</Panel>;
};

export default Slide2;
