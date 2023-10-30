import React, { useState, useEffect, ReactNode } from "react";
import {
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { fetchUserFx } from "../entities/user/model";
import "./styles/globals.css";
import { RouterProvider } from "react-router-dom";
import router from "../shared/router/router";

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
              {/*<BrowserRouter>*/}
              {/*  <Routes>*/}
              {/*    {routes.map(({ path, Component }) => (*/}
              {/*      <Route key={path} path={path} element={<Component />} />*/}
              {/*    ))}*/}
              {/*  </Routes>*/}
              {/*</BrowserRouter>*/}
              <RouterProvider router={router} />
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
