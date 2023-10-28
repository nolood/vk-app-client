import React, {
  useState,
  useEffect,
  ReactNode,
  MouseEventHandler,
} from "react";
import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
  Panel,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "../pages/Home";
import Persik from "../pages/Persik";
import { fetchUserFx } from "../entities/user/model";
import {
  CreateEvaluations,
  OnBoardingSlide1,
  OnBoardingSlide2,
} from "../pages";
import Main from "../pages/main";
import "./styles/globals.css";
import { useStore } from "effector-react";
import { $activePanel } from "../entities/panel/model/panel";
import { routes } from "./routes";

const App = () => {
  const activePanel = useStore($activePanel);
  const [fetchedUser, setUser] = useState<UserInfo | undefined>();
  const [popout, setPopout] = useState<ReactNode | null>(
    <ScreenSpinner size="large" />,
  );

  useEffect(() => {
    // async function fetchData() {
    // 	const user = await bridge.send('VKWebAppGetUserInfo');
    // 	setUser(user);
    // 	setPopout(null);
    // }
    // fetchData();
    fetchUserFx();
    setPopout(null);
  }, []);

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={popout}>
            <SplitCol>
              <View activePanel={activePanel}>
                {routes.map(({ path, Component }) => (
                  <Panel className={"h-screen w-screen"} id={path}>
                    <Component key={path} />
                  </Panel>
                ))}
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
