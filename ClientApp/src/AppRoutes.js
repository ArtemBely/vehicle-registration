import { Account } from "./components/Account";
import Analytics from "./components/Analytics";
import { FetchData } from "./components/FetchData";
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
  }
];

export default AppRoutes;
