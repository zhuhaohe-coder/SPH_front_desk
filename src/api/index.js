// 对API进行统一管理
import requests from "./request";

// 三级联动接口--- /api/product/getBaseCategoryList (get请求,无参数)
export const reqCategoryList = () => {
  // axios发送请求返回的结果是promise对象
  return requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};
