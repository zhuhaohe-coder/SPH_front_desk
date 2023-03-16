// 对API进行统一管理
import requests from "./request";
import mockRequest from "./mockAjax";

// 三级联动接口--- /api/product/getBaseCategoryList (get请求,无参数)
export const reqCategoryList = () => {
  // axios发送请求返回的结果是promise对象
  return requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};
// 轮播图接口
export const reqBannerList = () => mockRequest.get("/banners");
// 楼梯接口
export const reqFloorList = () => mockRequest.get("/floors");

// 搜索模块数据接口
// params至少为一个空对象
export const reqSearchInfo = (params) => {
  return requests({
    url: "/list",
    method: "post",
    data: params,
  });
};

// 详情模块接口
export const reqDetailInfo = (params) => requests.get(`/item/${params}`);

// 将产品添加到购物车中(获取更新某一个产品的个数)
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({
    url: `cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });

// 添加到购物车/对已有物品进行数量改动
export const reqShopCartList = () => requests.get("/cart/cartList");
