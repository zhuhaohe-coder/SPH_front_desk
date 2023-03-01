<template>
  <div id="app">
    <FrontHeader></FrontHeader>
    <router-view></router-view>
    <FrontFooter v-show="$route.meta.isShowFooter"></FrontFooter>
  </div>
</template>

<script>
import FrontHeader from "./components/Header";
import FrontFooter from "./components/Footer";
export default {
  name: "App",
  components: {
    FrontHeader,
    FrontFooter,
  },
  mounted() {
    // 派发一个action,获取商品分类三级列表的数据
    this.$store.dispatch("categoryList");
  },
};
</script>

<style></style>
