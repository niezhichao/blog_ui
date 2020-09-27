import request from "../utils/request"

export function addBlog(param) {

  return request({
    url: process.env.GATEWAY_API + 'blog/get',
    method: "post",
    data: param
  })
}
