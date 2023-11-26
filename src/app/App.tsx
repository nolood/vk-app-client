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
import Notifications from "../shared/ui/notifications";

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
              <Notifications />
              <RouterProvider router={router} />
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
