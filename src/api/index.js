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
