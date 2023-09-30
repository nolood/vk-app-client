import React, { MouseEventHandler } from "react";
import { Panel } from "@vkontakte/vkui";

const Slide1 = ({
  id,
  go,
}: {
  id: string;
  go: MouseEventHandler<HTMLElement>;
}) => {
  return <Panel id={id}>OnBoarding Slide 1</Panel>;
};

export default Slide1;
