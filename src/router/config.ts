import { All_page } from "./../pages/all";
import App from "../App";
import { A_page } from "../pages/a";
import { B_page } from "../pages/b";
import { C_page } from "../pages/c";
import { D_page } from "../pages/d";
const routers = [
  {
    path: "/",
    component: App,
    exact: true,
    routers: [
      {
        path: "/all",
        components: All_page,
        nameCN:'首页',
        componentsName:'All_page',
        routers: [
          {
            path: "/all/a",
            components: A_page,
            nameCN:'A按钮',
            componentsName:'A_page',
          },
          {
            path: "/all/b",
            components: B_page,
            nameCN:'B按钮',
            componentsName:'B_page',
          },
          {
            path: "/all/c",
            components: C_page,
            nameCN:'C按钮',
            componentsName:'C_page',
          },
          {
            path: "/all/d",
            components: D_page,
            nameCN:'D按钮',
            componentsName:'D_page',
          },
        ],
      },
    ],
  },
];
export default routers;
