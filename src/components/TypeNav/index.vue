<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" @click="goSearch" v-show="isShow">
            <div class="all-sort-list2">
              <div
                class="item"
                v-for="(cg1, index) in categoryList"
                :key="cg1.categoryId"
              >
                <h3
                  @mouseenter="changeIndex(index)"
                  :class="{ cur: currentIndex === index }"
                >
                  <a
                    :data-categoryName="cg1.categoryName"
                    :data-category1Id="cg1.categoryId"
                    >{{ cg1.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix">
                  <div
                    class="subitem"
                    v-for="cg2 in cg1.categoryChild"
                    :key="cg2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="cg1.categoryName"
                          :data-category2Id="cg2.categoryId"
                          >{{ cg2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="cg3 in cg2.categoryChild"
                          :key="cg3.categoryId"
                        >
                          <a
                            :data-categoryName="cg1.categoryName"
                            :data-category3Id="cg3.categoryId"
                            >{{ cg3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 按需引入lodash中的throttle函数(节流)
import throttle from "lodash/throttle.js";

export default {
  name: "TypeNav",
  data() {
    return {
      // 一级菜单悬停背景
      currentIndex: -1,
      isShow: true,
    };
  },
  mounted() {
    if (this.$route.path !== "/home") {
      this.isShow = false;
    }
  },
  methods: {
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    goSearch(event) {
      const { categoryname, category1id, category2id, category3id } =
        event.target.dataset;
      const location = {
        name: "search",
      };
      const query = {};
      if (categoryname) {
        query.categoryName = categoryname;
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        location.query = query;
        this.$router.push(location);
      }
    },
    enterShow() {
      this.isShow = true;
    },
    leaveShow() {
      this.currentIndex = -1;
      if (this.$route.path !== "/home") {
        this.isShow = false;
      }
    },
  },
  computed: {
    // 注意这里不能使用数组的形式.因为大仓库中的state里有home和search两个模块
    ...mapState({
      //这里的state参数为大仓库中的数据
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
};
</script>

<style lang="less" scoped>
a {
  cursor: pointer;
}
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          .cur {
            background-color: skyblue;
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
    // 元素进入时的状态
    .sort-enter,
    .sort-leave-to {
      height: 0px;
    }
    // 元素离开时的状态
    .sort-enter-to,
    .sort-leave {
      height: 461px;
    }
    // 配置动画的时间,速率
    .sort-enter-active,
    .sort-leave-active {
      transition: all 0.2s linear;
    }
  }
}
</style>
