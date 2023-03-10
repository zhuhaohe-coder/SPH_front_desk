import Home from "@/pages/Homed";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
export default [
  //重定向,初始化时展示home
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    meta: {
      isShowFooter: true,
    },
  },
  {
    // 传递params参数时需要占位,且用对象形式时必须使用name,不能使用path
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    name: "detail",
    path: "/detail/:skuId",
    component: Detail,
    meta: {
      isShowFooter: true,
    },
  },
];
