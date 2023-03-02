import Mock from "mockjs";
import banners from "./banners.json";
import floors from "./banners.json";

// 第一个参数为请求地址  第二个参数为数据
Mock.mock("/mock/banners", { code: 200, data: banners });
Mock.mock("/mock/floors", { code: 200, data: floors });
