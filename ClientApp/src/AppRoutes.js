import Account from "./components/Account";
import Analytics from "./components/Analytics";
import Vehicles from "./components/Vehicles";
import Overview from "./components/Overview";
import Factories from "./components/Factories";
import { FetchData } from "./components/FetchData";
import ErrorPage from "./components/ErrorPage";
import { Home } from "./components/Home";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/account',
    element: <Account />
  },
  {
    path: '/analytics',
    element: <Analytics />
  },
  {
    path: '/overview',
    element: <Overview />
  },
  {
    path: '/vehicle-tracking',
    element: <Vehicles />
  },
  {
    path: '/factories',
    element: <Factories />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/logon',
    element: <Login />
    },
  {
    path: '*',
    element: <ErrorPage errorCode={404} />
  }
];

export default AppRoutes;
