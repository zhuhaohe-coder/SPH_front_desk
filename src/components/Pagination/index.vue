<template>
  <div class="pagination">
    <button :disabled="pageNo === 1" @click="handlePageNo(pageNo - 1)">
      上一页
    </button>
    <button
      v-if="startAndEndPage.start > 1"
      @click="handlePageNo(1)"
      :class="{ active: pageNo === 1 }"
    >
      1
    </button>
    <button v-if="startAndEndPage.start > 2">···</button>

    <button
      v-for="(page, index) in startAndEndPage.end"
      :key="index"
      v-if="page >= startAndEndPage.start"
      @click="handlePageNo(page)"
      :class="{ active: pageNo === page }"
    >
      {{ page }}
    </button>

    <button v-if="startAndEndPage.end < totalPage - 1">···</button>
    <button
      v-if="startAndEndPage.end < totalPage"
      @click="handlePageNo(totalPage)"
      :class="pageNo === totalPage"
    >
      {{ totalPage }}
    </button>
    <button :disabled="pageNo === totalPage" @click="handlePageNo(pageNo + 1)">
      下一页
    </button>
    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 连续页码的起始页和结束页
    startAndEndPage() {
      // 解构赋值
      const { pageNo, continues, totalPage } = this;
      let start,
        end = 0;
      start = pageNo - Math.floor(continues / 2);
      end = pageNo + Math.floor(continues / 2);
      if (start <= 0) {
        start = 1;
        end = continues;
      }
      if (end > totalPage) {
        end = totalPage;
        start = totalPage - continues + 1;
      }
      return { start, end };
    },
  },
  methods: {
    handlePageNo(num) {
      this.$emit("getPageNo", num);
    },
  },
};
</script>
<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
