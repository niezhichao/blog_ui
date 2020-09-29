import request from "../utils/request";

export function getTagList() {

  return request({
    url: process.env.GATEWAY_API + 'admin-api/tag/all',
    method: 'get',
    data: null
  });

}
