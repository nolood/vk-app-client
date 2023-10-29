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

import { fetchUserFx } from "../entities/user/model";
import "./styles/globals.css";
import { routes } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [popout, setPopout] = useState<ReactNode | null>(
    <ScreenSpinner size="large" />,
  );

  useEffect(() => {
    fetchUserFx();
    setPopout(null);
  }, []);

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={popout}>
            <SplitCol>
              {/*<View activePanel={activePanel}>*/}
              {/*{routes.map(({ path, Component }) => (*/}
              {/*  <Panel className={"h-screen w-screen"} id={path}>*/}
              {/*    <Component key={path} />*/}
              {/*  </Panel>*/}
              {/*))}*/}
              {/*</View>*/}
              <BrowserRouter>
                <Routes>
                  {routes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                  ))}
                </Routes>
              </BrowserRouter>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
