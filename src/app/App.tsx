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
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "../pages/Home";
import Persik from "../pages/Persik";
import { fetchUserFx } from "../entities/user/model";
import { OnBoardingSlide1, OnBoardingSlide2 } from "../pages";
import Main from "../pages/main/main";

const App = () => {
  const [activePanel, setActivePanel] = useState("main");
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

  const go: MouseEventHandler<HTMLElement> = (e) => {
    setActivePanel(e.currentTarget.dataset.to ?? "main");
    console.log(fetchedUser);
  };

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={popout}>
            <SplitCol>
              <View activePanel={activePanel}>
                <Home id="home" fetchedUser={fetchedUser} go={go} />
                <Persik id="persik" go={go} />
                <Main id="main" go={go} />
                <OnBoardingSlide1 id="slide1" go={go} />
                <OnBoardingSlide2 id="slide2" go={go} />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
