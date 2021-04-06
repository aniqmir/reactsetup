import { RouterPathEnum } from "../enums/RouterPathEnum";
import { Dashboard, Transactions, Login } from "../screens";

const routes = [
  {
    component: Login,
    path: RouterPathEnum.LOGIN,
    title: "Login Title",
    exact: true,
    restricted: true,
    type: "public",
  },
  {
    component: Dashboard,
    path: RouterPathEnum.HOME,
    title: "Dashboard Title",
    exact: true,
    restricted: false,
    type: "public",
  },
  {
    component: Transactions,
    path: RouterPathEnum.TRANSACTIONS,
    title: "Transaction Title",
    exact: true,
    type: "private",
  },
];

export default routes;
