import Vue from "vue";
import VueRouter from "vue-router";
// 引入路由配置
import routes from "./routes";

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
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置 {y:0}表示回到顶部
    return { y: 0 };
  },
});
