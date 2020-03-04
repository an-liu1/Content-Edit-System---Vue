import request from "./request";

const getAPI =
  "http://159.89.121.159/somoInit/searchSomoplayWebByPageAndSection"; //GET
const otherAPI = "http://159.89.121.159/somo/somoplayWeb"; //POST PUT DELETE
const AuthAPI = "http://159.89.121.159/auth/login";
// const Register = "http://159.89.121.159:3008/auth/register";
// {
// 	"email":"admin@somoplay.com",
// 	"password": "111111",
// 	"appId": "6",
// 	"userType": "61"
// }
const imgAPI = "http://159.89.121.159/somo/somoplayWeb/";

export const getData = address => {
  return request("get", getAPI + address);
};

export const newData = params => {
  return request("post", otherAPI, params);
};

export const deleteData = params => {
  return request("delete", otherAPI, params);
};

export const editData = params => {
  return request("put", otherAPI, params);
};

export const authData = params => {
  return request("auth", AuthAPI, params);
};

export const getImg = address => {
  return imgAPI + address;
};
