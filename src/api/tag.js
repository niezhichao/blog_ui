import request from "../utils/request";

/**
 * 获取所有标签  不含分页
 * @param param
 */
export function getTagList() {

  return request({
    url: process.env.GATEWAY_API + 'admin-api/tag/all',
    method: 'get',
    data: null
  });

}

export function addTag(param) {

  return request({
    url: process.env.GATEWAY_API + 'admin-api/tag/add',
    method: 'post',
    data: param
  });

}

/**
 * 获取所有标签  含分页
 * @param param
 */
export function getAllTagsWithPage(param) {

  return request({
    url: process.env.GATEWAY_API + 'admin-api/tag/page/all',
    method: 'get',
    params: param
  });

}
