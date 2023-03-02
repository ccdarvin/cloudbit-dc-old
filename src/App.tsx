
import { Refine } from "@pankod/refine-core";
import {
  AuthPage,
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/reset.css";

import { DataProvider } from "@pankod/refine-strapi-v4";
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
import 'dayjs/locale/es';
import { authProvider, axiosInstance } from "./authProvider";
import { API_URL } from "./constants";
import { AppsList, AppsCreate, AppsEdit, AppsShow } from "pages/apps";
import { PatientsList, PatientsCreate, PatientsEdit, PatientsShow } from "pages/patients";

import { TreatmentsList, TreatmentsCreate, TreatmentsEdit, TreatmentsShow } from "pages/treatments";

import { DoctorsList, DoctorsCreate, DoctorsEdit, DoctorsShow } from "pages/doctors";
import { SettingOutlined } from '@ant-design/icons'

import { ProceduresList, ProceduresEdit, ProceduresShow } from "pages/procedures";

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
          resources={[{
            name: "apps",
            list: AppsList,
            create: AppsCreate,
            edit: AppsEdit,
            show: AppsShow,
            options: {
              hide: true,
            }
          }, {
            name: "dc-patients",
            options: {
              label: "Pacientes",
              route: "pacientes",
            },
            list: PatientsList,
            create: PatientsCreate,
            edit: PatientsEdit,
            show: PatientsShow
          }, {
            name: "dc-treatments",
            options: {
              label: "Tratamientos",
              route: "tratamientos",
            },
            list: TreatmentsList,
            create: TreatmentsCreate,
            edit: TreatmentsEdit,
            show: TreatmentsShow
          }, {
            name: "config",
            icon: <SettingOutlined />,
            options: {
              label: "Configuración",
            }
          }, {
            parentName: "config",
            name: "dc-doctors",
            options: {
              label: "Doctores",
              route: "doctores",
            },
            list: DoctorsList,
            create: DoctorsCreate,
            edit: DoctorsEdit,
            show: DoctorsShow
          }, {
            parentName: "config",
            name: "dc-procedures",
            options: {
              label: "Procedimientos",
              route: "procedimientos",
            },
            list: ProceduresList,
            edit: ProceduresEdit,
            show: ProceduresShow
          }]}
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
