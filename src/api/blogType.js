import request from "../utils/request";

/**
 * 获取所有分类  不含分页
 * @param param
 */
export function getBlogTypeList() {

  return request({
    url: process.env.GATEWAY_API + 'admin-api/blogType/all',
    method: 'get',
    params: null
  });
}


export function addBlogType(param) {
  return request({
    url: process.env.GATEWAY_API + 'admin-api/blogType/add',
    method: 'post',
    data: param
  });
}

/**
 * 获取所有分类  含分页
 * @param param
 * get 方式传第参数 要用params
 * json 方式 用data
 */
export function getAllBlogTypeWithPage(param) {
  return request({
    url: process.env.GATEWAY_API + 'admin-api/blogType/page/all',
    method: 'get',
    params: param
  });
}

export function updateBlogType(param) {
  return request({
    url: process.env.GATEWAY_API + 'admin-api/blogType/update',
    method: 'post',
    data: param
  });
}

export function delType(param) {
  return request({
    url: process.env.GATEWAY_API + 'admin-api/blogType/delete',
    method: 'post',
    params: param
  });
}
