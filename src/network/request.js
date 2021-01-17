import axios from "axios";

//方法2 axios内部自带promise方法
export function request(confing) {
  //创建axios实例
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 2000,
  });
  //发送真正的网络请求
  return instance(confing);
}
