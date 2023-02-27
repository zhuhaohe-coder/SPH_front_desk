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
};
</script>

<style></style>
