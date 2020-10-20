import request from "../utils/request"

export function addBlog(param) {

  return request({
    url: process.env.GATEWAY_API + 'admin-api/blog/add',
    method: "post",
    data: param
  })
}

