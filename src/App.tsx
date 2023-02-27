import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  AuthPage,
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/reset.css";

import { DataProvider } from "@pankod/refine-strapi-v4";
import { AntdInferencer } from "@pankod/refine-inferencer/antd";
import routerProvider from "@pankod/refine-react-router-v6";
import { RefineKbarProvider } from "@pankod/refine-kbar";
import { ColorModeContextProvider } from "contexts";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";
import { authProvider, axiosInstance } from "./authProvider";
import { API_URL } from "./constants";

function App() {
  return (
    <ColorModeContextProvider>
      <RefineKbarProvider>
        <Refine
          authProvider={authProvider}
          dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
          LoginPage={AuthPage}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "posts",
              list: AntdInferencer,
              edit: AntdInferencer,
              show: AntdInferencer,
              create: AntdInferencer,
              canDelete: true,
            },
          ]}
          Title={Title}
          Header={Header}
          Sider={Sider}
          Footer={Footer}
          Layout={Layout}
          OffLayoutArea={OffLayoutArea}
          routerProvider={routerProvider}
        />
      </RefineKbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
