import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Homed";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

Vue.use(VueRouter);

// VueRouter原型对象上的push方法,这里备份到window中,上下文发生变化
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location) {
  return originPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = function (location) {
  return originReplace.call(this, location).catch((err) => err);
};

export default new VueRouter({
  routes: [
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
  ],
});
