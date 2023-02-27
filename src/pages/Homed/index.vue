<template>
  <div>
    <TypeNav />
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank />
    <Like />
    <Floor />
    <Floor />
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
export default {
  name: "FrontHome",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
};
</script>

<style lang="less"></style>
