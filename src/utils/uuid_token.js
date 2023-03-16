// 游客临时身份,用于获取购物车数据
import { v4 as uuidv4 } from "uuid";

export default function () {
  if (!localStorage.getItem("UUIDTOKEN")) {
    localStorage.setItem("UUIDTOKEN", uuidv4());
  }
  return localStorage.getItem("UUIDTOKEN");
}
