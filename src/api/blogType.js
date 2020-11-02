import request from "../utils/request";

export function getBlogTypeList() {

  return request({
    url: process.env.GATEWAY_API + 'admin-api/blogType/all',
    method: 'get',
    data: null
  });
}


export function addBlogType(param) {
  return request({
    url: process.env.GATEWAY_API + 'admin-api/blogType/add',
    method: 'post',
    data: param
  });
}
