<template>
  <div>
    <TypeNav />
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank />
    <Like />
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/pages/Homed/ListContainer";
import Recommend from "@/pages/Homed/Recommend";
import Rank from "@/pages/Homed/Rank";
import Like from "@/pages/Homed/Like";
import Floor from "@/pages/Homed/Floor";
import Brand from "@/pages/Homed/Brand";
import { mapState } from "vuex";
export default {
  name: "FrontHome",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  mounted() {
    // 请求floorList数据
    this.$store.dispatch("floorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style lang="less"></style>
